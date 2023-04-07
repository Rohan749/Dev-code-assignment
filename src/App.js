import React, { useState, useEffect } from 'react';
import './App.css';
import DevHome from './Components/DevHome';
import Frontpage from './Components/Frontpage';
import SignIn from './Components/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualDescription from './Components/IndividualDescription';
import WriteNewBlog from './Components/WriteNewBlog';
import LogIn from './Components/LogIn';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LogAlert from './Components/LogAlert';




function App() {


    const authUser = useSelector(state => state.authUser)

    const [detailArray, setDetailArray] = useState([]);

    useEffect(() => {
        axios.get('https://rohan749.github.io/blog-website-api/blogs.json')
            .then(response => setDetailArray(response.data.blogs))
            .catch(error => console.log(error));
    }, []);

    const newValueHandler = (newValue) => {
        setDetailArray(prevArray => [newValue, ...prevArray])
    }

    const deleteBlogHandler = (head) => {
        setDetailArray((previousArray)=>{
            const updatedArray = previousArray.filter(arrValue => arrValue.head !== head)
            return updatedArray;             
        })
    }


    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/DevCode' element={<Frontpage />} />
                    <Route path='/Sign-up' element={!authUser ? <SignIn />: <LogAlert/>} />
                    <Route path='/Log-in' element={<LogIn />} />
                    <Route path='/Home' element={<DevHome onDeleteHandler={deleteBlogHandler} contentWritings={detailArray}/>} />
                    <Route path='/Details' element={<IndividualDescription />} />
                    <Route path='/write-new-blog' element={<WriteNewBlog value={newValueHandler}/>} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
