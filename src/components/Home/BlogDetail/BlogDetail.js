import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialDetail = ({blog}) => {
    return (
        <div className="col-md-4">
            <Link className="single-card-item shadow">
                <div className="author">
                    <img src={blog.authorImage} alt="" />
                    <h6>{blog.name}</h6>
                    <small>{blog.authorTitle}</small>
                </div>
                <h5>{blog.blogTitle}</h5>
                <p>{blog.blogText}</p>
            </Link>
        </div>
    );
};

export default TestimonialDetail;