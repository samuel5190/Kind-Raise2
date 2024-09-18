import React, { useEffect, useState } from 'react'
import './individualsignup.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const IndividualSignup = ({setActiveSignupPage}) => {
  const [show, setShow]= useState(false)
  const [toggle, setToggle] = useState(false)

 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [email, setEmail] = useState('')
 const [phoneNumber, setPhoneNumber] = useState('')
 const [password, setPassword] = useState('')
 console.log(password)

 const formData = { password,phoneNumber,firstName,lastName,email}
//  console.log(formData)

 const [showPassword, setShowPassword] = useState(true)
 const [passwordCheck, setPasswordCheck] = useState(false)
 const [passwordErrorlow, setPasswordErrorLow] = useState("");
const [passwordErrorUpper, setPasswordErrorUpper] = useState();
const [passwordErrorNumber, setPasswordErrorNumber] = useState();
const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();


  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };
  
  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };
  
  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };
  
  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };


  // const handlePassword = (e) => {
  //   const newData  = e.target.value
  //   setPassword(newData)

  //   if (newData.length > 0){
  //     setPasswordCheck(true)
  //   }if(!containsLowercase(newData)){
  //     setPasswordErrorLow(true)
  //   }else{
  //     setPasswordErrorLow(false)
  //   }if(!containsUpperrcase(newData)){
  //     setPasswordErrorUpper(true)
  //   }else{
  //     setPasswordErrorUpper(false)
  //   }if(!containsNumber(newData)){
  //     setPasswordErrorNumber(true)
  //   }else{
  //     setPasswordErrorNumber(false)
  //   }if(!containsSymbol(newData)){
  //     setPasswordErrorSymbol(true)
  //   }else{
  //     setPasswordErrorSymbol(false)
  //   }
  // }

  // const [firstName, setFirstName] = useState("")

  const handleBtn = () => {
    if (!firstName ||!lastName ||!phoneNumber || !password || !email) {
      // alert("details is required");
      toast.error("details is required");
    } else {
      const url = "https://kindraise.onrender.com/api/v1/signup";
      const data = { password,phoneNumber,firstName,lastName,email}
      axios
        .post(url, data)
        .then((res) => {
          console.log(res?.data?.message);
          toast.success(res?.data?.message);
          setActiveSignupPage("D")
        })
        .catch((err) => console.log(err));
      // Nav('/login')
    }
  };

  

  return (
    <>
    <div className='indSignupBody'>
      <div className='signupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}>Sign in</span>
      </div>
      <div className='indSignupInputBox'>
        <h1 className='indSignupQusBox'>Tell us about your self</h1>
        <div className='indInputHoldBox'>
          First Name
          <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Last Name
          <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Email Address
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Phone Number
          <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Password
          <div className='signupInputClone'>
            <input type={show ? 'text': 'password'} onChange={(e)=>setPassword(e.target.value)}/> 
            {
              show ? 
              <BsEyeSlash cursor="pointer" onClick={()=>setShow(false)}/>:
              <BsEye cursor="pointer" onClick={()=>setShow(true)}/>
            }
          </div>
        </div>
        <div className='signupPassHintBox'>
          Your Password must have:
          <span>At least 8 characters, 1 uppercase letter, 1 lowercase letter,1 special charatcter and 1 number</span>
        </div>
        <div className='TermsBox'>
          <input type="checkbox" name="" id="" /> I have read and agree to the Terms and Use and Private Policy
        </div>
        <button className='signupIndCreateBtn' onClick={handleBtn}>
          Create Account
        </button>
        
      </div>
      <div className='mediaSignupLoginBox'>
        Already have an account?<span onClick={()=>Nav("/")}>Sign in</span>
      </div>
    </div>
    <Toaster/>
    </>
  )
}

export default IndividualSignup