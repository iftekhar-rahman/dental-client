import React from 'react';
import './MakeAppointment.css';
import appointedDoctor from '../../../img/doctor-1.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className="make-appointment-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="doctor">
                            <img src={appointedDoctor} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h5 className="section-title-small mb-4">APPOINTMENT</h5>
                            <h2 className="section-title mb-4">Make an appointment<br/> Today</h2>
                            <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p>
                            <Link className="boxed-btn mt-4">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;