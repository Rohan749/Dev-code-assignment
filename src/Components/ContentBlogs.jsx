import React from 'react'
import "./ContentBlogs.css"
import { Link } from 'react-router-dom'
import { RxCrossCircled } from "react-icons/rx"

const ContentBlogs = (props) => {

  const crossHandler = () => {
    props.onDelete(props.head)
  }


  return (
  <div>
    <RxCrossCircled  className='cross_icon' onClick={crossHandler}/>
    <Link to='/Details' state={{head: props.head, author: props.author, para: props.para}}>
    <div className='contentBlogs_body'>
      
        <div className='contentBlogs_design'/>
        <div className='contentBlogs_heading'>{props.head} </div>
        <div className='contentBlogs_author'>-{props.author}</div>
        <div className='contentBlogs_describe'>{props.para}</div>
    </div>
    </Link>
  </div>
  )
}

export default ContentBlogs