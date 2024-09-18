import React from 'react'
import './ShareModal.css'
import { IoCloseOutline } from 'react-icons/io5'

const ShareModal = ({setShareModal}) => {
  return (
    <div className='shareModalBody'>
      <div className='shareModalWrapper'>
        <div className='shareModalHead'>
          <h3>Share: Your sharing matters!</h3>
          <div onClick={()=>setShareModal(false)}><IoCloseOutline size={30} cursor="pointer"/></div>
        </div>
        <div className='shareModalTextBox'>Did you know that fundraiser shared across multiple channels <span>raise as much as 6.5x more funds?</span>  It is thanks to you that this fundraiser has a chance to be successful!</div>
        <div>hello</div>
      </div>
    </div>
  )
}

export default ShareModal