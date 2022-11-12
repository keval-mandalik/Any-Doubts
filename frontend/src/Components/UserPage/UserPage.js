import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav"
import UserProfile from "react-user-profile";
import Post from "../Feed/Post";
import Cookie from "js-cookie";
import QuoraBox from "../Feed/QuoraBox";
import axios from 'axios'
import "./UserPage.css"
function App() {

  const [questions, setQuestions] = useState([]);
  const user = Cookie?.get('user')
  const getAllQuestions = async () => {

    axios.post(`http://localhost:3001/api/question/userquestion`, { 
      email: JSON.parse(user).email
    }).then((res)=>{
      console.log(res, "RESPONSESSSSSSS")
      if(res.data.question)
        setQuestions(res.data.question)
    })
  }

  useEffect(() => {
    getAllQuestions();
  }, [])

  const mainFeed = questions.map((item) => {
    return (
      <>
        {/* {item.postedBy}
        {item.question}
        {item.createdAt}
        <br/> */}
        <Post question={item} />
      </>
    )
  })

  const photo =
    "https://res.cloudinary.com/kevumandalik/image/upload/v1663650162/anyDoubts/a4uf4bzcf1ko0cmvvvrj.jpg";
  const userName = "Keval Mandalik";
  const location = "Vadodara, Gujarat";

  return (
    <div className="userProfile">
    
      <Nav />
      <div style={{ margin: "85px auto", width: "90%" }}>
        <UserProfile
          photo={photo}
          userName={userName}
          location={location}
          initialLikesCount={121}
          initialFollowingCount={723}
          initialFollowersCount={4433}
        />
      </div>

      <div style={{width:"90%", margin:"0 auto"}}>
        <QuoraBox />
        <div><h3 style={{color:"gray", margin:"20px 0"}}>Your Posts</h3></div>
        {mainFeed}
      </div>
    </div>
  );
}

export default App;
