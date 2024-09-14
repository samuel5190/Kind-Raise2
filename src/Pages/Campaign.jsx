import React, { useEffect, useState } from "react";
import "./css/campaign.css";
import { BiFilter, BiSearch } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
// import Table from "../components/Table/Table";
import Table from "../components/Table/Table";

const Campaign = () => {
  const Nav = useNavigate();
  const campaigns = [
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Filter state
  // console.log(search);

  const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      category: "Electronics",
      status: "active",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      category: "Electronics",
      status: "active",
    },
    { id: 3, name: "Sony WH-1000XM4", category: "Audio", status: "active" },
    { id: 4, name: "Dell XPS 13", category: "Computers", status: "inactive" },
    {
      id: 5,
      name: "Apple MacBook Pro",
      category: "Computers",
      status: "inactive",
    },
  ];

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const matchesStatus = filterStatus === "all" || product.status === filterStatus;
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearchTerm;
    });
  };

  // Get filtered products
  filteredProducts = getFilteredProducts();
  // console.log(isOpen)

  return (
    <div className="campaignBody">
      <h2 className="pageName">Campaign</h2>
      <div className="campaignContent">
        <div className="campaignSearchSide">
          <div className="SearchSide">
            <div className="searchBox">
              <BiSearch color="gray" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filterContainer">
              <div className="filterIcon" onClick={()=>setFilterToggle(!filterToggle)}>
                <BiFilter size={17} />
              </div>
              {
                filterToggle ?
              <div className="filterBox">
                <div onClick={()=>setFilterStatus("all")[setFilterToggle(false)]}>All</div>
                <div onClick={()=>setFilterStatus("active")[setFilterToggle(false)]}>Active</div>
                <div onClick={()=>setFilterStatus("inactive")[setFilterToggle(false)]}>Inactive</div>
              </div>:null
              }
            </div>
          </div>
          <div>
            <button
              className="campaignBtn"
              onClick={() => Nav("/campaign/create.campaign")}
            >
              New Campaign
            </button>
          </div>
        </div>

        <div className="campaignTable">
          <div className="tableHeader">
            <div className="tableHeadName tb">Campaign</div>
            <div className="tableHeadDetails1 tb">
              <div>Created</div>
              <div>Raised</div>
              <div>Supporters</div>
            </div>
            <div className="tableHeadStatus1 tb">
              <div>Status</div>
              <div className="emp"></div>
            </div>
          </div>

          <div className="createdCampaigns">
            <div className="CampaignName tb">hi</div>
            <div className="tableHeadDetails tb">
              <div>hey</div>
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className="tableHeadStatus tb">
              <div>hello</div>
              <div className="campaignMenuSec">
                <span onClick={() => setIsOpen(!isOpen)}>
                  <VscKebabVertical />
                </span>
                {isOpen ? (
                  <div
                    className="campaignOption"
                    onClick={() => setIsOpen(false)}
                  >
                    <div>Edit</div>
                    <div onClick={() => Nav("/fundraising-page")}>View</div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <ol>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category}
            </li>
          ))}
        </ol>

        <Table/>

        {/* <div className="container">
          <table className="full-width-border">
            <thead className="the">
              <tr className="bg-gray-100">
                <th className="border-style">Campaign</th>
                <th className="border-style">Created</th>
                <th className="border-style">Raised</th>
                <th className="border-style">Supporters</th>
                <th className="border-style">Status</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-bottom">
                  <td className="border-style">
                    {campaign.name}
                  </td>
                  <td className="border-style">
                    {campaign.created}
                  </td>
                  <td className="border-style">
                    {campaign.raised}
                  </td>
                  <td className="border-style">
                    {campaign.supporters}
                  </td>
                  <td className="border-style">
                    <span className="text-green">{campaign.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex-justify-between">
            <button className="bg-gray">Previous</button>
            <span>1</span>
            <button className="bg-gray">Next</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Campaign;
