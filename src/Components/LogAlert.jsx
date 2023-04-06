import React, { useEffect } from 'react'
import "./LogAlert.css"
import { useSelector } from 'react-redux';
import Aos from "aos";
import "aos/dist/aos.css";
import { BiLogOutCircle } from "react-icons/bi"

const LogAlert = () => {

    useEffect(function () {
        Aos.init();
      }, []);

    const getEmail = useSelector(state=> state.authEmail)

  return (
    <div className='logAlert_body'>
        <div className='alert_background' data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="200">
            <p>
            It seems like a user with email id: <strong>{getEmail}</strong> is already Logged in. 
            Log-out "<BiLogOutCircle className='logout_icon'/>" before Signing In. 
            </p>
        </div>
    </div>
  )
}

export default LogAlert