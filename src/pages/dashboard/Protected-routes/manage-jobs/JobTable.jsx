import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaEdit, FaTrash, FaInfoCircle, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobTable = ({ onEditClick, onDeleteClick }) => {
  const [jobs, setJobs] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [editedJob, setEditedJob] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
              onClick={() => handleEdit(row.original)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(row.original.id)}
              className="bg-red-500 hover.bg-red-700 text-white font-bold py-1 px-2 rounded-full"
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
    setIsApplying(true);
    setVerificationMessage(`Applying for job with ID ${jobId}`);

    // Simulate an apply process (you can replace this with your actual logic)
    setTimeout(() => {
      setIsApplying(false);
      setVerificationMessage(`Applied for job with ID ${jobId}`);
    }, 2000);
  };

  const handleEdit = (job) => {
    setEditedJob(job);
    setIsEditModalOpen(true);
  };

  const handleDelete = (jobId) => {
    onDeleteClick(jobId);
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const closeEditModal = () => {
    setEditedJob(null);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJob({
      ...editedJob,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Send a PATCH request to update the job data
      const response = await axios.patch(
        `http://localhost:9000/api/v1/jobs/${editedJob.id}`,
        editedJob
      );
  
      if (response.status === 200) {
        // Update the job data in the local state (assuming your API returns the updated job)
        const updatedJobs = jobs.map((job) =>
          job.id === editedJob.id ? response.data : job
        );
        setJobs(updatedJobs);
    closeEditModal();
     // Show a success toast
     toast.success('Job updated successfully!', {
      position: 'top-right',
      autoClose: 3000, // Auto close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } else {
    // Handle the case when the update request fails
    toast.error('Failed to update job. Please try again later.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
} catch (error) {
  // Handle any errors that occur during the API request
  console.error('Error updating job:', error);
  toast.error('An error occurred while updating the job. Please try again later.', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

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
              <p><span className="font-bold">Title:</span> {selectedJob.title}</p>
              <p><span className="font-bold">Type:</span> {selectedJob.type}</p>
              <p><span className="font-bold">Description:</span> {selectedJob.description}</p>
              <p><span className="font-bold">Job Requirements:</span> {selectedJob.job_requirements}</p>

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
                  onClick={() => setSelectedJob(null)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full m-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h3 className="text-1xl font-bold mb-4">Edit Job</h3>
              <form onSubmit={handleUpdate} className="mb-4">
                <div className="mb-4">
                  <label htmlFor="jobName" className="block text-gray-600 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobName"
                    name="title"
                    value={editedJob.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Enter job title"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="jobDescription" className="block text-gray-600 mb-2">
                    Job Description
                  </label>
                  <input
                    type="text"
                    id="jobDescription"
                    name="description"
                    value={editedJob.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Enter job description"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="jobRequirements" className="block text-gray-600 mb-2">
                    Job Requirements
                  </label>
                  <input
                    type="text"
                    id="jobRequirements"
                    name="job_requirements"
                    value={editedJob.job_requirements}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Enter job requirements"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="jobType" className="block text-gray-600 mb-2">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    name="type"
                    value={editedJob.type}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select Job type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="jobSalary" className="block text-gray-600 mb-2">
                    Job Salary
                  </label>
                  <input
                    type="text"
                    id="jobSalary"
                    name="salary_range"
                    value={editedJob.salary_range}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Enter job salary"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full m-1"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobTable;
