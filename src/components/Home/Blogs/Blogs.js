import React from 'react';
import './Blogs.css';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import authorOne from '../../../img/author-1.png';
import authorTwo from '../../../img/author-2.png';
import authorThree from '../../../img/author-3.png';
import BlogDetail from '../BlogDetail/BlogDetail';

const blogsData = [
    {
        authorImage: authorOne,
        icon: faLongArrowAltRight,
        name: 'Winson Herry',
        authorTitle: 'California',
        blogTitle: '2 times of brush in a day can Keep you healthy',
        blogText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    },
    {
        authorImage: authorTwo,
        icon: faLongArrowAltRight,
        name: 'Winson Herry',
        authorTitle: 'California',
        blogTitle: '2 times of brush in a day can Keep you healthy',
        blogText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    },
    {
        authorImage: authorThree,
        icon: faLongArrowAltRight,
        name: 'Winson Herry',
        authorTitle: 'California',
        blogTitle: '2 times of brush in a day can Keep you healthy',
        blogText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
    }
]

const Testimonials = () => {
    return (
        <section className="blog-area">
            <div className="container">
                <div class="section-title-box text-center">
                    <h5 class="section-title-small">OUR BLOG</h5>
                    <h2 class="section-title">From Our Blog News</h2>
                </div>
                <div className="row">
                    {
                        blogsData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;