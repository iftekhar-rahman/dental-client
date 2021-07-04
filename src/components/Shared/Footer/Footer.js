import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const quickLink1 = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
]
const quickLink2 = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const quickLink3 = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Check Up" , link: "/checkup"}
]
const ourAddress = [
    {name: "New York - 101010 Hudson" , link: "//google.com/map"},
    {name: "Yards" , link: "//google.com/map"},
]

const Footer = () => {
    return (
        <footer className="footer-area pt-5 mt-5">
            <div className="container">
                <div className="row">
                    <FooterCol key={1} menuTitle={"Services"} menuItems={quickLink1}></FooterCol>
                    <FooterCol key={2} menuTitle={"Services"} menuItems={quickLink2}></FooterCol>
                    <FooterCol key={3} menuTitle={"Oral Health"} menuItems={quickLink3}></FooterCol>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <a href="tel:+2025550295" className="boxed-btn">+2025550295</a>
                        </div>
                    </FooterCol>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col text-center">
                        <p>Copyright {(new Date().getFullYear())} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;