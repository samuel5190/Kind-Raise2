import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const Nav = useNavigate();
  const [show, setShow] = useState(true);
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Login =()=>{
    if (!email || !password)  {
      toast.error("details is required")
    } else {
      const url = "https://kindraise.onrender.com/api/v1/login"
      const data = {email, password}
      axios.post(url, data)
      .then((res)=>{
        console.log(res)
        Nav('/dashboard')
      })
    }
  }

  // const handleLogin = async () => {  
  //   // Perform login logic here and assume you get user & token  
  //   const user = { id: 1, name: 'John Doe' }; // Example user object  
  //   const token = 'some-auth-token'; // Example token  

  //   // Dispatch actions to store in Redux  
  //   dispatch(addUser(user));  
  //   dispatch(userToken(token));  
  // }

  return (
    <>
    <div className="loginBody">
      <div className="logoSec">
        <img src={logo} alt="" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Welcome Back, Change-Maker!</h2>
              <p>Log in to continue your journey of making a difference</p>
            </div>
            <div className="inputHolder">
              Email Address
              <input type="email" className="loginUpInput inp" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="inputHolder">
              Password
              <div className="loginUpInput">
                <input type={show ? 'password' : 'text'} className="pass inp" onChange={(e)=>setPassword(e.target.value)}/>
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="forgetPassword">Forget password</div>
            <button className="loginBtn" onClick={Login}>
              Sign in
            </button>
            <div className="sighUpCreateAcc">
              Dont have a kind raise account? <span onClick={()=>Nav(-1)}>Create one</span>
            </div>
          </div>
        </div>
        <div className="rights">©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default Login;
