import React, {useState, useEffect} from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
import './MainFeed.css';
const MainFeed = (props) => {

  const [questions, setQuestions] = useState([]);

  // console.log(props.category)

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

  
  // if(props.category !== "General"){
  //   let newQuestions = questions.filter(CategoryQuestionsCheck)
  //   setQuestions(newQuestions)
  // }
  
  // function CategoryQuestionsCheck(item){
  //   return item.category === props.category
  // }

    const mainFeed = questions.map((item)=>{
      return(
        <>
          {/* {item.postedBy}
          {item.question}
          {item.createdAt}
          <br/> */}
          {/* {item.category} */}
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
