import { faCalendar, faCog, faNotesMedical, faSignOutAlt, faTh, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar position-relative">
            <ul className="list-unstyled">
                <li><Link to="/dashboard/dashboard"><FontAwesomeIcon className="me-2" icon={faTh}/> Dashboard</Link> </li>
                <li><Link to="/dashboard/appointment"><FontAwesomeIcon className="me-2" icon={faCalendar}/> Appointment</Link> </li>
                <li><Link to="/dashboard/patients"><FontAwesomeIcon className="me-2" icon={faUser}/> Patients</Link> </li>
                <li><Link to="/prescriptions"><FontAwesomeIcon className="me-2" icon={faNotesMedical}/> Prescriptions</Link> </li>
                <li><Link to="/dashboard/setting"><FontAwesomeIcon className="me-2" icon={faCog}/> Setting</Link> </li>
            </ul>
            <button className="d-flex align-items-center" type="button"><FontAwesomeIcon className="me-2" icon={faSignOutAlt}/> Log Out</button>
        </aside>
    );
};

export default Sidebar;