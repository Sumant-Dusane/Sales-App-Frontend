import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/"><h2 className='navbar__logo'>AVALAUNCH.ai</h2></a>
            <ul className="navbar__navs">
                <li><a href="/">Home</a></li>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <li className='btn btn-primary--small'><a href="/auth">Login</a></li>
            </ul>
        </div>
    )
}
