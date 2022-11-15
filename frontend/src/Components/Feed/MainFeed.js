import React, {useState, useEffect} from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
import './MainFeed.css';
const MainFeed = (props) => {

  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);

  let CurrentCategory = props.category

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
        setAllQuestions(dataFromResponse.question);
  }

  useEffect(() => {
    getAllQuestions();
  }, [])

  const CategoryQuestionsCheck = (item) => {
    console.log(item.category,CurrentCategory)
    return item.category  === CurrentCategory
  }
  
  // if(CurrentCategory !== "General"){
  //   let newQuestions

  //   for(let i = 0 ; i < questions?.length; i++){
  //     if(questions[i]?.category === CurrentCategory){
  //       newQuestions.push(questions[i])
  //     }
  //   }

  //   setQuestions(newQuestions)
  // }

  useEffect(()=>{
    let copy = allQuestions
    let newQuestions = copy.filter(CategoryQuestionsCheck);
    setQuestions(newQuestions)
  },[props])
  


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
  
  const styles = {
    color: "white",
    textAlign: "center",
    margin: "10px",
    fontFamily: "serif",
  }

  return (
    <div className='feed'>
      <QuoraBox/>
      {/* <Post/> */}
      <h4 style={styles}> {CurrentCategory === "General" ?  "All Questions" : CurrentCategory} </h4>
      {mainFeed}
    </div>
  )
}

export default MainFeed
