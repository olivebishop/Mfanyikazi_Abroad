import React from "react";

const DashboardHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/profile-image.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-lg font-semibold">Username</h1>
        </div>

        {/* Search, Message, and Notification Icons */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 19l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6M5 11h14m-7 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
