import React, { useState } from 'react'
import './css/payout.css'
import { BsBank } from "react-icons/bs";
import PayoutTable from '../components/PayoutTable/PayoutTable';
import PayoutModal from '../components/Modal/PayoutModal';

const Payout = () => {
  const [payout, setPayout] = useState(false)
  return (
    <div className='payoutBody'>
      {
        payout?
        <PayoutModal setPayout={setPayout}/>:null
      }
      <h2 className="pageName">Payout</h2>
      <div className='payoutContent'>
        <div className='payoutBankDetails'>
          <div className='payoutBankBox'>
            <div className='payoutBankIcon'>
              <BsBank size={20}/>
            </div>
            <div className='payoutAccDetailsBox'>
              <h2>Bank Account</h2>
              <div>Connect a bank account to begin withdrawing funds.</div>
              <button onClick={()=>setPayout(true)}>connect</button>
            </div>
          </div>
          <div className='payoutWidDetails'>
            <div className='norBal'>Balance: ₦100,000</div>
            <div className='WithBal'>withdrawable Balance: ₦100,000</div>
            <button className='withdraBtn'>My transaction</button>
          </div>
        </div>
        <div className='payoutTableBox'>
          <PayoutTable/>
        </div>
      </div>
    </div>
  )
}

export default Payout