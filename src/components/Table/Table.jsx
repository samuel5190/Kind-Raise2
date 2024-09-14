// import React from "react";
// import "./table.css"; // Import the CSS file
// import { useTable } from "react-table";

// const CampaignTable = () => {
//   const persons = [
//     { name: "Alice", age: 25, gender: "Female" },
//     { name: "Bob", age: 30, gender: "Male" },
//     { name: "Charlie", age: 22, gender: "Male" },
//   ];

//   const data = React.useMemo(
//     () => [
//       {
//         campaign: "hello",
//         created: "hello",
//         raised: "hello",
//         supporters: "hello",
//         status: "hello",
//       },
//       {
//         campaign: "hello",
//         created: "hello",
//         raised: "hello",
//         supporters: "hello",
//         status: "hello",
//       },
//     ],
//     []
//   );

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
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: persons });

//   return (
//     <div className="table-container">
//       <table {...getTableProps()} className="campaign-table">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()} className="table-header">
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()} className="table-header-cell">
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//            {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()} className="table-row">
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()} className="table-cell">
//                     {cell.render('Cell')}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CampaignTable;

import React from 'react';
import { useTable, usePagination } from 'react-table';
import "./table.css"

const CampaignsTable = () => {
  const data = React.useMemo(
    () => [
      {
        campaign: "Rest of Hope",
        created: "10/29/2024",
        related: "NO",
        supporters: 0,
        status: "Active",
      },
      {
        campaign: "Rest of Hope",
        created: "10/29/2024",
        related: "NO",
        supporters: 0,
        status: "Active",
      },
      // Add more data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Campaign',
        accessor: 'campaign',
      },
      {
        Header: 'Created',
        accessor: 'created',
      },
      {
        Header: 'Related',
        accessor: 'related',
      },
      {
        Header: 'Supporters',
        accessor: 'supporters',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    page,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className='table-container'>
      <table className='campaign-table' {...getTableProps()} style={{ border: 'solid 1px lightgray', width: '100%'}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className='table-header' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className='table-header-cell'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className="table-row" {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageIndex.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CampaignsTable;
