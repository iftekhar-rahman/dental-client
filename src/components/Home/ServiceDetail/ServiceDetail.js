import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 single-service-item text-center">
            <FontAwesomeIcon className="icon" icon={service.icon}/>
            <h4 className="mt-4 mb-4">{service.title}</h4>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;