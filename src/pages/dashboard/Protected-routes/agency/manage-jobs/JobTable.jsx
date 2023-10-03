import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaEdit, FaTrash, FaInfoCircle, FaCheck } from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';

const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    // Fetch jobs from your API endpoint
    axios.get('http://localhost:9000/api/v1/jobs').then((response) => {
      setJobs(response.data);
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Job ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Salary Range',
        accessor: 'salary_range',
       
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleEdit(row.original.id)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(row.original.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full"
            >
              <FaTrash />
            </button>
            <button
              onClick={() => handleViewDetails(row.original)}
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full"
            >
              <FaInfoCircle />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => jobs, [jobs]);

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

  const handleApply = (jobId) => {
    setIsApplying(true); // Set isApplying to true when the user clicks "Apply"
    setVerificationMessage(`Applying for job with ID ${jobId}`);

    // Simulate an apply process (you can replace this with your actual logic)
    setTimeout(() => {
      setIsApplying(false); // Set isApplying back to false after a delay (simulating an asynchronous process)
      setVerificationMessage(`Applied for job with ID ${jobId}`);
    }, 2000); // Simulate a 2-second apply process (adjust as needed)
  };

  const handleEdit = (jobId) => {
    // Implement your edit logic here
    setVerificationMessage(`Editing job with ID ${jobId}`);
  };

  const handleDelete = (jobId) => {
    // Implement your delete logic here
    setVerificationMessage(`Deleting job with ID ${jobId}`);
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const clearSelectedJob = () => {
    setSelectedJob(null);
  };

  return (
    <div className="overflow-x-auto">
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
                    {column.isSorted ? (column.isSortedDesc ? <FaCheck /> : <FaCheck />) : null}
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
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
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
          className={`px-3 py-1 rounded-full ${
            canPreviousPage
              ? 'bg-blue-500 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
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
          className={`px-3 py-1 rounded-full ${
            canNextPage
              ? 'bg-blue-500 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
      <div className="verification-message mt-4">
        <p>{verificationMessage}</p>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h3 className="text-1xl font-bold mb-4">Job Details</h3>
              <p><span class="font-bold">Title:</span> {selectedJob.title}</p>
              <p><span class="font-bold">Type:</span> {selectedJob.type}</p>
              <p><span class="font-bold">Description:</span> {selectedJob.description}</p>
              <p><span class="font-bold">Job Requirements:</span> {selectedJob.job_requirements}</p>

              {/* Apply Button (conditionally rendered) */}
              {!isApplying && (
                <button
                  onClick={() => handleApply(selectedJob.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
                >
                  Apply
                </button>
              )}

              {/* Close Button */}
              <div className="mt-6">
                <button
                  onClick={clearSelectedJob}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full m-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobTable;
