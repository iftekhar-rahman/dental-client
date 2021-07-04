import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 am – 11:30 am',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '  5:00 pm – 6:30 pm',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: ' 7:00 am – 8:30 am',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    }
]

const BookAppointment = ({date}) => {
    // console.log(date);
    return (
        <section className="book-appointment-area pt-5 pb-5 mt-5 mb-5">
            <h2 className="text-center text-brand mb-5 fw-bold fs-1">Available Appointments on {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {
                      bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;