import React, { useState } from "react";

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
      <div className="p-4  flex items-center justify-between mt-16">
        {/* Sidebar Logo */}
        <span className="text-slate-500 text-lg ">Mfanyikazi-Abroad</span>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {/* Sidebar Navigation Links */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
              onClick={toggleUsersMenu}
            >
             Manage Users
            </a>
            {/* Users Sub-Menu */}
            {showUsersMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="/create-users"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add User
                  </a>
                </li>
                <li>
                  <a
                    href="/view-users"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                  View Users
                  </a>
                </li>
                
              </ul>
            )}
          </li>
          {/* Roles */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
              onClick={toggleRolesMenu}
            >
             Manage Roles
            </a>
            {/* Roles Sub-Menu */}
            {showRolesMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Role
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    View Role
                  </a>
                </li>
                
              </ul>
            )}
          </li>
          {/* Jobs */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
              onClick={toggleJobsMenu}
            >
             Manage  Jobs
            </a>
            {/* Jobs Sub-Menu */}
            {showJobsMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    View Jobs
                  </a>
                </li>
                
              </ul>
            )}
          </li>
          {/* Courses */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
              onClick={toggleCoursesMenu}
            >
              Manage Courses
            </a>
            {/* Courses Sub-Menu */}
            {showCoursesMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    View Courses
                  </a>
                </li>
                
              </ul>
            )}
          </li>
          {/* Countries */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
              onClick={toggleCountriesMenu}
            >
             Manage Countries
            </a>
            {/* Countries Sub-Menu */}
            {showCountriesMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Country
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    View Country
                  </a>
                </li>
                
              </ul>
            )}
          </li>
          {/* Reports */}
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
            >
              Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
            >
              Upgrade
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
