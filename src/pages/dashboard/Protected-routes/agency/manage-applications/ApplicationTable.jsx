// ApplicantTable.js
import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import axios from 'axios';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import TableSearch from './TableSearch';
import '../../../../../pages/content.css'
import { Document, Page, pdfjs } from 'react-pdf'

const ApplicantTable = () => {
  const [applicants, setApplicants] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  //setting up pdf
  const [showPdfReport, setShowPdfReport] = useState(false);
  const generatePdfReport = () => {
    const pdfData = (
      <Document>
        <Page>
          {/* Add the content of your PDF report here */}
          <h1>Applicant Report</h1>
          {applicants.map((applicant) => (
            <div key={applicant.id}>
              <p>Name: {applicant.name}</p>
              <p>Email: {applicant.email}</p>
              <p>Phone: {applicant.phone}</p>
            </div>
          ))}
        </Page>
      </Document>
    );
  
    // Open the PDF report in a new window/tab
    setShowPdfReport(pdfData);
  };
  


  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/v1/applications');
      if (!response.data || response.data.length === 0) {
        console.log('No data received from the API.');
      } else {
        setApplicants(response.data);
        setFilteredApplicants(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Applicant Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => {
          return (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handleVerify(row.original)}
                className="bg-slate-900 hover:bg-gray-600 text-white px-2 py-1 rounded"
              >
                Verify
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const handleVerify = async (applicant) => {
    try {
      const response = await axios.post('http://localhost:9000/api/v1/sendHiredEmail', {
        user: applicant,
      });
  
      if (response.status === 200) {
        setVerificationMessage(response.data); // Assuming your backend sends a success message.
      } else {
        setVerificationMessage('Email sending failed'); // Handle error response from your backend.
      }
    } catch (error) {
      console.error('Error verifying applicant:', error);
      setVerificationMessage('Email sending failed'); // Handle network error.
    }
  };
  

  const data = React.useMemo(() => filteredApplicants, [filteredApplicants]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const handleSearch = (query) => {
    const filteredData = applicants.filter((applicant) => {
      return applicant.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredApplicants(filteredData);
  };

  return (
    <div className="applicant-table-container">
      <TableSearch data={applicants} onSearch={handleSearch} />
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-slate-900 text-white">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 text-center font-semibold cursor-pointer"
                >
                  {column.render('Header')}
                  <span className="ml-1">
                    {column.isSorted ? (column.isSortedDesc ? <FaCaretDown /> : <FaCaretUp />) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-200'}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 text-center"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination mt-4 flex items-center justify-center">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`px-4 py-2 rounded-md ${
            canPreviousPage
              ? 'bg-slate-900 hover-bg-slate-600'
              : 'bg-gray-700 cursor-not-allowed'
          } text-white`}
        >
          Previous
        </button>
        <span className="mx-4">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`px-4 py-2 rounded-md ${
            canNextPage
              ? 'bg-slate-900 hover-bg-slate-600'
              : 'bg-gray-700 cursor-not-allowed'
          } text-white`}
        >
          Next
        </button>
      </div>
      <div className="verification-message mt-4">
        <p>{verificationMessage}</p>
      </div>
    </div>
  );
};

export default ApplicantTable;
