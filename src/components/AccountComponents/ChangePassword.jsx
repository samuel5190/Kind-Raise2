import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "axios";

const ChangePassword = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [loading, setLoading] = useState(false);
  const Nav = useNavigate()
  // const token = useSelector((state)=>state.app.token)
  const token = localStorage.getItem('userToken')

  useEffect(()=>{
    console.log(token);
  },[token])
  
  const [oldPassword, setOldPassword] = useState('')
  const [NewPassword, setNewPassword] = useState('')
  const [ConfirmNewPassword, setConfirmNewPassword] = useState('')
  const form ={
    oldPassword, NewPassword, ConfirmNewPassword
  }
  // console.log(form)
  const handleChangePassword =()=>{
    if (!oldPassword || !NewPassword || !ConfirmNewPassword)  {
      toast.error("details is required")
    } else {
      setLoading(true)
      const url = `https://kindraise.onrender.com/api/v1/changePassword/${token}`
      const data = {oldPassword, NewPassword, ConfirmNewPassword}
      axios.put(url, data)
      .then((res)=>{
        console.log(res)
        // console.log(res?.data)
        // console.log(res?.data?.data)
        // Nav(-1)
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err?.response?.data?.info)
        toast.error(err?.response?.data?.info)
        // toast.error(err?.response?.data?.info)
        setLoading(false)
      })
    }
    // localStorage.removeItem("userToken")
  }



  return (
    <>
    <div className="loginBody">
      <div className="ChangeLogoSec" >
        <BiArrowBack color="#05BB6D" size={20}/>
        <img src={logo} alt="" onClick={()=>Nav(-1)}/>
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className="loginText">
              <h2>Change Password</h2>
              <p>Update your password.</p>
            </div>
            <div className="ChangeInputHolder">
              Old Password
              <div className="loginUpInput">
                {/* {show ? ( */}
                  <input type={show ? 'password': 'text'} className="pass inp" onChange={(e)=>setOldPassword(e.target.value)} />
                
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="ChangeInputHolder">
              New Password
              <div className="loginUpInput">
                <input type={show ? 'password': 'text'} className="pass inp" onChange={(e)=>setNewPassword(e.target.value)}/>
                {/* {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )} */}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <div className="ChangeInputHolder">
              Confirm New Password
              <div className="loginUpInput">
                <input type={show ? 'password': 'text'} className="pass inp" onChange={(e)=>setConfirmNewPassword(e.target.value)}/>
                {/* {show ? (
                  <input type="password" className="pass inp" />
                ) : (
                  <input type="text" className="pass inp" />
                )} */}
                <span>
                  {show ? (
                    <BsEye size={20} onClick={() => setShow(false)} />
                  ) : (
                    <BsEyeSlash size={20} onClick={() => setShow(true)} />
                  )}
                </span>
              </div>
            </div>
            <button className="loginBtn" onClick={handleChangePassword}>
              {
                loading ? "Loading..." : "Save Changes"
              }
            </button>
          </div>
        </div>
        {/* <div>©2024 KindRaise, Inc. All rights reserved</div> */}
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default ChangePassword;
