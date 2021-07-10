import React from 'react';

const AppointmentByDate = ({appointments}) => {
    // console.log(appointments);
    return (
        <div>
            <h1>AppointmentByDate {appointments.length}</h1>
            {appointments.name}
        </div>
    );
};

export default AppointmentByDate;