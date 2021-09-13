const required = 'Введите действительный адрес электронной почты';

const inputValidation = {
	username: {
		required,
		minLength: {
			value: 6,
			message: 'Имя должно состоять не менее чем из 6 символов',
		},
		pattern: {
			value: /^\w/i,
			message: 'Введите действительный имя',
		},
	},
	email: {
		required,
		pattern: {
			value: /^(([^<>()[\]\\.,*/;:\s@"]+(\.[^<>()[\]\\.*,/;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
			message: 'Введите действительный адрес электронной почты',
		},
	},
	password: {
		required,
		minLength: {
			value: 8,
			message: 'Пароль должен состоять не менее чем из 8 символов',
		},
	},
	confirmPassword: (passwordRef) => {
		return {
			required,
			validate: (value) => value === passwordRef.current || 'Пароли не совпадают',
		};
	},
};

export default inputValidation;
