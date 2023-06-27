import React from "react";

const Dashboard = () => {
  const user = "Admin"; // Replace with the actual username or user object

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="bg-gray-800 text-white w-1/5">
        {/* Top Nav */}
        <div className="flex items-center justify-between p-4">
          <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
            {/* Profile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 20a1 1 0 01-1-1V9a1 1 0 011-1h9a1 1 0 011 1v10a1 1 0 01-1 1h-9zm0 0V9h9v10h-9zm6-6a1 1 0 01-1-1V3a1 1 0 112 0v10a1 1 0 01-1 1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Profile Dropdown */}
          <div className="rounded-md bg-white text-gray-800 p-2 hidden">
            <ul className="text-sm">
              <li className="py-1 hover:bg-gray-700 cursor-pointer">
                <span>Profile</span>
                <ul className="pl-4">
                  <li className="py-1 hover:bg-gray-700 cursor-pointer">
                    Settings
                  </li>
                  <li className="py-1 hover:bg-gray-700 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col">
          {/* Search */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>

          {/* Main Navigation */}
          <ul className="text-sm">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <span>Dashboard</span>
              <ul className="pl-4">
                <li className="py-1 hover:bg-gray-700 cursor-pointer">Admin</li>
                <li className="py-1 hover:bg-gray-700 cursor-pointer">
                  Countries
                </li>
                <li className="py-1 hover:bg-gray-700 cursor-pointer">Users</li>
                <li className="py-1 hover:bg-gray-700 cursor-pointer">Roles</li>
              </ul>
            </li>
          </ul>

          {/* Messages */}
          <div className="p-4 mt-auto">Messages</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Widget 1 */}
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Widget 1</h2>
            {/* Widget Content */}
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Widget 2</h2>
            {/* Widget Content */}
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Widget 3</h2>
            {/* Widget Content */}
          </div>

          {/* Widget 4 */}
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Widget 4</h2>
            {/* Widget Content */}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-4 shadow mb-8">
          <h2 className="text-xl font-bold mb-4">Table</h2>
          {/* Table Content */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 w-full">
        <p>mfanyikazi Abroad 2023</p>
      </footer>
    </div>
  );
};

export default Dashboard;
