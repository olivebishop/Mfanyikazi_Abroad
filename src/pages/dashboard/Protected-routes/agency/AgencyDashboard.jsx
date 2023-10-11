import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import Content from "./Content";
import DashboardFooter from "./DashboardFooter";
import ViewUser from "./ViewUser";
import AddJobs from "./manage-jobs/AddJobs";
import ViewJobs from "./manage-jobs/ViewJobs";
import ViewReports from "./manage-reports/ViewReports";
import CheckLogs from "./manage-settings/CheckLogs";
import AgencyChart from "./AgencyChart";
import ViewApplications from "./manage-applications/ViewApplications";


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
          {selectedComponent === "viewUser" && <ViewUser />}
          {selectedComponent === "addJob" && <AddJobs />}
          {selectedComponent === "viewJob" && <ViewJobs />}
          {selectedComponent === "viewReports" && <ViewReports />}
          {selectedComponent === "checkLogs" && <CheckLogs/>}
          {selectedComponent === "viewApplications" && <ViewApplications/>}


          {/* AdminChart will only render when selectedComponent is "content" */}
          {selectedComponent === "content" && <AgencyChart />}

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
