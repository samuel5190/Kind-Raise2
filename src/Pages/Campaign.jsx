// import React, { useEffect, useState } from "react";
// import "./css/campaign.css";
// import { BiFilter, BiSearch } from "react-icons/bi";
// import { CgMenu } from "react-icons/cg";
// import { useNavigate } from "react-router-dom";
// import { useTable } from "react-table";

// import { VscKebabVertical } from "react-icons/vsc";
// // import Table from "../components/Table/Table";
// import Table from "../components/Table/Table";
// import { BsArrowDown } from "react-icons/bs";
// import { FaEllipsisV } from "react-icons/fa";
// import TableIcon from "../components/Table/TableIcon";

// const Campaign = () => {
//   const Nav = useNavigate();
//   const campaigns = [
//     {
//       name: "Root of Hope",
//       created: "02/19/2024",
//       raised: "NO",
//       supporters: 0,
//       status: "Active",
//     },
//     {
//       name: "Root of Hope",
//       created: "02/19/2024",
//       raised: "NO",
//       supporters: 0,
//       status: "Active",
//     },
//     {
//       name: "Root of Hope",
//       created: "02/19/2024",
//       raised: "NO",
//       supporters: 0,
//       status: "Active",
//     },
//     {
//       name: "Root of Hope",
//       created: "02/19/2024",
//       raised: "NO",
//       supporters: 0,
//       status: "Active",
//     },
//   ];
//   const [isOpen, setIsOpen] = useState(false);
//   const [filterToggle, setFilterToggle] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all"); // Filter state
//   // console.log(search);

//   const products = [
//     {
//       id: 1,
//       name: "Apple iPhone 13",
//       category: "Electronics",
//       status: "active",
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S21",
//       category: "Electronics",
//       status: "active",
//     },
//     { id: 3, name: "Sony WH-1000XM4", category: "Audio", status: "active" },
//     { id: 4, name: "Dell XPS 13", category: "Computers", status: "inactive" },
//     {
//       id: 5,
//       name: "Apple MacBook Pro",
//       category: "Computers",
//       status: "inactive",
//     },
//   ];

//   let filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const getFilteredProducts = () => {
//     return products.filter((product) => {
//       const matchesStatus =
//         filterStatus === "all" || product.status === filterStatus;
//       const matchesSearchTerm = product.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       return matchesStatus && matchesSearchTerm;
//     });
//   };

//   // Get filtered products
//   filteredProducts = getFilteredProducts();
//   // console.log(isOpen)

//   const persons = [
//     {
//       name: "Alice",
//       raised: 25,
//       created: "22/03/2024",
//       status: "active",
//       supporters: "5",
//       campaign: "Save the tree",
//       message: "I’m so proud to be a changemaker. #Love",
//       email: "jacksam@gmail.com",
//       contribution: "1,000",
//       contact_since: "22/03/2024",
//     },
//     {
//       name: "Bob",
//       raised: 30,
//       created: "22/03/2024",
//       status: "inactive",
//       supporters: "7",
//       campaign: "Save the tree",
//       message: "I’m so proud to be a changemaker. #Love",
//       email: "jacksam@gmail.com",
//       contribution: "1,000",
//       contact_since: "22/03/2024",
//     },
//     {
//       name: "Charlie",
//       raised: 22,
//       created: "22/03/2024",
//       status: "active",
//       supporters: "2",
//       campaign: "Save the tree",
//       message: "I’m so proud to be a changemaker. #Love",
//       email: "jacksam@gmail.com",
//       contribution: "1,000",
//       contact_since: "22/03/2024",
//     },
//   ];

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Campaign",
//         accessor: "campaign",
//       },
//       {
//         Header: "Created",
//         accessor: "created",
//       },
//       {
//         Header: "Raised",
//         accessor: "raised",
//       },
//       {
//         Header: "Supporters",
//         accessor: "supporters",
//       },
//       {
//         Header: "Status",
//         accessor: "status",
//       },
//       {
//         Header: "",
//         accessor: "actions",
//         // Cell: ({ row }) => <DropdownMenu row={row} />,
//         Cell: ({ row }) => <TableIcon row={row} />,
//       },
//     ],
//     []
//   );

