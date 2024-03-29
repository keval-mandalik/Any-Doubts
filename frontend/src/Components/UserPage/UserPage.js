import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav"
import UserProfile from "react-user-profile";
import Post from "../Feed/Post";
import Cookie from "js-cookie";
import QuoraBox from "../Feed/QuoraBox";
import axios from 'axios'
import "./UserPage.css"
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function App() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (Cookie.get('user') === undefined) {
      //TODO: Redirect to login 
      alert('Login')
      // Navigate('/login')
    }
  }, [])

  const [questions, setQuestions] = useState([]);
  const [likes,setLikes] = useState(0);
  const user = Cookie?.get('user')
  const getAllQuestions = async () => {

    axios.post(`http://localhost:3001/api/question/userquestion`, {
      email: JSON.parse(user).email
    }).then((res) => {
      console.log(res.data.question, "RESPONSE")
      let like = 0;
      res.data.question.forEach(item => {
        like += item.Upvotes.length;
      });
      setLikes(like);
      console.log(user);
      if (res.data.question)
        setQuestions(res.data.question)
    })
  }

  const handleSignout = ()=>{
    console.log("deleting cookies and logind out")
    Cookie.remove("user")
    swal({
      title: "Good Bye!",
      text: "You've logged out Successfully!",
      icon: "success",
      button: "Okay!",
  });
    Navigate('/login')
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

  // const handleLogout = () => {
  //   Cookie.remove('user')
  //   // Navigate('/')
  // }


  return (
    <div className="userProfile">

      <Nav />
      <div className="user-data" style={{ margin: "85px auto", borderRadius: "100px" }}>
        <div className="header">
          <img src={photo} alt="my image" class="floatdown" />
        </div>

        <div className="body">
          <div className="user-detail">
            <h3 className="user-name">{userName}</h3>
            <h6 className="designation">{designation}</h6>
          </div>

          <button className="sign-out" onClick={handleSignout}> <img src="http://cdn.onlinewebfonts.com/svg/img_276638.png" alt="" /> Sign Out</button>

          <div className="posts">
            <div className="Post">Posts <p>{questions.length}</p></div>
            <div className="Post" style={{ marginLeft: "20px" }}>Reputation <p>{likes}</p></div>
            {/* <div className="Post" style={{ marginLeft: "20px" }}>Followers <p>50</p></div> */}
          </div>
        </div>



      </div>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <QuoraBox />
        {mainFeed}
      </div>
    </div>
  );
}

export default App;
