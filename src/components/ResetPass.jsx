import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reset from "../assets/reset.svg";
import axios from "axios";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(""); // You need to receive a reset token from the backend

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the password and reset token to the server
      const response = await axios.post("http://localhost:9000/api/v1/resetPassword", {
        password,
        token,
      });

      if (response.status === 200) {
        // Password reset successful
        toast.success("Password changed successfully!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // Password reset failed
        toast.error("Failed to reset the password.");
      }
    } catch (error) {
      // Handle any errors from the server
      toast.error("Failed to reset the password.");
    }
  };

  return (
    <div className="container mx-auto mt-16 md:mt-10 lg:mt-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="bg-white text-black shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Reset Password
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm semi-bold mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-black"
                  placeholder="Enter your new password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-slate-500 transition-colors duration-300"
                >
                  Set Password
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
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-3 order-1 md:order-2">
          <img
            src={reset}
            alt="reset-image"
            className="w-full rounded-lg md:block hidden"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPass;
