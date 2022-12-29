import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
import { useWindowSize } from "../../Hooks/useWindowSize";

const Profile = () => {
  const size = useWindowSize();

  return (
   
    <div>
      {size.width > 960 ? (
        <div className="Profile">
          <ProfileLeft />
          <div className="Profile-center">
            <ProfileCard location ="profilePage"/>
            <PostSide />
          </div>
          <RightSide />
        </div>
      ) : (
        <div className="Profile">         
          <ProfileCard location ="profilePage"/>
          <ProfileLeft />
          <div className="Profile-center">            
            <PostSide />
          </div>
          <RightSide />
        </div>
      )}
    </div>
  );
};

export default Profile;
