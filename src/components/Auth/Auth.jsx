import React, { useState } from 'react';
import "./auth.scss";
import Navbar from '../Navbar/Navbar';

export default function Auth() {
    const [loginCurTab, setloginCurTab] = useState(true);
    return (
        <>
        <Navbar />
        <div className='auth'>
            <form className={loginCurTab ? "card auth__tab active" : "card auth__tab"}>
                <h2>LOGIN</h2>
                <label htmlFor="mail">E-Mail *</label>
                <input type="email" name="mail" id="mail" required />
                <label htmlFor="pass">Password *</label>
                <input type="password" name="pass" id="pass" required />
                <input className='btn btn-primary' type="submit" value="LOGIN" />
                <small><button className='btn btn-link' onClick={() => setloginCurTab(false)}>New User? Register</button></small>
            </form>
            <form className={!loginCurTab ? "card auth__tab active" : "card auth__tab"}>
                <h2>SIGNUP</h2>
                <label htmlFor="fname">Full Name *</label>
                <input type="text" name="fname" id="fname" required />
                <label htmlFor="mail">Email *</label>
                <input type="email" name="mail" id="mail" required />
                <label htmlFor="pass">Password *</label>
                <input type="password" name="pass" id="pass" required />
                <label for="cpass">Confirm Password *</label>
                <input type="password" name="cpass" id="cpass" required/>
                <input className='btn btn-primary' type="submit" value="SIGNUP" />
                <small><button className='btn btn-link' onClick={() => setloginCurTab(true)}>Already SignedUp? Login</button></small>
            </form>
        </div>
        </>
    )
}
