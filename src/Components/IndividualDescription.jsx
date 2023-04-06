import React, { useEffect } from 'react'
import "./IndividualDescription.css"
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Link, useLocation } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

const IndividualDescription = () => {

    useEffect(function () {
        Aos.init();
      }, []);

    const location = useLocation();


    return (
            <div className='individualDescription'>
            <div data-aos="fade-down" className='indiDesc_body' >
                <Link to='../home'>
                    <MdOutlineArrowBackIos className='backIcon' />
                </Link>
                <div className='desc_head'>{location.state.head}</div>
                <div className='desc_author'>{location.state.author}</div>
                <div >
                    <p className='desc_paragraph'>
                    {location.state.para}
                    </p>
                </div>
            </div>
            </div>

    )
}

export default IndividualDescription