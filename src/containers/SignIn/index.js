import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom"

import { paths } from '../../routes/paths';
import { Input } from '../../components/index';
import { inputData } from '../../utils/index';
import { authActions } from '../../store/action';

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        errors,
        trigger,
        register,
        handleSubmit,
    } = useForm({
        mode: 'all',
    });

    const onSubmit = (values) => {
        const { username, password } = values;
        const user = { username, password };

        dispatch(authActions.signin(user, history));
    };

    const inputList = [inputData[0], inputData[2]].map(({ name, type, validation, lableText, placeholder }) => (
        <Input
            key={`${name}`}
            type={type}
            name={name}
            onBlur={trigger}
            lableText={lableText}
            errorName={errors[name]}
            placeholder={placeholder}
            refy={register(validation)}
        />
    ));

    return (
        <section
            className='section'
        >
            <div className='container wrapper_auth'>
                <h1 className='wrapper__title' >Войти</h1>
                <form
                    className='wrapper_auth__form'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {inputList}
                    <button
                        type="submit"
                        className='wrapper_auth__form__btn'
                    >
                        Войти
                    </button>
                </form>
                <div className='wrapper_auth__form__block'>
                    Новый клиент?
                    <Link
                        className='wrapper_auth__form__link'
                        to={paths.signUp}
                    >
                        Регистрация
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signup;
