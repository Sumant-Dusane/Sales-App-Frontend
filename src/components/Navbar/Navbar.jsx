import React, { useState } from 'react';
import "./navbar.scss";

export default function Navbar() {
    const [navbarVisibility, setnavbarVisibility] = useState(false);
    return (
        <>
            <button className="btn btn-open" onClick={() => setnavbarVisibility(true)}><i className="fas fa-bars"></i></button>
            <div className={navbarVisibility ? "navbar show" : "navbar"}>
                <button className="btn btn-close" onClick={() => setnavbarVisibility(false)}><i className="fas fa-times"></i></button>
                <a href="/"><h2 className='navbar__logo'>AVALAUNCH.ai</h2></a>
                <ul className="navbar__navs">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li className='btn btn-primary--small'><a href="/auth">Login</a></li>
                </ul>
            </div>
        </>
    )
}
