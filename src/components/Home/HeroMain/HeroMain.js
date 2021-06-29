import React from 'react';
import chair from '../../../img/chair-1.png';
import { Link } from 'react-router-dom';

const HeroMain = () => {
    return (
        <main className="row hero-content-area align-items-center">
            <div className="col-lg-5 pe-5">
                <h2>Your New Smile<br/>Starts Here</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                <Link className="boxed-btn" to="appointment">Get appointment</Link>
            </div>
            <div className="col-lg-7 ps-5">
                <img src={chair} alt="" />
            </div>
        </main>
    );
};

export default HeroMain;