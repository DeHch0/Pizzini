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
        sessionStorage.clear();
        let cookies = document.cookie.split(";");
        console.log(cookies);
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        
        checkIsLogged();
        checkIsAdmin();
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
                    <Link to='/category'>Categories</Link> <span className='hr'>|</span>
                    <Link to='/product/create'>Create Product</Link><span className='hr'>|</span>
                </span> : null}
                {isLogged
                ?
                <span>
                <Link to={'user/' + username}>{username}</Link>
                <span className='hr'>|</span>
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
                <li><Link to="/about">За нас</Link></li>
                <li><Link to="/">Меню</Link></li>
                <li><Link to="/restaurants">Ресторанти</Link></li>
                <li><Link to="/contact">Контакти</Link></li>
                <li><Link to="/bucket">Кошница - {bucket}</Link></li>
            </ul>
            </div>


            <h2 className='path'>ПИЦИ</h2>
        </nav>

    )
}