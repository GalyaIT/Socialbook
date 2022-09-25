import React from "react";
import "./Auth.css";
import LogIn from '../../components/logIn/LogIn';
import Logo from "../../img/logo.png";
import SignUp from "../../components/signUp/SignUp";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>       
      </div>
      {/* <LogIn /> */}
      <SignUp />
    </div>
  );
};

export default Auth;
