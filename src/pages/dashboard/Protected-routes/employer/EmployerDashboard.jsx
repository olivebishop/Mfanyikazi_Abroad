import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import Content from "./Content";
import DashboardFooter from "./DashboardFooter";
import AddJob from "./manage-jobs/AddJobs";
import ViewJob from "./manage-jobs/ViewJobs";
import CheckLogs from './manage-settings/CheckLogs'
import ViewReports from "./manage-reports/ViewReports";
import EmployerChart from "./EmployerChart";


const Dashboard = ({ loggedIn }) => {
  const [selectedComponent, setSelectedComponent] = useState("content");

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 flex">
        <Sidebar onSelectComponent={setSelectedComponent} />
        
        <div className="flex-1">
          {/* Conditional rendering for selected component */}
          {selectedComponent === "content" && <Content />} 
          {selectedComponent === "addJob" && <AddJob />}
          {selectedComponent === "viewJob" && <ViewJob />}
          {selectedComponent === "viewReports" && <ViewReports />}
          {selectedComponent === "checkLogs" && <CheckLogs/>}

          {/* AdminChart will only render when selectedComponent is "content" */}
          {selectedComponent === "content" && <EmployerChart />}


          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
