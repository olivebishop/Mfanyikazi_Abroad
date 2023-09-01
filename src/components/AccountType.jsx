import React from 'react';
import { Link } from 'react-router-dom';

const AccountType = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center space-y-6">
       <div className="flex  items-center ">
          <h1 className="text-2xl font-bold text-slate-800 text-center pr-4 md:pr-8 lg:pr-12">Select account type</h1>
          <h4 className="text-base font-semibold ml-4">
            <Link to="/login" className="text-green-400 hover:text-green-600 no-underline pl-4 md:pl-8 lg:pl-12"><span className='text-slate-800'>or</span> Login</Link>
          </h4>
        </div>
      <Link
        to= "/agency-signup"
        className="group border-gray-300 hover:border-green-600 relative flex cursor-pointer rounded-lg border bg-white hover:bg-green-600/20 p-6 shadow-sm focus:outline-none no-underline w-3/4 md:w-1/2 lg:w-1/3"
      >
        <span className="flex flex-1">
          <span className="flex flex-col">
            <span className="block font-medium text-lg text-gray-700">
              Agency
            </span>
            <span className="mt-1 flex items-center text-sm text-gray-600">
              For Kenyan agencies
            </span>
          </span>
        </span>
        <svg
          className="hidden group-hover:inline h-5 w-5 text-green-400 absolute top-1/2 right-2 transform -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="group-hover:border-green-400 border-transparent pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
      </Link>
      <Link
        to= "/employer-signup"
        className="group border-gray-300 hover:border-green-600 relative flex cursor-pointer rounded-lg border bg-white hover:bg-green-600/20 p-6 shadow-sm focus:outline-none no-underline w-3/4 md:w-1/2 lg:w-1/3"
      >
        <span className="flex flex-1">
          <span className="flex flex-col">
            <span className="block font-medium text-lg text-gray-700">
              Employer
            </span>
            <span className="mt-1 flex items-center text-sm text-gray-600">
              For Foreign employer
            </span>
          </span>
        </span>
        <svg
          className="hidden group-hover:inline h-5 w-5 text-green-400 absolute top-1/2 right-2 transform -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="group-hover:border-green-400 border-transparent pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
      </Link>
      <Link
        to= "/employee-signup"
        className="group border-gray-300 hover:border-green-600 relative flex cursor-pointer rounded-lg border bg-white hover:bg-green-600/20 p-6 shadow-sm focus:outline-none no-underline w-3/4 md:w-1/2 lg:w-1/3"
      >
        <span className="flex flex-1">
          <span className="flex flex-col">
            <span className="block font-medium text-lg text-gray-700">
              JobSeeker
            </span>
            <span className="mt-1 flex items-center text-sm text-gray-600 ">
              For Kenyan JobSeekers
            </span>
          </span>
        </span>
        <svg
          className="hidden group-hover:inline h-5 w-5 text-green-400 absolute top-1/2 right-2 transform -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="group-hover:border-green-400 border-transparent pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true"></span>
      </Link>

      {/* Repeat similar code for other account types */}
    </div>
  );
};

export default AccountType;
