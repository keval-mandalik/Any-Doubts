import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav"
import UserProfile from "react-user-profile";
import Post from "../Feed/Post";
import QuoraBox from "../Feed/QuoraBox";

function App() {

  const [questions, setQuestions] = useState([]);

  const getAllQuestions = async () => {
    const res = await fetch("http://localhost:3001/api/question/questions", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const dataFromResponse = await res.json();

    // console.log(dataFromResponse);
    if (dataFromResponse)
      setQuestions(dataFromResponse.question);
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
    <div style={{background:"gray"}}>
    
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
