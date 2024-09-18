import React, { useState } from "react";
import "./css/dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BiMoney } from "react-icons/bi";
import { BsMegaphone, BsPeople } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import School from "../assets/School.svg";
import { useNavigate } from "react-router-dom";
// import { Bar } from 'rechart';
// import { BarChart, ResponsiveContainer,Bar, XAxis, YAxis, Tooltip } from 'recharts';

const DashBoard = () => {
  const products = [
    {
      name: "05/17/2024",
      donor: 1500,
      receiver: 3000,
      hidden: 900,
    },
    {
      name: "06/17/2024",
      donor: 3000,
      receiver: 3500,
      hidden: 1000,
    },
    {
      name: "07/17/2024",
      donor: 4000,
      receiver: 2000,
      hidden: 400,
    },
    {
      name: "08/17/2024",
      donor: 4500,
      receiver: 2500,
      hidden: 700,
    },
    {
      name: "09/17/2024",
      donor: 3000,
      receiver: 2000,
      hidden: 1200,
    },
    {
      name: "10/17/2024",
      donor: 500,
      receiver: 2800,
      hidden: 1200,
    },
    {
      name: "11/17/2024",
      donor: 2000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "12/17/2024",
      donor: 3000,
      receiver: 2500,
      hidden: 1200,
    },
    {
      name: "01/17/2024",
      donor: 0,
      receiver: 3000,
      hidden: 1200,
    },
    {
      name: "02/17/2024",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
    {
      name: "03/17/2024",
      donor: 3000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "04/17/2024",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
  ];

  const [data, setdata] = useState([
    {
      amount: 110000,
      name: "Total Amount",
      icon: "total",
      message: "",
    },
    {
      amount: 11000,
      name: "Total Donation",
      icon: "total",
      message: "",
    },
    {
      amount: 40,
      name: "Total Donors",
      icon: "total",
      message: "",
    },
    {
      amount: 12,
      name: "Active Campaigns",
      icon: "total",
      message: "",
    },
  ]);

  const Nav = useNavigate();

  // const max = 2000;
  // const current = 1000;
  const percentage = (1000 / 2000) * 100;


  const RoundedTopBar = (props) => {  
    const { x, y, width, height, radius, fill } = props;  
  
    return (  
      <g>  
        {/* Top rounded part of the bar */}  
        <rect   
          x={x}  
          y={y}  
          width={width}  
          height={height}  
          fill={fill}  
          rx={radius} // Apply rounding to top corners  
          ry={radius}  
        />  
        {/* Bottom straight part of the bar */}  
        <rect  
          x={x}  
          y={y + radius} // Start below the rounded part  
          width={width}  
          height={height - radius} // Make it shorter to accommodate the rounded corners  
          fill={fill}  
        />  
      </g>  
    );  
  };

  return (
    <div className="dashboardBody">
      <div>
        <div className="dashNameBtnHolder">
          <h2 className="pageName">Home</h2>
          <button
            className="campaignBtn dash"
            onClick={() => Nav("/campaign/create.campaign")}
          >
            New Campaign
          </button>
        </div>
        <div className="dashboardContent">
          <div className="dashBoardUpperCard">
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText one">₦110,000</h2>
                <div className="upperCardSubText">Total Raised</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText"></div>
                <div className="iconCircle">
                  <BiMoney color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText two">₦11,000</h2>
                <div className="upperCardSubText">Total Donation</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">+2.5% from yesterday</div>
                <div className="iconCircle">
                  <BiMoney color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText three">40</h2>
                <div className="upperCardSubText">Total Donors</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">+5 this month</div>
                <div className="iconCircleHolder">
                  <div className="iconCircle">
                    <BsPeople color="rgb(78, 78, 239)" size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText four">12</h2>
                <div className="upperCardSubText">Active Campaigns</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText">2 ending this week</div>
                <div className="iconCircle">
                  <BsMegaphone color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            {/* <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div> */}
          </div>

          <div className="dashBoardLowerCard">
            <div className="barChart">
            <ResponsiveContainer width="100%" height="100%">  
              <BarChart data={products}>  
                <XAxis dataKey="name" />  
                <YAxis />  
                <Tooltip />  
                <Bar  
                  shape={(props) => <RoundedTopBar {...props} radius={15} />} // Use the custom shape  
                  type="monotone"  
                  stroke="#0042d1"  
                  fill="#4d77e1"  
                  dataKey="donor"  
                  barSize={20} // Adjust this value to make bars thinner or thicker  
                />  
              </BarChart>  
            </ResponsiveContainer>
            </div>

            <div className="fundraisingDashboardBox">
              <div className="fundraiseDashHead">
                <h3>Your Fundraising</h3>
                <div>
                  <AiOutlineExport size={20} cursor="pointer" />
                </div>
              </div>
              <div className="fundraiseDashBody">
                <div className="fundRaiseDashCard">
                  <div className="fundraiseFrameBox">
                    <div className="fundRaiseFrameImgBox">
                      <img src={School} alt="" />
                    </div>
                    <div className="fundRaiseFrameText">
                      Sponsor 5 Children in Nigeria Get Back to School
                    </div>
                  </div>
                  <div className="fundRaiseTrackBox">

                    <div className="trackBoxDash small">
                      <div className="progress-containerDash">
                        <div
                          className="progress-barDash"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="fundraiseAmountTrack">
                      <div>
                        ₦100,450/<span>150,000</span>
                      </div>
                      <div>69% funded</div>
                    </div>
                  </div>
                </div>
                <div className="fundRaiseDashCard">
                  <div className="fundraiseFrameBox">
                    <div className="fundRaiseFrameImgBox">
                      <img src={School} alt="" />
                    </div>
                    <div className="fundRaiseFrameText">
                      Sponsor 5 Children in Nigeria Get Back to School
                    </div>
                  </div>
                  <div className="fundRaiseTrackBox">
                    <div className="trackBoxDash small">
                      <div className="progress-containerDash">
                        <div
                          className="progress-barDash"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="fundraiseAmountTrack">
                      <div>
                        ₦100,450/<span>150,000</span>
                      </div>
                      <div>69% funded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recentDonorsHistory">
            <div className="donationHistoryPersonBox">
              <div className="donorHistoryHead">Donation history</div>
              <div className="donorHistoryPeople">
                <div className="donorPeople">hello</div>
                <div className="donorPeople">hello</div>
              </div>
            </div>
            <div className="donationHistoryPersonShow">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
