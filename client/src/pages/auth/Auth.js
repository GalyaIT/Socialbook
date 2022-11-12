import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(isSignUp){
      if(data.password!==data.confirmpass){
        setConfirmPass(false)
      }
    }

  }

   // Reset Form
   const resetForm = () => {   
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    })
  };
  return (
    <div className="Auth">
      {/*left side*/}

      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/*right side*/}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                value={data.confirmpass}
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            * Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => { 
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>

//         <div>
//           <input
//             type="password"
//             className="infoInput"
//             placeholder="Password"
//             name="password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//           <button className="button infoButton">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Usernames"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <div>
//             <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
//         </div>
//         <button className="button infoButton" type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

export default Auth;
