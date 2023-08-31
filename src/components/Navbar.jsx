import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h5 className="text-white">
              <span className="text-green-500">Mfanyikazi</span>Abroad
            </h5>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-green-500 navlink">Home</Link>
              <Link to="/about" className="text-white hover:text-green-500 navlink">About</Link>
              <Link to="/services" className="text-white hover:text-green-500 navlink">Services</Link>
              <Link to="/contact" className="text-white hover:text-green-500 navlink">Contact</Link>
              <Link to="/login" className="ml-4">
                <button className="py-2 px-4 rounded-full bg-slate-500 text-white hover:bg-green-500">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-white hover:text-green-500 navlink">Home</Link>
          <Link to="/about" className="block text-white hover:text-green-500 navlink">About</Link>
          <Link to="/services" className="block text-white hover:text-green-500 navlink">Services</Link>
          <Link to="/contact" className="block text-white hover:text-green-500 navlink">Contact</Link>
        </div>
        <div className="px-2 pt-2 pb-3">
          <Link to="/login">
            <button className="block w-full py-2 px-4 rounded-full bg-slate-500 text-white hover:bg-green-500">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
