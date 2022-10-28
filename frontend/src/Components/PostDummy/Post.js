import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
//   const [like,setLike] = useState(post.like)
//   const [isLiked,setIsLiked] = useState(false)

//   const likeHandler =()=>{
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//   }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            /> */}
            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */} Om Tita
            </span>
            {/* <span className="postDate">{post.date}</span> */}
            <span className="postDate">25 August</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" /> */}
          <span className="postText">fnafbafsjhjs fjsafsafjsah jfahjshfuh fasfhuas fhashfusahfb sabsahfenma anjfhaf</span>
          {/* <img className="postImg" src={post.photo} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> */}
            <span className="postLikeCounter">20 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">30 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
