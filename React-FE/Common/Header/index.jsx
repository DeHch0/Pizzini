import React from 'react'
import './style.css';
import {
    Link
  } from "react-router-dom";
export default () => {
    return (
        <nav className='nav-main'>

            <div className="heading-navbar">
                <div className="order">
                <Link>Поръчки: 088 868 6333</Link>
                </div>

            <div className="user">
                <Link to="/register">Регистрация</Link>
                |
                <Link to="/login">Вход</Link>
            </div>
            </div>

            <div className="navigation">
            <ul>
                <li><Link to="/">За нас</Link></li>
                <li><Link to="#">Меню</Link></li>
                <li><Link to="#">Ресторанти</Link></li>
                <li><Link to="#">Контакти</Link></li>
            </ul>
            </div>


            <h2 className='path'>ПИЦИ</h2>
        </nav>

    )
}