import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import AgencySidebar from "../../components/AgencySidebar";
import Content from "./Content";
import DashboardFooter from "../../components/DashboardFooter"; // Import the DashboardFooter component

const Dashboard = ({ loggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 flex">
        <AgencySidebar />
        <div className="flex-1">
          <Content />
          <DashboardFooter />
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
