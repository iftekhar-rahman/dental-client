import React from 'react';

const TestimonialDetail = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className="single-card-item shadow">
                <p>{testimonial.reviewText}</p>
                <div className="author">
                    <img src={testimonial.authorImage} alt="" />
                    <h6>{testimonial.name}</h6>
                    <small>{testimonial.title}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;