import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    // const handleGoogleSignIn = () => {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //         const { displayName, email } = result.user;
    //         const signedInUser = { name: displayName, email }
    //         setLoggedInUser(signedInUser)
    //         storeAuthToken();
    //         // history.replace(from);
    //     }).catch((error) => {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         var email = error.email;
    //         var credential = error.credential;
    //         console.log(error);
    //     });
    // }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
            // Handle error
        });
    }

    return (
        <section className="login-page-area">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-form p-5 shadow  bg-white">
                            <h3 className="text-center text-brand mb-5">Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input {...register("username", { required: true })} placeholder="User Name" type="text" className="form-control p-3"/>
                                    {errors.username && <small className="text-danger mt-1 d-block">User name is required</small>}
                                </div>
                                <div className="mb-3">
                                    <input {...register("password", { required: true })} placeholder="Password" type="password" className="form-control p-3"/>
                                    {errors.username && <small className="text-danger mt-1 d-block">Password is required</small>}
                                </div>
                                <p><a href="www.google.com" className="text-brand">Forgot your password?</a></p>
                                <button className="boxed-btn w-100 mt-3" type="submit">Sign in</button><br/>
                                <button onClick={handleGoogleSignIn} className="google-btn w-100 p-3 mt-3 rounded border border-dark" type="button"><FontAwesomeIcon className="me-2" icon={faGoogle}></FontAwesomeIcon> Sign in with Google</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;