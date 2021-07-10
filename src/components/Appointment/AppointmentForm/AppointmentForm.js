import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
// import { UserContext } from '../../../App';
// import { useHistory } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px 80px',
        width: '50%',
        border: '1px solid #ccc',
        borderRadius: '20px',
        backgroundColor: '#fff',
        zIndex: 2,
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentTitle}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        data.service = appointmentTitle;
        data.created = new Date();
        // console.log(data);
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully');
            }
        })
        
    };
    return (
        <div>
            <Modal
                onRequestClose={closeModal}
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h4 className="text-brand text-center mb-5">{appointmentTitle}</h4>
                {/* <button onClick={closeModal}>close</button> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input {...register("time", { required: true })} placeholder="Selected time" type="time" className="form-control pt-2 pb-2"/>
                        {errors.name && <small className="text-danger mt-1 d-block">Time required</small>}
                    </div>
                    <div className="mb-3">
                        <input  {...register("name", { required: true })} placeholder="Your Name" class="form-control pt-2 pb-2"/>
                        {errors.name && <small className="text-danger mt-1 d-block">Name is required</small>}
                    </div>
                    <div className="mb-3">
                        <input {...register("phone", { required: true })} placeholder="Phone Number" class="form-control pt-2 pb-2"/>
                        {errors.phone && <small className="text-danger mt-1 d-block">Phone number is required</small>}
                    </div>
                    <div className="mb-3">
                        <input {...register("email", { required: true })} placeholder="Your Email" class="form-control pt-2 pb-2"/>
                        {errors.email && <small className="text-danger mt-1 d-block">Email is required</small>}
                    </div>
                    {/* <div className="mb-3">
                        <input {...register("date", { required: true })} placeholder="Date" class="form-control pt-2 pb-2"/>
                        {errors.date && <small className="text-danger mt-1 d-block">Date is required</small>}
                    </div> */}
                    <div className="d-flex justify-content-end">
                        <input className="boxed-btn pt-2 pb-2 ps-5 pe-5" type="submit" value="Send"/>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;