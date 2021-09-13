import axios from 'axios';

const API = 'https://trello.backend.tests.nekidaem.ru/api/v1';

const getLocalAccessToken = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    return accessToken;
}

const getLocalRefreshToken = () => {
    const refreshToken = window.localStorage.getItem("refreshToken");
    return refreshToken;
}

const refreshToken = () => {
    return instance.post("/auth/refreshtoken", {
        refreshToken: getLocalRefreshToken(),
    });
}

const instance = axios.create({
    baseURL: API,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            config.headers.Authorization = `JWT ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await refreshToken();
                    const { accessToken } = rs.data;
                    window.localStorage.setItem("accessToken", accessToken);
                    instance.defaults.headers.common["x-access-token"] = accessToken;

                    return instance(originalConfig);
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        return Promise.reject(_error.response.data);
                    }

                    return Promise.reject(_error);
                }
            }

            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }

        return Promise.reject(err);
    }
);

export default instance;