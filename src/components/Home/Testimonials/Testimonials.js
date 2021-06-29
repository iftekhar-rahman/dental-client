import React from 'react';
import './Testimonials.css';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = () => {
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h5 className="section-title-small">TESTIMONIAL</h5>
                        <h2 className="section-title">What’s Our Patients<br/> Says</h2>

                    </div>
                    <div className="col-lg-5 ">
                        <FontAwesomeIcon className="quote" icon={faQuoteLeft}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;