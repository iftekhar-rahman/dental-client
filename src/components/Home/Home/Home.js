import React from 'react';
import HeroSecton from '../HeroSection/HeroSecton';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import OurDoctors from '../OurDoctors/OurDoctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <HeroSecton></HeroSecton>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <OurDoctors></OurDoctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;