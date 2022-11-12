import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Post.css'
import {
    ArrowUpwardOutlined,
    ArrowDownwardOutlined,
    RepeatOneOutlined,
    ChatBubbleOutlined,
    ShareOutlined,
    MoreHorizOutlined
} from '@material-ui/icons'
import CloseIcon from "@material-ui/icons/Close"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css";
import axios from "axios"
import Cookie from 'js-cookie'

import { DefaultEditor } from 'react-simple-wysiwyg';

const Post = (props) => {

    const question = props.question;
    const user = Cookie?.get('user')
    // console.log(question, "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
    const d = new Date(question.createdAt);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [html, setHtml] = React.useState("");
    const [answers,setAnswers] = useState([]);
    const [noOfUpvote,setNoOfUpvote] = useState(question?.Upvotes.length);
    function onChange(e) {
        setHtml(e.target.value);
      }
    const Close = <CloseIcon />

    const addAns = () => {
    axios.post(`http://localhost:3001/api/answer/addanswer/${question._id}`, {
        answer : html,
        PostedBy: JSON.parse(user).email
    }).then((res)=>{
        console.log(res, "RESPONSESSSSSSS")
    })
    setIsModalOpen(false)
    }

    const getQuestionSpecificAnswer = ()=>{
        axios.get(`http://localhost:3001/api/answer/getanswer/${question._id}`).then((res)=>{
            setAnswers(res.data.answer)
            console.log(res.data.answer,"ANSWERRRRRRRRRRR")
        })
    }
    const handleUpvote = ()=>{
        axios.put(`http://localhost:3001/api/question/${question._id}/upvoteque`,{
            userId:JSON.parse(user)._id
        }).then((res)=>{
            setNoOfUpvote(res.data.question.Upvotes.length);
            console.log(res)
        })
    }
    function createMarkup(html) {
        return { __html: html };
      }
    useEffect(()=>{
        getQuestionSpecificAnswer();
    },[])

    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h4>{question.PostedBy}</h4>
                <small>{d.toDateString()}</small>
            </div>
            <div className='post__body'>
                <div className="post__question">
                    <p>{question.question}</p>
                    <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>Answer</button>
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
                        <div className='modal__question'>
                            <h1>This is test Question</h1>
                            <p>asked by {""}<span>Username</span>{""} on{""} timestamp</p>
                        </div>

                        <div className='modal__answer'>
                        <DefaultEditor value={html} onChange={onChange} style={{
                            height: "40vh",
                        }}/>
                        </div>

                        <div className='modal__button'>
                            <button className='cancel' onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>

                            <button type='submit' onClick={addAns} className='add'>
                                Add Answer
                            </button>
                        </div>

                    </Modal>

                </div>
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <div className="upvote">
                    <ArrowUpwardOutlined onClick={handleUpvote}/> {noOfUpvote}

                    </div>
                    {/* <ArrowDownwardOutlined /> */}
                </div>
                {/* <RepeatOneOutlined /> */}
                {/* <ChatBubbleOutlined /> */}
                <div className='post__footerLeft'>
                    <ShareOutlined />
                    
                    <MoreHorizOutlined />
                </div>
            </div>
            <p style={{
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                margin: "10px 0px"
            }}>{answers.length} Answer</p>
            <div style={{
                margin: "5px 0px 0x 0px",
                padding: "5px 0px 0px 20px",
                borderTop: "1px solid lightgray"
            }} className='post__asnwer'>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px 5px",
                    // borderTop: "1px solid lightgray"
                }} className="post-answer-container">
                    {answers.length > 0 ? answers.map((item)=>{
                        return(<>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginBotton: "10px",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "white"
                        }} className='post-answered'>
                            <Avatar />
                            <div style={{
                                margin: "0px 5px"
                            }} className='post-info'>
                                <p style={{ margin: "0px" }}>{item.PostedBy}</p>
                                <span>{new Date(item.createdAt).toDateString()}</span>
                            </div>
                        </div>
                        <div className='post-answer'>
    
                            {/* <h4 style={{color:"white"}}>This is test Answer</h4> */}
                            {/* {item.answer} */}
                            <div dangerouslySetInnerHTML={createMarkup(item.answer)} />
                        </div>
                        </>)
                    }):
                        <p>not answered yet</p>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Post;

// useEffect(() => {
//     const html = convertToHTML(editorState.getCurrentContent());
//     props.setContentHtml(html);
//   }, [editorState]);

//editor documetation link
// https://www.npmjs.com/package/react-simple-wysiwyg
