import React from 'react';
import chair from '../../../img/chair-1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHero = ({handleDateChange}) => {
    return (
        <main className="appointment-hero-area">
            <div className="container">
                <div className="row hero-content-area">
                    <div className="col-lg-5 pe-5">
                        <h2>Appointment</h2>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-lg-7 ps-5">
                        <img src={chair} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHero;