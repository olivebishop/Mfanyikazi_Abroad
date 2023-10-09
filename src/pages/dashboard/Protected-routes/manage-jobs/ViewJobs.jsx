import React, { useState, useEffect } from 'react';
import JobTable from './JobTable'; // Make sure the import path is correct
import { toast } from 'react-toastify';

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    // Fetch user data from your database here
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    try {
      // Replace 'your_api_endpoint_for_users' with your actual API endpoint
      const response = await fetch('http://localhost:9000/api/v1/jobs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jobsData = await response.json();
      setJobs(jobsData); // Update the state with fetched user data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleEditClick = (job) => {
    // Set the job to be edited
    setEditingJob(job);
  };

  const handleDeleteClick = async (jobId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/v1/jobs/${jobId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted job from the state
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      // Display a success toast
      toast.success('Job deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('An error occurred while deleting the job. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h6 className="text-3xl font-bold mb-4 mt-5">View Jobs</h6>
      <JobTable
      data={jobs}
        onEditClick={handleEditClick} 
        onDeleteClick={handleDeleteClick} 
      />
    </div>
  );
};

export default ViewJobs;
