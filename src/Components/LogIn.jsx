import React, { useState } from "react";
import { auth } from "./firebase";
import "./SignIn.css"
// import googleIcon from "./googleIcon.svg"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LogIn = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const logIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            if(auth) {

                dispatch({type: 'loggedIn', authEmail:email})
                navigate('/home')
            }
            
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        
        if (errorCode === 'auth/invalid-email') {
        errorMessage = 'This email is not registered. If you a are new user, please sign up.';
        }
    
        if(errorCode === 'auth/wrong-password')
        errorMessage = "Please Enter the correct password."
    
        if(errorCode === 'auth/missing-password')
        errorMessage = "Please enter the password."
    
        if(errorCode === 'auth/missing-email')
        errorMessage = "Please enter the email."

        if(errorCode === 'auth/user-not-found')
        errorMessage = "This is not a registered account. Please sign-in to continue."

        if(errorCode === 'auth/network-request-failed')
        errorMessage = "Request failed. Please Check your internet connection."
    
        alert(errorMessage);
        })
    }



    return <>
        <div className="signup__body">
            <div data-aos="fade" className="signup__outerBox">
               
                <div className="signup__">CodeBlogs</div>
                <div className="signup__heading">Login to your account</div>
                <div className="signup__box">
                <form className="signup__form" onSubmit={logIn}>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your Email" className="signup__email __input"/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="signup__password __input"/>
                    <button className="signup__btn btn_signup" type="submit">Log-In</button>
                </form>
                {/* OR
                <button className="signup__btn btn_google"><img src={googleIcon} alt='google'/> &nbsp; Sign-up with Google</button> */}
                By continuing, you agree to our terms and policies.
            </div>
            </div>
        </div>
    </>
}

export default LogIn;