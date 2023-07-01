import React, { useEffect } from "react";
import {
  BiLogOutCircle,
  BiMessageSquare,
  BiBell,
  BiSearch,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const DashboardHeader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // logout logic
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header className="bg-slate-500 text-white p-4 fixed top-0 left-0 w-full z-50">

      <div className="flex flex-wrap items-center justify-between">
        {/* Profile */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          <h1 className="text-lg font-semibold">Hello Admin!</h1>
        </div>

        {/* Search, Message, Notification, and Logout Icons */}
        <div className="flex items-center space-x-4">
          <BiSearch className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-gray-800 bg-white rounded-md focus:outline-none"
          />
          <BiMessageSquare className="h-6 w-6" />
          <BiBell className="h-6 w-6" />
          <BiLogOutCircle
            className="h-6 w-6 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
