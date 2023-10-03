import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function AddJobs() {
  const [formData, setFormData] = useState({
    title: '', // Rename jobName to title
    description: '', // Rename jobDescription to description
    job_requirements: '', // Rename jobRequirements to job_requirements
    type: '', // Rename jobType to type
    salary_range: '', // Add an initial value (empty string)
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });

  };
  console.log('formData:', formData);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/api/v1/jobs', formData);
      
      console.log('Server Response:', response);


      if (response.status === 200) {
        // Handle success
        toast.success('Job added successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        // Handle other status codes or errors
        toast.error('Failed to add job. Please try again later.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error adding job:', error);
      toast.error('An error occurred while adding the job. Please try again later.');
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen p-4 mt-16">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Add Job</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="jobName" className="block text-gray-600 mb-2">
              Job Title
            </label>
            <input
              type="text"
              id="jobName"
              name="title"
              value={formData.title}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              value={formData.job_requirements}
              onChange={handleChange}
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
              value={formData.type}
              onChange={handleChange}
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
              value={formData.salary_range}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter job salary"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddJobs;
