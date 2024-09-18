import React from 'react'
import './css/DonorDetails.css'
import { useLocation } from 'react-router-dom';

const DonorDetails = () => {

  const location = useLocation();  
  const { person } = location.state;


  return (
    <div className='donorDetailsBody'>
      hello
    </div>
    // <div>  
    //   <h1>{person.name}</h1>  
    //   <p>Email: {person.email}</p>  
    //   <p>Contribution: {person.contribution}</p>  
    //   <p>Contact Since: {person.contact_since}</p>  
    //   <p>Campaign: {person.campaign}</p>  
    //   <p>Message: {person.message}</p>  
    // </div>
  )
}

export default DonorDetails