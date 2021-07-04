import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHero from '../AppointmentHero/AppointmentHero';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div className="appointment-section">
            <NavBar></NavBar>
            <AppointmentHero handleDateChange={handleDateChange}></AppointmentHero>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;