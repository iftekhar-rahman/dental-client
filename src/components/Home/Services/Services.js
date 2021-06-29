import React from 'react';
import { faTooth, faTeeth, faGrimace } from '@fortawesome/free-solid-svg-icons';
import './Services.css'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import FeaturedService from '../FeaturedService/FeaturedService';

const serviceData = [
    {
        icon: faTooth,
        title: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    },
    {
        icon: faTeeth,
        title: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    },
    {
        icon: faGrimace,
        title: 'Teath Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    }
]

const Services = () => {
    return (
        <section className="services-area">
            <div className="section-title-box text-center">
                <h5 className="section-title-small">Our services</h5>
                <h2 className="section-title">Services we provide</h2>
            </div>
            <div className="container">
                <div className="row pb-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
                {
                    <FeaturedService></FeaturedService>
                }
            </div>
        </section>
    );
};

export default Services;