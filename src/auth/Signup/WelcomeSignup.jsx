import React, { useState } from 'react'
import './welcomesignup.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/LoadingPage/Loading'

const WelcomeSignup = ({setActiveSignupPage}) => {
  const Nav = useNavigate()
  const [loading, setLoading] =useState(false)

  const moveBtn=()=>{

    // setLoading(!loading)
    setTimeout(()=>{
      // setLoading(false)
      setActiveSignupPage("A")
      Nav('/')
    },3000)
  }
  return (
    <div className='welcomeSignupPage'>
      {/* {
        loading ? <Loading/>:null
      } */}
      <div className='welcomesignupBox'>
        <h2>Welcome!</h2>
        <div>
          We are glad to have you, verify your email to continue
        </div>
        <button className='welcomeBtnDashboard' onClick={moveBtn}>
          Verify your email
        </button>
      </div>
    </div>
  )
}

export default WelcomeSignup