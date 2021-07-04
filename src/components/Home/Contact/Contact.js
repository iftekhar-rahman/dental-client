import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div class="section-title-box text-center">
                    <h5 class="section-title-small">CONTACT US</h5>
                    <h2 class="section-title text-white">Always Connect with us </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control mb-3 p-3" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control mb-3 p-3" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control mb-3 p-3" id="" cols="30" rows="7" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="boxed-btn"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;