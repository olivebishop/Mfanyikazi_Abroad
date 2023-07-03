import React from 'react';

const ForgetPass = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black text-white shadow-md rounded-lg p-8 md:max-w-screen-md w-full">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
            >
              Submit
            </button>
            <a
               href="/signup"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
