import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';

function Settings() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    phoneNumber: '',
  });

  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user data from your API here and populate the `userData` state
    // You can use the user's ID or any other identifier to fetch their data
    // Example:
    // fetchUserData(userId).then((data) => {
    //   setUserData(data);
    // });
  }, []);

  useEffect(() => {
    // When user data changes, update the form data
    setFormData({
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      country: userData.country || '',
      city: userData.city || '',
      phoneNumber: userData.phoneNumber || '',
    });
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform the API request to update user settings
    try {
      const response = await fetch('http://localhost:9000/api/v1/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data successfully saved
        toast.success('Settings saved successfully.');
      } else {
        // Handle error response
        const data = await response.json();
        toast.error(data.message || 'An error occurred while saving settings.');
      }
    } catch (error) {
      // Handle network or other errors
      toast.error('An error occurred while saving settings.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 mt-16">
      <div className="flex items-center justify-center mb-4">
        <FaUser className="text-4xl mr-2" />
        <h5 className="text-2xl font-semibold"></h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-4 md:mb-0">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="country" className="block text-sm font-medium">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 mb-4 md:mb-0">
            <label htmlFor="city" className="block text-sm font-medium">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
