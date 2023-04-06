import React, { useRef, useEffect } from 'react'
import './WriteNewBlog.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import Aos from "aos";
import "aos/dist/aos.css";

const WriteNewBlog = (props) => {

    useEffect(function () {
        Aos.init();
      }, []);


    const heading = useRef();
    const author = useRef();
    const para = useRef();

    const navigate = useNavigate();

    const createSubmitHandler = (event) => {
        event.preventDefault();

        const newBlogPost = {
            head: heading.current.value,
            author: author.current.value,
            para: para.current.value
        }

        props.value(newBlogPost)

        navigate('/home')
    }


    return (
        <div className='individual_body' >
            <div  data-aos="fade-up" data-aos-delay="300" data-aos-duration="400" className='creation_body'>
                <div data-aos="fade" data-aos-delay="500" data-aos-duration="700" className='create_top'>
                <Link to='../home'>
                    <MdOutlineArrowBackIos className='backIcon' />
                </Link>
                <span className='createBlog_heading'>Create Your Blog!</span>
                </div>
                <form data-aos="fade" data-aos-delay="700" data-aos-duration="1000" onSubmit={createSubmitHandler}>
                <div className='write_describe'>
                    <div className='writeLabel'>
                        Heading:
                    </div>
                    <div className='write_input'>
                        <input type='text' className='writeInput' ref={heading}/>
                    </div>
                </div>
                <div className='write_describe'>
                    <div className='writeLabel'>
                        Author:
                    </div>
                    <div className='write_input'>
                        <input type='text' className='writeInput' ref={author}/>
                    </div>
                </div>
                <div className='write_describe writeblog'>
                    <div className='writeLabel bloglabel'>
                        Blog:
                    </div>
                    <div className='write_input'>
                        <textarea name="paragraph" ref={para} rows="10" cols="70" className='writeInput_blog'/>
                    </div>
                </div>
                  <button className='create_btn' type='submit'>Create!</button>
                </form>
            </div>
        </div>
    )
}

export default WriteNewBlog