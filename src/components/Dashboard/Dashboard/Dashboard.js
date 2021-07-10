import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    console.log(appointments);
    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }
    return (
        <section className="dashboard-area h-100">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-4 mt-4 mb-5">
                        <h2 className="mb-4">Appointments</h2>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-6 mt-4 mb-5">
                        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;