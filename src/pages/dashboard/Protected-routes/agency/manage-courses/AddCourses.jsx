import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCourses() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic here...

    // Show a success toast
    toast.success('Course added successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 mt-16">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Add Courses</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-gray-600 mb-2">Course Name</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter course name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="courseType" className="block text-gray-600 mb-2">Course Type</label>
            <select
              id="courseType"
              name="courseType"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
            >
              <option value="">Select course type</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="courseDuration" className="block text-gray-600 mb-2">Course Duration</label>
            <input
              type="text"
              id="courseDuration"
              name="courseDuration"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter course duration"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="coursePrice" className="block text-gray-600 mb-2">Course Price</label>
            <input
              type="text"
              id="coursePrice"
              name="coursePrice"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter course price"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>

      {/* Initialize the ToastContainer */}
      <ToastContainer />
    </div>
  );
}

export default AddCourses;
