import React, { useState, useEffect } from 'react';
import UserTable from './userTable'; // Make sure the import path is correct

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from your database here
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    try {
      // Replace 'your_api_endpoint_for_users' with your actual API endpoint
      const response = await fetch('http://localhost:9000/api/v1/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      setUsers(userData); // Update the state with fetched user data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h6 className="text-3xl font-bold mb-4 mt-5">View Users</h6>
      <UserTable data={users} />
    </div>
  );
};

export default ViewUsers;
