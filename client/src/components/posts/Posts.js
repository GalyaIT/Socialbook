import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostsAction";
import "./Posts.css";
// import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post.js";
import { useParams } from "react-router-dom";

const Posts = () => {
const dispatch = useDispatch();
const {user}=useSelector((state)=>state.authReducer.authData);
let {posts, loading}= useSelector((state)=>state.postReducer);
const params = useParams();

useEffect(()=>{
  dispatch(getTimelinePosts(user._id));
},[]);

if(!posts) return 'No Posts';
if(params.id) posts = posts.filter((post)=> post.userId===params.id)

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
