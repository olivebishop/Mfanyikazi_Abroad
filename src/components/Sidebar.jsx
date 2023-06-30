import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64">
      <div className="p-4">
        {/* Sidebar Logo */}
        <h1 className="text-xl font-bold">Mfanyikazi Abroad</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {/* Sidebar Navigation Links */}
          <li>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-300 hover:text-gray-900 block rounded-md p-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-300 hover:text-gray-900 block rounded-md p-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-300 hover:text-gray-900 block rounded-md p-2"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-300 hover:text-gray-900 block rounded-md p-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
