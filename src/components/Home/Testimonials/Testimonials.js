import React from 'react';
import './Testimonials.css';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authorOne from '../../../img/author-1.png';
import authorTwo from '../../../img/author-2.png';
import authorThree from '../../../img/author-3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const testimonialsData = [
    {
        authorImage: authorOne,
        name: 'Winson Herry',
        title: 'California',
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    },
    {
        authorImage: authorTwo,
        name: 'Winson Herry',
        title: 'California',
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    },
    {
        authorImage: authorThree,
        name: 'Winson Herry',
        title: 'California',
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h5 className="section-title-small">TESTIMONIAL</h5>
                        <h2 className="section-title">What’s Our Patients<br/> Says</h2>
                    </div>
                    <div className="col-lg-5">
                        <FontAwesomeIcon className="quote" icon={faQuoteLeft}/>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonialsData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;