import React, {useState, useEffect} from 'react';
import Post from '../Feed/Post';
import '../Feed/MainFeed.css';
import Cookie from 'js-cookie'
import axios from "axios"

import { useNavigate } from 'react-router-dom';
const MainFeed = () => {

  const [questions, setQuestions] = useState([]);

  const cookiedata = Cookie?.get('user')

  const navigate = useNavigate();

  const getAllQuestions = async () => {

     if(cookiedata === undefined){
      navigate('/login')
     }  

    //   const res = await fetch( "http://localhost:3001/api/question/userquestion" , {
    //     method : 'POST',
    //     headers : {
    //       'Content-Type' : 'application/json'
    //     },
    //     body : {
    //       'email' : `${JSON.parse(cookiedata).email}`
    //     }
    //   })

    axios.post('http://localhost:3001/api/question/userquestion', {
      email: `${JSON.parse(cookiedata).email}`
  })
  .then((res) => {
    console.log(res, "VVVVVVVVVVVVVVVVVVVVVVV")
    setQuestions(res.data.question);
  })

  

      // const dataFromResponse = await res.json();

      // console.log(dataFromResponse, "vVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
      // if(dataFromResponse)
      //   setQuestions(dataFromResponse.question);
  }

  useEffect(() => {
    getAllQuestions();
  }, [])

  const mainFeed = questions.length > 0 ? questions.map((item)=>{
    return(
      <>
        {/* {item.postedBy}
        {item.question}
        {item.createdAt}
        <br/> */}
        <Post question = {item}/>
      </>
    )
  }): <h3>Try Asking a Question First!</h3>

  return (
    <div className='feed'>
      {/* <Post/> */}
      {mainFeed}
    </div>
  )
}

export default MainFeed
