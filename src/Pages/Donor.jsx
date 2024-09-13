import React from 'react'
import './css/donor.css'
import UserStateLocation from '../components/NotificationAlerts/VerificationEmail/UserStateLocation'
import UserLocation from '../components/NotificationAlerts/PaymentIssue/UserLocation'
// import ProgressBar from '../components/ProgressBar/ProgressBar'

const Track = () => {
  return (
    <div className='trackBody'>
      <h2 className="pageName">Donor</h2>
      <UserStateLocation/>
      {/* <UserLocation/> */}
    </div>
  )
}

export default Track