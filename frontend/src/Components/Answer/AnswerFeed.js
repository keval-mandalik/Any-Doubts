import React, {useState, useEffect} from 'react';
import Post from '../Feed/Post';
import '../Feed/MainFeed.css';
import Cookie from 'js-cookie'
import axios from "axios"

import { useNavigate } from 'react-router-dom';
const MainFeed = (props) => {

  const [questions, setQuestions] = useState([]);
  const [allQuestions,setAllQuestions] = useState([]);
  const CurrentCategory = props.category
  const cookiedata = Cookie?.get('user')

  const navigate = useNavigate();

  const getAllQuestions = async () => {

     if(cookiedata === undefined){
      navigate('/login')
     }
     axios.post('http://localhost:3001/api/question/userquestion', {
      email: `${JSON.parse(cookiedata).email}`
    })
    .then((res) => {
      console.log(res, "VVVVVVVVVVVVVVVVVVVVVVV")
      setQuestions(res.data.question);
      setAllQuestions(res.data.question);
    })
  }

  const CategoryQuestionsCheck = (item) => {
    return item.category === CurrentCategory
  }

  useEffect(() => {
    getAllQuestions();
  }, [])
  useEffect(()=>{
    let copy = allQuestions
    let newQuestions = copy.filter(CategoryQuestionsCheck);
    setQuestions(newQuestions)
  },[props])
  
  const mainFeed = questions.length > 0 ? questions.map((item)=>{
    return(
      <>
        <Post question = {item}/>
      </>
    )
  }): <h3 style={{color:"white"}}>Try Asking a Question First!</h3>

  return (
    <div className='feed'>
      {mainFeed}
    </div>
  )
}

export default MainFeed
