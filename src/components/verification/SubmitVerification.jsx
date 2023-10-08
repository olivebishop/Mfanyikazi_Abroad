import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import axios from 'axios';

const SubmitVerification = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: '',
    phoneNumber: '',
    idNumber: '',
  });

  const [nationalIdFile, setNationalIdFile] = useState(null);
  const [kraCertFile, setKraCertFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'nationalId') {
      setNationalIdFile(file);
    } else if (type === 'kraCert') {
      setKraCertFile(file);
    }
  };

  const handleSubmit = async () => {
    // Implement server-side validation here
    if (!validateFormData()) {
      return;
    }

    const formData = new FormData();
    formData.append('fullName', userData.fullName);
    formData.append('phoneNumber', userData.phoneNumber);
    formData.append('idNumber', userData.idNumber);

    if (nationalIdFile) {
      formData.append('nationalId', nationalIdFile);
    }

    if (kraCertFile) {
      formData.append('kraCert', kraCertFile);
    }

    try {
      // Send the FormData to the backend
      await axios.post('http://localhost:9000/api/v1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display a success message and navigate to the admin dashboard
      toast.success('Documents and user data submitted to admin.');
      navigate('/pending-verification'); // Navigate to the admin dashboard
    } catch (error) {
      console.error(error);
      toast.error('Error submitting documents. Please try again.');
    }
  };

  const validateFormData = () => {
    // Validate your data here
    if (!userData.fullName || !userData.phoneNumber || !userData.idNumber) {
      toast.error('All fields are required.');
      return false;
    }

    // Validate phone number format using regular expression
    const phoneRegex = /^\+254\s\d{9}$/;
    if (!phoneRegex.test(userData.phoneNumber)) {
      toast.error('Invalid Phone Number format. It should be like +254 790099220.');
      return false;
    }

    // Validate ID Number format (8 digits)
    if (!validator.isNumeric(userData.idNumber) || userData.idNumber.length !== 8) {
      toast.error('Invalid ID Number format. It should be 8 digits.');
      return false;
    }

    return true;
  };

  return (
    <div className="p-4 mt-14 sm:mx-auto sm:max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        Submit your details for approval
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 font-semibold">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="+254 790099220"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="idNumber" className="block text-gray-700 font-semibold">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={userData.idNumber}
              onChange={handleInputChange}
              required
              placeholder="12345678"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">File Upload:</label>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="nationalId" className="block text-blue-500 font-semibold hover:text-blue-600 cursor-pointer">
                National ID
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 inline-block ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input
                type="file"
                id="nationalId"
                accept="image/jpeg, image/png, application/pdf"
                onChange={(e) => handleFileChange(e, 'nationalId')}
                className="hidden"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="kraCert" className="block text-blue-500 font-semibold hover:text-blue-600 cursor-pointer">
                KRA Certificate
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 inline-block ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </label>
              <input
                type="file"
                id="kraCert"
                accept="image/jpeg, image/png, application/pdf"
                onChange={(e) => handleFileChange(e, 'kraCert')}
                className="hidden"
              />
            </div>
          </div>
        </div>
        <button
          className="mt-4 bg-gray-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubmitVerification;
