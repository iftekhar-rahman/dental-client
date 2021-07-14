import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctors = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    console.log(info);
    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault();
    }

    return (
        <section className="dashboard-area h-100">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-6 offset-md-1 mt-4 mb-5">
                        <h2 className="mb-4">Add a Doctor</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input onBlur={handleBlur} type="email" name="email" className="form-control" id="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="name" className="form-label">Your Name</label>
                                <input onBlur={handleBlur} type="text" name="name" className="form-control" id="name"/>
                            </div>
                            <div className="mb-3">
                                <label for="file" className="form-label">Upload File</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="file"/>
                            </div>
                            <button type="submit" className="boxed-btn mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctors;