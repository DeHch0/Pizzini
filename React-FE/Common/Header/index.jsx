import React from 'react'
import './style.css';
import cookie from 'react-cookies';

import {
    Link
  } from "react-router-dom";
export default (bucket) => {
    console.log(bucket);
    let {checkIsAdmin} = bucket;
    let {checkIsLogged} = bucket;
    let {isLogged} = bucket; 
    let {isAdmin} = bucket;
    bucket= bucket.bucket;
        let username = cookie.load('username');

    const logout = () => {
        checkIsLogged();
        checkIsAdmin();
        sessionStorage.clear();
        cookie.remove('username');
        cookie.remove('auth_cookie');
    }

    return (
        <nav className='nav-main'>

            <div className="heading-navbar">
                <div className="order">
                <Link>Поръчки: 088 868 6333</Link>
                </div>

            <div className="user">
                {isAdmin ?
                <span>
                    <Link to='/category'>Categories</Link>
                    <Link to='/product/create'>Create Product</Link>
                </span> : null}
                {isLogged
                ?
                <span>
                <Link to={'user/' + username}>{username}</Link>
                |
                <Link onClick={logout}>Logout</Link>

                </span>
                :
                <span>

                <Link to="/register">Регистрация</Link>
                |
                <Link to="/login">Вход</Link>
                </span>
                }
            </div>
            </div>

            <div className="navigation">
            <ul>
                <li><Link to="/">За нас</Link></li>
                <li><Link to="#">Меню</Link></li>
                <li><Link to="#">Ресторанти</Link></li>
                <li><Link to="#">Контакти</Link></li>
                <li><Link to="/bucket">Кошница - {bucket}</Link></li>
            </ul>
            </div>


            <h2 className='path'>ПИЦИ</h2>
        </nav>

    )
}