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
              Users
            </a>
            {/* Users Sub-Menu */}
            {showUsersMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add User
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Delete User
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Update User
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
              Roles
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
                    Delete Role
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Update Role
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
              Jobs
            </a>
            {/* Jobs Sub-Menu */}
            {showJobsMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Delete Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Update Job
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
              Courses
            </a>
            {/* Courses Sub-Menu */}
            {showCoursesMenu && (
              <ul className="ml-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Add Course
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Delete Course
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Update Course
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
              Countries
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
                    Delete Country
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                    Update Country
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
              Help & Support
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
