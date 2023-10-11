import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Payment from '../../../../../components/Payment';

function AddJobs() {
  const initialFormData = {
    title: '',
    description: '',
    job_requirements: '',
    type: '',
    salary_range: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [paymentCompleted, setPaymentCompleted] = useState(
    localStorage.getItem('paymentCompleted') === 'true'
  );
  
  // Add state variables for error messages
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    job_requirements: '',
    type: '',
    salary_range: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear the associated error message when the user types
    setErrors({
      ...errors,
      [name]: '',
    });
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentSuccess = () => {
    // This function will be called when payment is successful
    setPaymentCompleted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!paymentCompleted) {
      toast.error('Payment is required before adding a job.');
      return;
    }

    // Check for empty input fields and display error messages
    const newErrors = {};
    let hasErrors = false;
    for (const fieldName of Object.keys(formData)) {
      if (!formData[fieldName]) {
        newErrors[fieldName] = `${fieldName.replace('_', ' ')} is required.`;
        hasErrors = true;
      }
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:9000/api/v1/jobs', formData);

      console.log('Server Response:', response);

      if (response.status === 201) {
        // Handle success
        const addedJobTitle = response.data.title;
        toast.success(`Job "${addedJobTitle}" added successfully!`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });

        // Reset the form after successful submission
        setFormData(initialFormData);
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
            {/* Display error message */}
            {errors.title && <div className="text-red-600">{errors.title}</div>}
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
            {/* Display error message */}
            {errors.description && <div className="text-red-600">{errors.description}</div>}
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
            {/* Display error message */}
            {errors.job_requirements && <div className="text-red-600">{errors.job_requirements}</div>}
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
            {/* Display error message */}
            {errors.type && <div className="text-red-600">{errors.type}</div>}
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
            {/* Display error message */}
            {errors.salary_range && <div className="text-red-600">{errors.salary_range}</div>}
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-full mb-2 mr-2 hover:bg-green-600 focus:outline-none"
            >
              Add Job
            </button>
            {/* Payment button */}
            <Payment onSuccess={handlePaymentSuccess} />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
export default AddJobs
