import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequests";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);


  const handleLike = async () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="Post">
      
      {/* <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt="" /> */}

      <img src={data.image ? data.image : ""} alt="" />
      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" onClick={handleLike} />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{likes} likes</span>

      <div className="details">
        <span >{data.author}</span>
        <span>{data.description}</span>
        <span>{data.createdAt}</span>
      </div>
    </div>
  );
};

export default Post;
