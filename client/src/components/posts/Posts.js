import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostsAction";
import "./Posts.css";
// import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post.js";

const Posts = () => {
const dispatch = useDispatch();
const {user}=useSelector((state)=>state.authReducer.authData);
const {posts, loading}= useSelector((state)=>state.postReducer);

useEffect(()=>{
  dispatch(getTimelinePosts(user._id));
},[]);


  return (
    <div className="Posts">
      {loading? "Fetching posts..." :
      posts.map((post, id) => {
        return <Post key={id} data={post}  />;
      })}
    </div>
  );
};

export default Posts;
