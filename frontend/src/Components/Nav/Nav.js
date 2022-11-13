import React, { useState, useEffect } from 'react'
import "./Nav.css"
import logo from "../../../src/images/logo.png"
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close"
import { Avatar, Input } from '@material-ui/core';
import { ExpandMore, PeopleAltOutlined } from '@material-ui/icons';
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import Cookie from 'js-cookie'

function Nav() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputUrl, setInputUrl] = useState("");
    const Close = <CloseIcon />
    const [question, setQuestion] = useState("");
    const [profilePicture, setProfilePicture] = useState("https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png");
    // useEffect(()=>{console.log(question)},[question])
    const cookie = (Cookie?.get('user'));
    const navigate = useNavigate();

    useEffect(() => {
        let ParsedCookie;
        if (cookie != undefined) {
            ParsedCookie = JSON.parse(cookie)
            setProfilePicture(ParsedCookie.profile_picture);
        }
    }, [])


    const addQuestion = async (q) => {


        let ParsedCookie;
        if (cookie != undefined) {
            ParsedCookie = JSON.parse(cookie)
        } else {
            navigate("/login")
        }
        // console.log(cookie);

        const response = await fetch("http://localhost:3001/api/question/addquestion", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: q,
                PostedBy: ParsedCookie.email,
                Upvotes: 10
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
        <>
            <div className="container-fluid">

                <nav className="navbar navbar-expand-md navbar-light fixed-top">
                    <Link to="/" className="navbar-brand me-5 ms-2">
                        <img src={logo}
                            alt="Logo" style={{ width: "80px", height: "60px", filter: "invert(1)" }} />
                    </Link>

                    <button className="navbar-toggler custom-toggler" type="button" data-bs-target="#navbar"
                        data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/"><i className="fa-solid fa-house"></i></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/following"><i className="fa-solid fa-list"></i></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/answer"><i className="fa-solid fa-pen-to-square"></i></Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/spaces"><i className="fa-solid fa-people-group"></i></Link>
                            </li>

                        </ul>

                        <form action="#" className="d-flex" >
                            <input className="form-control mx-3" type="text" placeholder="Search" />
                            <Link to="/user"><img className="mx-3"
                                src={profilePicture}
                                // src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
                                alt="profile" style={{ width: "40px", height: " 40px", borderRadius: "20px" }} /></Link>
                            <button className="btn qbutton" type="button" onClick={() => setIsModalOpen(true)}><a href="#">Add Question</a></button>

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
                                    <Avatar src={profilePicture} />

                                    {/* <div className='modal__scope'>
                                        <PeopleAltOutlined />
                                        <p>Public</p>
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
                        </form>

                    </div>
                </nav>


                {/* <div className="ask d-flex m-3" style={{justifyContent:"left"}}>
                    <div className="profile">
                        <a href="#"><img className="mx-3" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"
                            alt="profile" style={{width: "40px", height:" 40px", borderRadius: "20px"}} /></a>
                    </div>

                    <div className="question ">
                        <form action="#">
                            <input type="text" className="form-control" placeholder="What do you want to ask or share ?"
                                style={{width:" 150%", borderRadius: "20px" }}/>
                        </form>
                    </div>
                </div> */}

            </div>
        </>
    );
}

export default Nav;
