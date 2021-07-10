import React, { useContext } from 'react';
import chair from '../../../img/chair-1.png';
import { Link, useHistory } from 'react-router-dom';
// import { UserContext } from '../../../App';

const HeroMain = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push('/appointment');
    // }

    return (
        <main className="row hero-content-area align-items-center">
            <div className="col-lg-5 pe-5">
                <h2>Your New Smile<br/>Starts Here</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                <Link  className="boxed-btn" to="appointment">Get appointment</Link>
            </div>
            <div className="col-lg-7 ps-5">
                <img src={chair} alt="" />
            </div>
        </main>
    );
};

export default HeroMain;