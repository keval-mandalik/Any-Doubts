import React, {useState, useEffect} from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
import './MainFeed.css';
const MainFeed = () => {

  const [questions, setQuestions] = useState([]);

  const getAllQuestions = async () => {
      const res = await fetch( "http://localhost:3001/api/question/questions" , {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        },
      })

      const dataFromResponse = await res.json();

      // console.log(dataFromResponse);
      if(dataFromResponse)
        setQuestions(dataFromResponse.question);
  }

  useEffect(() => {
    getAllQuestions();
  }, [])

  const mainFeed = questions.map((item)=>{
    return(
      <>
        {/* {item.postedBy}
        {item.question}
        {item.createdAt}
        <br/> */}
        <Post question = {item}/>
      </>
    )
  })

  return (
    <div className='feed'>
      <QuoraBox/>
      {/* <Post/> */}
      {mainFeed}
    </div>
  )
}

export default MainFeed
