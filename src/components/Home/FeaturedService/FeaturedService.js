import React from 'react';
import './FeaturedService.css';
import featuredServiceImage from '../../../img/child-patient.png';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
    return (
        <div className="row featured-service-content mt-5 pt-5">
            <div className="col-lg-5">
                <img className="img-fluid" src={featuredServiceImage} alt="" />
            </div>
            <div className="col-lg-7 ps-4 pe-5">
                <h2 className="section-title mb-5 mt-5">Exceptional Dental<br/> Care, on Your Terms</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur harum non cum, omnis autem nisi. Rem dicta provident architecto vitae iusto laborum sed ducimus odio facere! Omnis sequi doloribus cum aperiam laborum voluptatem, tempora cumque in aliquid architecto veritatis eius non ratione. Temporibus iure quos optio facilis exercitationem aut officia, error accusantium, inventore soluta totam eum quaerat praesentium deleniti similique alias ipsam impedit voluptatem ad autem necessitatibus molestias fugiat accusamus quibusdam! Temporibus cum consequatur nesciunt quos! Dignissimos omnis earum at sit vero eum ipsum aut illo veniam. Iusto, ad delectus. Blanditiis quos doloremque voluptatum. Accusamus officia ipsam exercitationem itaque eum?</p>
                <Link className="boxed-btn mt-5">Learn more</Link>
            </div>
        </div>
    );
};

export default FeaturedService;