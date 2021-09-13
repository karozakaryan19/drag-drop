import React from 'react';
import { Link } from "react-router-dom";

import { paths } from '../../routes/paths';

import './Home.scss';

const Home = () => {
    return (
        <section className='section'>
            <div className='wrapper_home container'>
                <h1 className='wrapper_home__title'>Добро пожаловать</h1>
                <p className='wrapper_home__text'>Если у вас есть аккаунт пожалуйста заполните логин и пароль.</p>
                <p className='wrapper_home__text'>Если у вас нет аккаунта пожалуйста зарегистрируйтесь</p>
                <div className='wrapper_home__block'>
                    <Link className='wrapper_home__link' to={paths.signIn}>Войти</Link>
                    <Link className='wrapper_home__link' to={paths.signUp}>Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Home;
