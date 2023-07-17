import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import forgot from "../assets/forgot.svg";

const ForgetPass = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here

    // Show a success toast
    toast.success("Password reset email sent!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mx-auto mt-16 md:mt-10 lg:mt-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="bg-white text-black shadow-md rounded-lg p-8 ">
            <h2 className="text-2xl font-bold mb-6 text-black">
              Forgot Password?
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold  mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-slate-500 transition-colors duration-300"
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
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-3 order-1 md:order-2">
          <img
            src={forgot}
            alt="Side Image"
            className="w-full rounded-lg md:block hidden"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPass;
