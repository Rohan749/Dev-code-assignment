import React, { useEffect, useState } from 'react'
import "./DevHome.css"
import ContentleftPanel from './ContentleftPanel'
import ContentBlogs from './ContentBlogs'
import { Link } from 'react-router-dom'
import { FaSadCry } from 'react-icons/fa' 
import { BiLogOutCircle } from "react-icons/bi"
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const DevHome = (props) => {

    useEffect(function () {
        Aos.init();
      }, []);

 

    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);

    const authEmail = useSelector(state => state.authEmail)
    const authName = useSelector(state => state.authName)
    const dispatch = useDispatch();


    const cardClickHandler = (content) => setClicked(!clicked)


    let contentDisplay = props.contentWritings.filter((content) => {
        if (search === "") return content

        else if (content.head.toLowerCase().includes(search.toLowerCase()))
            return content
        

    }).map((content, key) => (
        <ContentBlogs
            key={Math.random()}
            content={content}
            head={content.head}
            author={content.author}
            para={content.para}
            onClick={cardClickHandler}
            onDelete={props.onDeleteHandler}
        />
    ))

    const auth = getAuth();
    const authUser = useSelector(state=> state.authUser)
    const navigate = useNavigate();

    const handleAuth = () => {
        if(authUser) {
            auth.signOut();
            dispatch({type: 'loggedOut'})
            navigate('/')
        }
    }


    return (
        <>
            {!clicked && <div className='devHome_body'>
                <div data-aos="fade-down" data-aos-delay="300" className='devHome_nav'>
                    <Link to="/">
                        <nav className='devHome_icon'>
                            <nav className='codeBlogs_'>CodeBlogs</nav>
                            <nav className='rohan_'>Blogging website for Devs!</nav>
                        </nav>
                    </Link>
                    <nav className='dev_search'>
                        <input type='search' onChange={(e) => (setSearch(e.target.value))} value={search} placeholder='Search...' className='devHome_search' />

                    </nav>
                    <nav className='devHome_profile'>
                        <BiLogOutCircle className='fauser' onClick={handleAuth} />
                        <nav className='profile_desc'>
                            <nav className='profile_name'>{authName}</nav>
                            <nav className='profile_email'>{authEmail}</nav>
                        </nav>
                    </nav>
                </div>
                <div data-aos="fade" data-aos-delay="800" className='devHome_content'>
                    <ContentleftPanel />
                    <div className='contentBlogs_flexBody'>
                        {contentDisplay}
                        {contentDisplay.length === 0 && <div data-aos="zoom-in-up" className='noContent'>No such Blogs Found! <br /> <FaSadCry  className='sad'/></div>}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default DevHome