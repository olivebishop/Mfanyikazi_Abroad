import React, { useState } from "react";
import {
  FaUsers,
  FaGlobe,
  FaExchangeAlt,
  FaBriefcase,
  FaFile,
  FaWrench,
} from "react-icons/fa";
import '../../../../components/css/Sidebar.css';


const Sidebar = ({ onSelectComponent }) => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showUsersMenu, setShowUsersMenu] = useState(false);
  const [showCountriesMenu, setShowCountriesMenu] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [showJobsMenu, setShowJobsMenu] = useState(false);
  const [showReportsMenu, setShowReportsMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showPaymentStep, setShowPaymentStep] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false); 
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleDashboard = () => {
    setShowDashboard(true);
    setShowUsersMenu(false);
    setShowCountriesMenu(false);
    setShowCoursesMenu(false);
    setShowJobsMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu(false);
    onSelectComponent("content");
  };

  const toggleUsersMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu((prevShowUsersMenu) => !prevShowUsersMenu);
    setShowCountriesMenu(false);
    setShowCoursesMenu(false);
    setShowJobsMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu(false);
  };

  const toggleCountriesMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu(false);
    setShowCoursesMenu(false);
    setShowJobsMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu(false);
    setShowCountriesMenu((prevShowCountriesMenu) => !prevShowCountriesMenu);
  };

  const toggleCoursesMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu(false);
    setShowCountriesMenu(false);
    setShowJobsMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu(false);
    setShowCoursesMenu((prevShowCoursesMenu) => !prevShowCoursesMenu);
  };

  const toggleJobsMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu(false);
    setShowCountriesMenu(false);
    setShowCoursesMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu(false);
    setShowJobsMenu((prevShowJobsMenu) => !prevShowJobsMenu);
  };

  const toggleReportsMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu(false);
    setShowCountriesMenu(false);
    setShowCoursesMenu(false);
    setShowJobsMenu(false);
    setShowSettingsMenu(false);
    setShowReportsMenu((prevShowReportsMenu) => !prevShowReportsMenu);
  };

  const toggleSettingsMenu = () => {
    setShowDashboard(false);
    setShowUsersMenu(false);
    setShowCountriesMenu(false);
    setShowCoursesMenu(false);
    setShowJobsMenu(false);
    setShowReportsMenu(false);
    setShowSettingsMenu((prevShowSettingsMenu) => !prevShowSettingsMenu);
  };
  const handlePaymentSuccess = () => {
    setPaymentCompleted(true); // Update payment status to true on success
    setShowPaymentStep(false); // Close the payment step
  };

  return (
    <aside className="bg-black text-white w-1/6 sm:w-64 fixed top-0 h-screen overflow-y-auto">


        <div className="p-4 flex items-center justify-between sm:mt-16">
        <span className="text-slate-500 text-lg mb-2">Mfanyikazi-Abroad</span>
      </div>
      <nav className="p-4 ">
        <ul className="space-y-2">
          <li>
            <button
              className={`text-white hover:text-green-500 block rounded-md p-2 mb-2 ${
                showDashboard ? "bg-green-500 text-black" : ""
              }`}
              onClick={toggleDashboard}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className={`text-white hover:bg-green-500 hover:text-white block rounded-md p-2 ${
                showJobsMenu ? "bg-green-500 text-black" : ""
              }`}
              onClick={toggleJobsMenu}
            >
              <FaBriefcase className="mr-2" />Manage Jobs
            </button>
            {showJobsMenu && (
              <ul className="ml-4">
                <li>
                  <button
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 mt-2"
                    onClick={() => onSelectComponent("viewJob")}
                  >
                    View Jobs
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className={`text-white hover:bg-green-500 hover:text-white block rounded-md p-2 ${
                showReportsMenu ? "bg-green-500 text-black" : ""
              }`}
              onClick={toggleReportsMenu}
            >
              <FaFile className="mr-2" />Manage Reports
            </button>
            {showReportsMenu && (
              <ul className="ml-4">
                <li>
                  <button
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 mt-2"
                    onClick={() => onSelectComponent("viewReports")}
                  >
                    View Reports
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className={`text-white hover:bg-green-500 hover:text-white block rounded-md p-2 ${
                showSettingsMenu ? "bg-green-500 text-black" : ""
              }`}
              onClick={toggleSettingsMenu}
            >
              <FaWrench className="mr-2" />Settings
            </button>
            {showSettingsMenu && (
              <ul className="ml-4">
                <li>
                  <button
                    className="text-white hover:bg-green-500 hover:text-white block rounded-md p-2 mt-2"
                    onClick={() => onSelectComponent("checkLogs")}
                  >
                    View Settings
                  </button>
                </li>
                
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <button
        className="bg-black text-white sm:hidden md:hidden p-2 absolute top-0 right-0 m-4"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? <FaWrench /> : <FaGlobe />}
      </button>
    </aside>
  );
};

export default Sidebar;
