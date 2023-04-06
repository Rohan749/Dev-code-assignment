import React, { useEffect } from 'react'
import "./ContentLeftPanel.css"
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";

const ContentleftPanel = () => {


  useEffect(function () {
    Aos.init();
  }, []);


  return (
    <div className='contentLeft_home'>
      <Link data-aos="fade" data-aos-delay="1200"  to='/write-new-blog'><button className='content_create'>+Create</button></Link>
        
        <div className='contentLeft_btns'>
        <nav data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1400" className='left_btn'>Posts</nav>
        <nav data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" className='left_btn'>Stats</nav>
        <nav data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1600" className='left_btn'>Settings</nav>
        <nav data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1700" className='left_btn'>Pages</nav>
        <nav data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1800" className='left_btn'>Reading List</nav>
        </div>
    </div>
  )
}

export default ContentleftPanel