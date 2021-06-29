import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4">
            <div className={`single-info-item position-relative text-white info-${info.background}`}>
                <FontAwesomeIcon className="icon" icon={info.icon}/>
                <div>
                    <h5>{info.title}</h5> 
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
       
    );
};

export default InfoCard;