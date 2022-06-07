import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css'
import {
    ArrowUpwardOutlined,
    ArrowDownwardOutlined,
    RepeatOneOutlined,
    ChatBubbleOutlined,
    ShareOutlined,
    MoreHorizOutlined
} from '@material-ui/icons'
const Post = () => {
    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h4>User Name</h4>
                <small>1 hours ago</small>
            </div>
            <div className='post__body'>
                <div className="post__question">
                <p>Here question will be apear</p>
                <button className='post__btnAnswer'>Answer</button>
                </div>
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />
                <div className='post__footerLeft'>
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
            <p style={{
                color:"rgba(0,0,0,0.5)",
                fontSize:"12px",
                fontWeight:"bold",
                margin:"10px 0px"
            }}>1 Answer</p>
            <div style={{
                margin:"5px 0px 0x 0px",
                padding:"5px 0px 0px 20px",
                borderTop:"1px solid lightgray"
            }} className='post__asnwer'>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    width:"100%",
                    padding:"10px 5px",
                    borderTop:"1px solid lightgray"
                }} className="post-answer-container">
                    <div style={{
                    display:"flex",
                    alignItems:"center",
                    marginBotton:"10px",
                    fontSize:"12px",
                    fontWeight:600,
                    color:"#888"
                }} className='post-answered'>
                        <Avatar />
                        <div style={{
                            margin:"0px 5px"
                        }} className='post-info'>
                            <p style={{margin:"0px"}}>UserName</p>
                            <span>20 Min ago</span>
                        </div>
                    </div>
                    <div className='post-answer'>
                        <h1>this is test Answer</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
