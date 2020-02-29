import React from 'react'
import './style.css';
import {
    Link
  } from "react-router-dom";
export default () => {
    return (
        <nav>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li class="logo"><Link>PIZZINI</Link></li>
            <li><Link>Delivery</Link></li>
            <li><Link>Contact</Link></li>
        </ul>

        <ul id="second-nav">
            <li><Link>Menu</Link></li>
            <li><Link>Menu</Link></li>
            <li><Link>Menu</Link></li>
            <li><Link>Menu</Link></li>
            <li><Link>Menu</Link></li>
        </ul>
    </nav>

    )
}