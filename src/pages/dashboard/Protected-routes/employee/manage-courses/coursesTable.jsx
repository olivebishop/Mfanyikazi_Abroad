// import React, { useState, useEffect } from 'react';
// import { useTable, usePagination } from 'react-table';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'; // Import icons as needed

// const CoursesTable = () => {
//   const [users, setUsers] = useState([]);
//   const [verificationMessage, setVerificationMessage] = useState('');
//   const [userRoles, setUserRoles] = useState({});

//   useEffect(() => {
//     // Fetch users from your API endpoint
//     axios.get('http://localhost:9000/api/v1/courses').then((response) => {
//       setUsers(response.data);
//     });
//   }, []);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Course Name',
//         accessor: 'courseName',
//       },
//       {
//         Header: 'Course Type',
//         accessor: 'courseType',
//       },
//       {
//         Header: 'Course Duration',
//         accessor: 'courseDuration',
//       },
//       {
//         Header: 'Course Price',
//         accessor: 'coursePrice',
//       },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => {
//           return (
//             <div className="flex items-center justify-center">
//               <button
//                 onClick={() => handleEdit(row.original)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mx-1"
//               >
//                 <FaEdit />
//               </button>
//               <button
//                 onClick={() => handleDelete(row.original)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mx-1"
//               >
//                 <FaTrash />
//               </button>
//               <button
//                 onClick={() => handleApply(row.original)}
//                 className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mx-1"
//               >
//                 <FaCheck />
//               </button>
//             </div>
//           );
//         },
//       },
//     ],
//     []
//   );

//   const handleEdit = (course) => {
//     // Handle edit action
//   };

//   const handleDelete = (course) => {
//     // Handle delete action
//   };

//   const handleApply = (course) => {
//     // Handle apply action
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     pageOptions,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns,
//       data: users,
//       initialState: { pageIndex: 0 },
//     },
//     usePagination
//   );

//   return (
//     <div className="overflow-x-auto">
//       <table {...getTableProps()} className="min-w-full">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="py-2 text-center font-semibold"
//                 >
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, rowIndex) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-400'}
//               >
//                 {row.cells.map((cell) => {
//                   return (
//                     <td
//                       {...cell.getCellProps()}
//                       className="py-2 text-center"
//                     >
//                       {cell.render('Cell')}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="pagination mt-4 flex items-center justify-center">
//         <button
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//           className={`px-4 py-2 rounded-md ${
//             canPreviousPage
//               ? 'bg-slate-900 hover:bg-slate-600'
//               : 'bg-gray-700 cursor-not-allowed'
//           } text-white`}
//         >
//           Previous
//         </button>
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>
//         </span>
//         <button
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//           className={`px-4 py-2 rounded-md ${
//             canNextPage
//               ? 'bg-slate-900 hover:bg-slate-600'
//               : 'bg-gray-700 cursor-not-allowed'
//           } text-white`}
//         >
//           Next
//         </button>
//       </div>
//       <div className="verification-message">
//         <p>{verificationMessage}</p>
//       </div>
//     </div>
//   );
// };

// export default CoursesTable;
