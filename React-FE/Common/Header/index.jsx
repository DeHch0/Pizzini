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
                <Link>Поръчайте на тел.: 088 868 6333</Link>
                </div>

            <div className="user">
                <Link to="/login">Login</Link>|
                <Link to="/register">Register</Link>
            </div>
            </div>

            <div className="navigation">
            <ul>
                <li><Link to="/">Начало</Link></li>
                <li><Link to="#">Начало</Link></li>
                <li><Link to="#">Начало</Link></li>
                <li><Link to="#">Начало</Link></li>
            </ul>
            </div>
            <h2>Меню</h2>
        </nav>

    )
}