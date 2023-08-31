import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const [showRolesMenu, setShowRolesMenu] = useState(false);
  const [showJobsMenu, setShowJobsMenu] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [showCountriesMenu, setShowCountriesMenu] = useState(false);

  const toggleUsersMenu = () => {
    setShowUsersMenu(!showUsersMenu);
  };

  const toggleRolesMenu = () => {
    setShowRolesMenu(!showRolesMenu);
  };

  const toggleJobsMenu = () => {
    setShowJobsMenu(!showJobsMenu);
  };

  const toggleCoursesMenu = () => {
    setShowCoursesMenu(!showCoursesMenu);
  };

  const toggleCountriesMenu = () => {
    setShowCountriesMenu(!showCountriesMenu);
  };

  return (
    <aside className="bg-black text-white w-full sm:w-64">
      <div className="p-4 flex items-center justify-between mt-16">
        <span className="text-slate-500 text-lg">Mfanyikazi-Abroad</span>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <button
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2"
              onClick={toggleUsersMenu}
            >
              Manage Users
            </button>
            {showUsersMenu && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="/create-users"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/view-users"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    View Users
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* ... other menu items ... */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
