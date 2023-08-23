import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-black fixed w-full z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <h1 className="text-white text-lg">
          <span className="text-green-500 h-2">Mfanyikazi</span>Abroad
        </h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded-full text-white hover:text-white transition-all duration-200"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg lg:flex-grow flex justify-center lg:justify-start">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white transition-all duration-600 mr-4 relative font-medium text-lg"
            style={{ textDecoration: "none" }}
          >
            <span className="hover:text-green-500">Home</span>
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white transition-all duration-200 mr-4 relative font-medium text-lg"
            style={{ textDecoration: "none" }}
          >
            <span className="hover:text-green-500">About</span>
          </Link>
          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-white transition-all duration-200 mr-4 relative font-medium text-lg"
            style={{ textDecoration: "none" }}
          >
            <span className="hover:text-green-500">Services</span>
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white transition-all duration-200 relative font-medium text-lg"
            style={{ textDecoration: "none" }}
          >
            <span className="hover:text-green-500">Contact</span>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/login">
            <button className="inline-flex items-center bg-slate-500 rounded-full border-0 py-2 px-4 text-white hover:bg-green-500 transition-all duration-200 text-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;