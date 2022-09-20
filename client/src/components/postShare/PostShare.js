import React from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="profileImage" />
      <div>
        <input type="text" placeholder="What's happening?" />
      </div>
      <div className="postOptions">
        <div className="option">
          <UilScenery />
          Photo
        </div>
        <div className="option">
          <UilPlayCircle />
          Video
        </div>
        <div className="option">
          <UilLocationPoint />
          Location
        </div>
        <div className="option">
          <UilSchedule />
          Schedule
        </div>
      </div>
    </div>
  );
};

export default PostShare;
