import React, { useState } from "react";
import "./SignIn.css"
// import googleIcon from "./googleIcon.svg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";



const SignIn = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    

    const signIn = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
            if(auth) {
                
                dispatch({type: 'loggedIn', authEmail: email, authName: name})
                navigate('/home')
            }

        }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    
    if (errorCode === 'auth/invalid-email') {
        errorMessage = 'The email entered is wrong.';
    }

    if(errorCode === 'auth/email-already-in-use')
        errorMessage = "Entered Email is already in use."

    if(errorCode === 'auth/missing-password')
        errorMessage = "Please enter the password."

    if(errorCode === 'auth/missing-email')
        errorMessage = "Please enter the email."

    alert(errorMessage);
        })
    }

    // const signInWithGoogle = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //       .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         // IdP data available using getAdditionalUserInfo(result)
    //         // ...
    //       })
    //       .catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.error(errorCode, errorMessage);
    //         if (errorCode === "auth/popup-closed-by-user") {
    //           alert(
    //             "The Google sign-in window was closed. Please try again and make sure to allow pop-ups from this website."
    //           );
    //         } else {
    //           alert("An error occurred during sign-in. Please try again later.");
    //         }
    //       });
    //   };

    return <>
        <div className="signup__body">
            <div data-aos="fade" className="signup__outerBox">
               
                <div className="signup__">CodeBlogs</div>
                <div className="signup__heading">Create an account</div>
                <div className="signup__box">
                <form className="signup__form" onSubmit={signIn}>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value.trim())} placeholder="Enter your Email" className="signup__email __input"/>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your Name" className="signup__name __input"/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" className="signup__password __input"/>
                    <button className="signup__btn btn_signup" type="submit">Signup</button>
                </form>
                {/* OR */}
                {/* <button className="signup__btn btn_google" onClick={signInWithGoogle}><img src={googleIcon} alt='google'/> &nbsp; Sign-up with Google</button> */}
                By continuing, you agree to our terms and policies.
            </div>
            </div>
        </div>
    </>
}

export default SignIn;