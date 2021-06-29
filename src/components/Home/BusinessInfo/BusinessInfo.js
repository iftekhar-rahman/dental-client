import React from 'react';
import { faClock, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
import './BusinessInfo.css';

const infoData = [
    {
        icon: faClock,
        title: 'Opening Hours',
        description: 'We are open 24/7 hours',
        background: 'primary'
    },
    {
        icon: faMapMarker,
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        background: 'secondary'
    },
    {
        icon: faPhoneAlt,
        title: 'Contact us now',
        description: '+000 123 456789',
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className="row business-info">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            } 
        </div>
    );
};

export default BusinessInfo;