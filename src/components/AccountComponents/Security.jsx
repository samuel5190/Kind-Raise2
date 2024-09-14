import React, { useState } from 'react'
import './Security.css'
import DelectModal from './DelectModal'
import { useNavigate } from 'react-router-dom'

const Security = () => {
  const [delectModal, setDelectModal] = useState(false)
  const Nav = useNavigate()
  return (
    <div className='securityBody'>
      {
        delectModal ? <DelectModal setDelectModal={setDelectModal}/>: null
      }
      <div className='securityEmailBox'>
        <div className='securityEmailWrapper'>
          <div>Organization Contact Email</div>
          <span>example@gmail.com</span>
        </div>
        <aside>Reguest Email Change</aside>
      </div>
      <div className='securityPasswordBox'>
        <div className='securityPasswordWrapper'>
          <div>Password</div>
          <span>•••••••••</span>
        </div>
        <aside onClick={()=>Nav("/change-password")}>Update</aside>
      </div>
      <aside onClick={()=>setDelectModal(true)}>
        Delect your Account
      </aside>
    </div>
  )
}

export default Security