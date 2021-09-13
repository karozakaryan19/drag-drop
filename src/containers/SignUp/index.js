import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { paths } from '../../routes/paths';
import { Input } from '../../components/index';
import { inputData } from '../../utils/index';
import { authActions } from '../../store/action';
import { authSelector } from '../../store/selector';

import './SignUp.scss';

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const errMessageRequst = useSelector(authSelector.errMessageRequst);
    const {
        watch,
        errors,
        trigger,
        register,
        formState,
        handleSubmit,
    } = useForm({
        mode: 'all',
    });
    const { isValid } = formState;

    const passwordRef = useRef(null);
    passwordRef.current = watch('password', '');

    const onSubmit = (values) => {
        const { username, email, password } = values;
        const user = { username, email, password };

        dispatch(authActions.signup(user, history));
    }

    const inputList = inputData.map(({ name, type, validation, lableText, placeholder }) => (
        <Input
            key={`${name}`}
            type={type}
            name={name}
            onBlur={trigger}
            lableText={lableText}
            errorName={errors[name]}
            requestErrorMessage={errMessageRequst[name]}
            placeholder={placeholder}
            refy={
                name === 'confirmPassword'
                    ? register(validation(passwordRef))
                    : register(validation)
            }
        />
    ));

    return (
        <section
            className='section'
        >
            <div className='container wrapper_auth'>
                <h1 className='wrapper__title' >Регистрация</h1>
                <form
                    className='wrapper_auth__form'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {inputList}
                    <button
                        type="submit"
                        disabled={!isValid}
                        className='wrapper_auth__form__btn'
                    >
                        Создайте
                    </button>
                </form>
                <div className='wrapper_auth__form__block'>
                    Уже есть аккаунт?
                    <Link
                        className='wrapper_auth__form__link'
                        to={paths.signIn}
                    >
                        Войти
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signup;
