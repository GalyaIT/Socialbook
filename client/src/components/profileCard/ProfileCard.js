import React from "react";
import Cover from "../../img/cover.jpg";
import ProfileImage from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="coverPhoto" />
        <img src={ProfileImage} alt="profileImage" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>6,890</span>
            <span>following</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>1</span>
            <span>follower</span>
          </div>        
        </div>
        <hr />
      </div>
      <span>My profile</span>
    </div>
  );
};

export default ProfileCard;
