import React from 'react';
import './OurDoctors.css';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorOne from '../../../img/doctor-2.png';
import doctorTwo from '../../../img/doctor-2.png';
import doctorThree from '../../../img/doctor-2.png';
import DoctorDetail from '../DoctorDetail/DoctorDetail';
// import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const doctorsData = [
    {
        doctorImage: doctorOne,
        name: 'Winson Herry',
        phone: '+0886262522',
        icon: faPhoneAlt
    },
    {
        doctorImage: doctorTwo,
        name: 'Winson Herry',
        phone: '+0886262522',
        icon: faPhoneAlt
    },
    {
        doctorImage: doctorThree,
        name: 'Winson Herry',
        phone: '+0886262522',
        icon: faPhoneAlt
    }
]

const Testimonials = () => {
    return (
        <section className="ourdoctors-area">
            <div className="container">
                <div class="section-title-box text-center">
                    <h2 class="section-title">Our Doctors</h2>
                </div>
                <div className="row">
                    {
                        doctorsData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;