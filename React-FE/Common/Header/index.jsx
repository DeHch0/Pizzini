import React from 'react'
import './style.css';
import {
    Link
  } from "react-router-dom";
export default () => {
    return (
        <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li class="logo"><Link>PIZZINI</Link></li>
            <li><Link to='/delivery'>Delivery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <ul id="second-nav">
            <li><Link to="login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
            <li><Link to="products">Products</Link></li>
            <li><Link to="login">Menu</Link></li>
            <li><Link to="login">Menu</Link></li>
        </ul>
    </nav>

    )
}