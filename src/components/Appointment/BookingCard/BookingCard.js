import React from 'react';
import { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    // function closeModal() {
    //   setIsOpen(false);
    // }
    return (
        <div className="col-md-4">
            <div className="single-appointment-card shadow text-center p-5 mb-4">
                <h5 className="text-brand fs-4 text-capitalize">{booking.subject}</h5>
                <h6 className="text-dark">{booking.visitingHour}</h6>
                <small className="text-uppercase d-block">{booking.totalSpace}</small>
                <button onClick={openModal} className="boxed-btn mt-3" type="button">Book Appointent</button>
                <AppointmentForm appointmentModal={modalIsOpen} appointmentTitle={booking.subject}></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;