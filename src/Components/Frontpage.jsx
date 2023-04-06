import React, { useEffect} from 'react'
import "./Frontpage.css"
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Frontpage = () => {


    useEffect(function () {
        Aos.init();
      }, []);

      const authUser = useSelector(state => state.authUser)
      const navigate = useNavigate();

      const createBlogHandler = () => {
        if(authUser){
            navigate('/home')
        }
        else {
            navigate('./Log-in')
        }
      }


    return (
        <div className='frontpage_body'>
            <div className='frontpage_nav'>
                <div data-aos-anchor-placement="top-bottom" data-aos="fade-down" data-aos-delay="300" className='frontpage_icon'>
                    <nav className='codeBlogs'>CodeBlogs</nav>
                    <nav className='rohan'>Blogging website for Devs!</nav>
                </div>
                <div data-aos="fade-down" data-aos-delay="300" className='frontpage_sign'>
                    <Link to="./Sign-up">
                        <button className='frontpage_signBtn'>SIGN IN</button>
                    </Link>
                </div>
            </div>
            <div className='frontpage_content'>
                <div className='frontcontent_body'>
                    <h1  data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="700">Where technology meets creativity.</h1>
                    <div data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-delay="800" >
                        <button onClick={createBlogHandler} className='themeBtn'>Create Your Blog</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Frontpage