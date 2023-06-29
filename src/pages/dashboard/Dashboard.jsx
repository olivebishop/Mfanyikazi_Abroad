import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardFooter from "../../components/DashboardFooter";
import Sidebar from "../../components/Sidebar";
import Content from "./Content";
import DashNavbar from "./DashNavbar"

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">
          <DashNavbar />
          <Content />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
