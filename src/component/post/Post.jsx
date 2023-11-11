import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData.js"
import { useState } from "react"

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,setisLiked] = useState(false)
    const likehanduler=()=>{
            setLike(isliked ? like-1:like+1)
            setisLiked(!isliked)
    }
    return (
        <div className="post">
            <div className="postWraper">
                <div className="posttOP">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                        <span className="postTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                    <div className="postTopLeft"></div>
                </div>
                <div className="POSTcENTER">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImage" />
                </div>
                <div className="postButom">
                    <div className="postButtonLeft">
                        <img className="likeIcon" src="Assets/heart.png" onClick={likehanduler} alt="" />
                        <img className="likeIcon" src="Assets/like.png" onClick={likehanduler} alt="" />
                        <span className="postlikeCounter">{like} people like it</span>

                    </div>
                    <div className="postButtonRight">
                        <span className="postCommentTect">{post.comment}</span>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
