import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeroMain from '../HeroMain/HeroMain';
import NavBar from '../../Shared/NavBar/NavBar';
import './HeroSection.css';

const HeroSecton = () => {
    return (
        <div className="hero-area">
            <NavBar></NavBar>
            <div className="hero-wrap">
                <div className="container hero-container h-100">
                    <HeroMain></HeroMain>
                    <BusinessInfo></BusinessInfo>
                </div>
            </div>
        </div>
    );
};

export default HeroSecton;