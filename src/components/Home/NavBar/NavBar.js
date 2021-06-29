import React from 'react';
import logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <Link className="logo" to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="col">
                        <nav className="mainmenu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/dentalservice">Dental Service</Link></li>
                                <li><Link className="text-white" to="/reviews">Reviews</Link></li>
                                <li><Link className="text-white" to="/blog">Blog</Link></li>
                                <li><Link className="text-white" to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        
    );
};

export default NavBar;