//   const handleRowClick = (rowData) => {
//     // Function to open modal with row data
//     console.log("Row clicked:", rowData); // For demo purposes
//     setModal(true); // Set modal to open
//   };

//   const handleAction = (action, rowData) => {
//     console.log(action, rowData);
//     setModal(false); // close the menu after action taken
//   };

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: persons });

//   return (
//     <div className="campaignBody">
//       <h2 className="pageName">Campaign</h2>
//       <div className="campaignContent">
//         <div className="campaignSearchSide">
//           <div className="SearchSide">
//             <div className="searchBox">
//               <BiSearch color="gray" />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="filterContainer">
//               <div
//                 className="filterIcon"
//                 onClick={() => setFilterToggle(!filterToggle)}
//               >
//                 <BiFilter size={17} />
//               </div>
//               {filterToggle ? (
//                 <div className="filterBox">
//                   <div
//                     onClick={() =>
//                       setFilterStatus("all")[setFilterToggle(false)]
//                     }
//                   >
//                     All
//                   </div>
//                   <div
//                     onClick={() =>
//                       setFilterStatus("active")[setFilterToggle(false)]
//                     }
//                   >
//                     Active
//                   </div>
//                   <div
//                     onClick={() =>
//                       setFilterStatus("inactive")[setFilterToggle(false)]
//                     }
//                   >
//                     Inactive
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <div>
//             <button
//               className="campaignBtn"
//               onClick={() => Nav("/campaign/create.campaign")}
//             >
//               New Campaign
//             </button>
//           </div>
//         </div>

//         <div className="tableWrapperTransaction">
//           <div className="table-containerTransaction">
//             <table {...getTableProps()} className="campaign-table">
//               <thead>
//                 {headerGroups.map((headerGroup) => (
//                   <tr
//                     {...headerGroup.getHeaderGroupProps()}
//                     className="table-header"
//                   >
//                     {headerGroup.headers.map((column) => (
//                       <th
//                         {...column.getHeaderProps()}
//                         className="table-header-cell"
//                       >
//                         {column.render("Header")}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody {...getTableBodyProps()}>
//                 {rows.map((row) => {
//                   prepareRow(row);
//                   return (
//                     <tr
//                       {...row.getRowProps()}
//                       onClick={() =>
//                         handleRowClick(row.original)[setModal(true)]
//                       }
//                       className="table-row"
//                     >
//                       {row.cells.map((cell) => (
//                         <td {...cell.getCellProps()} className="table-cellNow">
//                           {cell.render("Cell")}
//                         </td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>

//           <div className="tableFooterPagination">
//             <div>hello</div>
//             <div>hello</div>
//             <div>
//               10 per pages <BsArrowDown />
//             </div>
//           </div>

//           {/* {selectedPerson && <Donordetails setModal={setModal} person={selectedPerson} />}  */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Campaign;

import React, { useState, useMemo } from "react";  
import "./css/campaign.css";  
import { BiFilter, BiSearch } from "react-icons/bi";  
import { useNavigate } from "react-router-dom";  
import { useTable } from "react-table";  
import { BsArrowDown } from "react-icons/bs";  
import TableIcon from "../components/Table/TableIcon";  

