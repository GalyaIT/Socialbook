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
    // <div className="Profile">

    //   <ProfileLeft />
    //   <div className="Profile-center">
    //     <ProfileCard />
    //     <PostSide />
    //   </div>
    //   <RightSide />
    // </div>

    // this.props.hasImage ? <MyImage /> : <SomeotherElement>

    /* <div>
      {size.width}px / {size.height}px
    </div> */
    <div>
      {size.width > 960 ? (
        <div className="Profile">
          <ProfileLeft />
          <div className="Profile-center">
            <ProfileCard />
            <PostSide />
          </div>
          <RightSide />
        </div>
      ) : (
        <div className="Profile">         
          <ProfileCard />
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
