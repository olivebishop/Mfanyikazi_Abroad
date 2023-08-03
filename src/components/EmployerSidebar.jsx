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
                    href="#"
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 no-underline"
                  >
                  View Employee
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