const Campaign = () => {  
  const Nav = useNavigate();  
  const [filterToggle, setFilterToggle] = useState(false);  
  const [searchTerm, setSearchTerm] = useState("");  
  const [filterStatus, setFilterStatus] = useState("all");  
  const [modal, setModal] = useState(false);  
  const [selectedRow, setSelectedRow] = useState(null);  

  const persons = [  
    {  
      name: "Alice",  
      raised: 25,  
      created: "22/03/2024",  
      status: "Active",  
      supporters: "5",  
      campaign: "Save the tree",  
      contribution: "1,000",  
      ev: 2900092637464  
    },  
    {  
      name: "John",  
      raised: 40,  
      created: "22/03/2024",  
      status: "Inactive",  
      supporters: "8",  
      campaign: "Support wildlife",  
      contribution: "2,000",  
      ev: 2900092637465  
    },  
    {  
      name: "Ben",  
      raised: 30,  
      created: "22/03/2024",  
      status: "Active",  
      supporters: "15",  
      campaign: "Save Ben",  
      contribution: "1,500",  
      ev: 2900092637466  
    },  
    // Add additional person objects...  
  ];  

  // Filtered data based on search term and status  
  const filteredData = useMemo(() => {  
    return persons.filter(person => {  
      const matchesSearch = person.campaign.toLowerCase().includes(searchTerm.toLowerCase());  
      const matchesStatus = filterStatus === "all" || person.status.toLowerCase() === filterStatus;  

      return matchesSearch && matchesStatus;  
    });  
  }, [searchTerm, filterStatus]);  

  const columns = useMemo(() => [  
    { Header: "Campaign", accessor: "campaign" },  
    { Header: "Created", accessor: "created" },  
    { Header: "Raised", accessor: "raised" },  
    { Header: "Supporters", accessor: "supporters" },  
    { Header: "Status", accessor: "status" },  
    {  
      Header: "Actions",  
      accessor: "actions",  
      Cell: ({ row }) => <TableIcon row={row} onAction={handleAction} />,  
    },  
  ], []);  

  const handleRowClick = (rowData) => {  
    Nav(`/fundraising-page/${rowData.ev}`);  
    setSelectedRow(rowData);  
    setModal(true);  
  };  

  const handleAction = (action, rowData) => {  
    if (action === 'Edit') {  
      console.log("Edit action for:", rowData);  
    } else if (action === 'View') {  
      console.log("View action for:", rowData);  
    }  
  };  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: filteredData });  

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
              <div  
                className="filterIcon"  
                onClick={() => setFilterToggle(!filterToggle)}  
              >  
                <BiFilter size={17} />  
              </div>  
              {filterToggle && (  
                <div className="filterBox">  
                  <div  
                    onClick={() => {  
                      setFilterStatus("all");  
                      setFilterToggle(false);  
                    }}  
                  >  
                    All  
                  </div>  
                  <div  
                    onClick={() => {  
                      setFilterStatus("active");  
                      setFilterToggle(false);  
                    }}  
                  >  
                    Active  
                  </div>  
                  <div  
                    onClick={() => {  
                      setFilterStatus("inactive");  
                      setFilterToggle(false);  
                    }}  
                  >  
                    Inactive  
                  </div>  
                </div>  
              )}  
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

        <div className="tableWrapperTransaction">  
          <div className="table-containerTransaction">  
            <table {...getTableProps()} className="campaign-table">  
              <thead>  
                {headerGroups.map((headerGroup) => (  
                  <tr {...headerGroup.getHeaderGroupProps()} className="table-header">  
                    {headerGroup.headers.map((column) => (  
                      <th {...column.getHeaderProps()} className="table-header-cell">  
                        {column.render("Header")}  
                      </th>  
                    ))}  
                  </tr>  
                ))}  
              </thead>  
              <tbody {...getTableBodyProps()}>  
                {rows.map((row) => {  
                  prepareRow(row);  
                  return (  
                    <tr  
                      {...row.getRowProps()}  
                      onClick={() => handleRowClick(row.original)}  
                      className="table-row"  
                    >  
                      {row.cells.map((cell) => (  
                        <td {...cell.getCellProps()} className="table-cellNow">  
                          {cell.render("Cell")}  
                        </td>  
                      ))}  
                    </tr>  
                  );  
                })}  
              </tbody>  
            </table>  
          </div>  

          <div className="tableFooterPagination">  
            <div>hello</div>  
            <div>hello</div>  
            <div>  
              10 per page <BsArrowDown />  
            </div>  
          </div>  

          {/* Modal component can be placed here */}  
          {/* Example: {modal && <YourModalComponent data={selectedRow} onClose={() => setModal(false)} />} */}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Campaign;