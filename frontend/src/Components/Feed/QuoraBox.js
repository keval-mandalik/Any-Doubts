import React, { useState, useEffect } from 'react'
import './QuoraBox.css';
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close"
import { Avatar, Input } from '@material-ui/core';
import { ExpandMore, PeopleAltOutlined } from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const QuoraBox = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = <CloseIcon />
  const [question, setQuestion] = useState("");
  const [profilePicture,setProfilePicture] = useState("https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png");
  const [email,setEmail] = useState("user@gmail.com")
  const cookie = (Cookie?.get('user'));
  const navigate = useNavigate();
    // useEffect(()=>{console.log(question)},[question])

  const addQuestion = async (q) => {
    console.log(q)

    let ParsedCookie;
        if(cookie != undefined){
          ParsedCookie = JSON.parse(cookie);
        }else{
          navigate('/login');
        }

    const response = await fetch("http://localhost:3001/api/question/addquestion", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: q,
        picture:ParsedCookie.profile_picture,
        PostedBy: ParsedCookie.email,
        category: cat
      })
    });
    // const res = await response.json();
    console.log(response);
    // const res = await fetch( "http://localhost:3001/api/question/addquestion" , {
    //   method : 'POST',
    //   mode : 'no-cors',
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   },
    //   body:JSON.stringify({
    //     question : "New Question",
    //     PostedBy : "keval@gmail.com",
    //     Upvotes: 11
    //   })
    // })

    // const dataFromResponse = await res.json();

    // // console.log(dataFromResponse);
    // if(dataFromResponse)
    //   console.log("done")
    // else
    //   console.log("something went wrong")
  }

  const submitHandler = (e) => {
    // e.preventDefault();

    console.log("submitted")
    setIsModalOpen(false)
    const values = { question, inputUrl };
    addQuestion(question);
  }

  useEffect(()=>{
    let ParsedCookie;
        if(cookie != undefined){
          ParsedCookie = JSON.parse(cookie);
          setProfilePicture(ParsedCookie.profile_picture);
          setEmail(ParsedCookie.email);
        }
  },[])

  useEffect(()=>{
    console.log(email);
  },[email])

  const [cat, setCategory] = useState('General');

  const options = [
    'General','Frontend', 'Backend', 'DataScience', 'CyberS', 'AIML'
  ];
  const defaultOption = options[0];

  const CategoryChange = (e) => {
    setCategory(e.value);
    console.log("DropDown Changes")
  }

  return (
    <div className='quoraBox'>
      <div className="quoraBox__info">
        <Avatar src={profilePicture}/>
        <div className="quoraBox__quora">
          <h5>What is Your Question/Link?</h5>
        </div>

      </div>

      <div className='quoraBox_options'>
        <button type="button" onClick={() => setIsModalOpen(true)}><i className="fa-solid fa-people-group"></i>Ask</button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className='modal__title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>

          <div className='modal__info'>
            <Avatar src={profilePicture}/>
            {/* <div className='modal__scope'>
              <PeopleAltOutlined />
              <Dropdown options={options} onChange={console.log("Dropdown")} value={defaultOption} placeholder="Select an option" />;
              <ExpandMore />
            </div> */}
              <Dropdown options={options} onChange={(e) => CategoryChange(e)} value={defaultOption} placeholder="Select an option" />
          </div>

          <div className='modal__field'>
            <Input type='text' placeholder='Start your question with "What","How","Why", etc.' value={question} onChange={(e) => setQuestion(e.target.value)} />
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <input type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "10px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid black"
                }}
                placeholder="Optional: include a lnk that gives a context " />
              {
                inputUrl !== "" && <img style={{
                  height: "40vh",
                  objectFit: "contain"
                }} src={inputUrl} alt="Question Image" />
              }

            </div>
          </div>

          <div className='modal__button'>
            <button className='cancel' onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button type='submit' onClick={(e) => submitHandler()} className='add'>
              Add Question
            </button>
          </div>

        </Modal>
        <Link to="/answer"><button><i className="fa-solid fa-people-group"></i>Answer</button></Link>
        <button type="button" onClick={() => setIsModalOpen(true)}><i className="fa-solid fa-people-group"></i>Post</button>
      </div>
    </div>
  )
}

export default QuoraBox
