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
    }).then((res) => {
      console.log(res, "RESPONSE")
      console.log(user);
      if (res.data.question)
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

  const photo = JSON.parse(user).profile_picture;
  const userName = (JSON.parse(user).name).toUpperCase();
  const designation = "Full Stack Web Developer";

  return (
    <div className="userProfile">

      <Nav />
      <div style={{ margin: "85px auto", width: "90%" }}>
        <UserProfile
          photo={photo}
          userName={userName}
          location={designation}
          initialLikesCount={121}
          initialFollowingCount={723}
          initialFollowersCount={4433}
        />
      </div>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <QuoraBox />
        {mainFeed}
      </div>
    </div>
  );
}

export default App;
