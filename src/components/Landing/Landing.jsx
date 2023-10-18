import React from 'react';
import productImage from "./../../assets/images/product-image.jpeg";
import "./landing.scss";
import Navbar from '../Navbar/Navbar';

export default function Landing() {
    return (
        <>
        <Navbar />
        <div className='landing'>
            <div className="hero" id='hero'>
                <div className="hero__left">
                    <h1 className='hero__left__title'>AVALAUNCH.ai</h1>
                    <h2 className='hero__left__subtitle'>Manage your business Easier and Simpler</h2>
                    <p className='hero__left__desc'>The easiest way to help organize and control your business with fast service using Ai</p>
                </div>
                <img className='hero__right' src={productImage} alt="Ava Launch" />
            </div>
            <div className="features" id='features'>
                <div className="card">
                    <div className="card__icon"><i class="fas fa-hand-holding-usd"/></div>
                    <div className="card__title">Month Wise Sales Report</div>
                </div>
                <div className="card">
                    <div className="card__icon"><i class="fas fa-user-secret"/></div>
                    <div className="card__title">Check your Surrounding</div>
                </div>
                <div className="card">
                    <div className="card__icon"><i class="fas fa-project-diagram"/></div>
                    <div className="card__title">ML will tell you the best month to launch</div>
                </div>
                <div className="card">
                    <div className="card__icon"><i className="fas fa-rocket"/></div>
                    <div className="card__title">Boost Your Sales upto 60%</div>
                </div>
            </div>
            <div className="cta" id='cta'>
                <h3>Try our software</h3>
                <button className='btn btn-primary'>Do to Dashboard</button>
            </div>
            <div className="landing__clients"></div>
        </div>
        </>
    )
}
