import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../../img/doctor-2.png';

const DoctorDetail = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="single-card-item">
                <img src={`http://localhost:5000/${img}`} alt="" />
                <h5>{doctor.name}</h5>
                <a href="tel:8802836363"><FontAwesomeIcon icon={doctor.icon}></FontAwesomeIcon> {doctor.phone}</a>
            </div>
        </div>
    );
};

export default DoctorDetail;