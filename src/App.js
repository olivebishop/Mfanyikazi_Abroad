import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Preloader from "./components/Preloader.jsx";
import Home from "./pages/Home";
import AboutUs from "../src/./pages/./AboutUs";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CountryPage from "./pages/CountryPage";
import ForgotPass from "./components/ForgotPass.jsx";
import ResetPass from "./components/ResetPass.jsx";
//import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard.jsx";
//import EmployerDashboard from "./pages/dashboard/EmployerDashboard.jsx";
import UpgradeModal from "./components/UpgradeModal.jsx"
import AccountType from "./components/AccountType.jsx"
import EmployerSignup from "./components/register/EmployerSignup.jsx"
import EmployeeSignup from "./components/register/EmployeeSignup.jsx"
import AgencySignup from "./components/register/AgencySignup.jsx"
import TermsAndConditions from "./components/TermsCondtions";
import DashboardHeader from "./components/DashboardHeader";
import SubmitVerification from "./components/verification/SubmitVerification";
import PendingVerification from "./components/verification/PendingVerification";
import AgencyVerification from  "./components/verification/AgencyVerification";
import EmployerVerification from "./components/verification/EmployerVerification"
import AgencyDashboard from '../src/pages/dashboard/Protected-routes/agency/AgencyDashboard'
import EmployeeDashboard from '../src/pages/dashboard/Protected-routes/employee/EmployeeDashboard'
import EmployerDashboard from '../src/pages/dashboard/Protected-routes/employer/EmployerDashboard'


function App() {
  const [loading, setLoading] = useState(true);
  //const [authToken, setAuthToken] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    //const token = localStorage.getItem('authToken');
    //setAuthToken(token);
 
    const role = localStorage.getItem('userRole');// Make sure to set this after successful login
    console.log('User Role:', role);
    setUserRole(role);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Always show Navbar */}
        {loading ? (
          <Preloader />
        ) : (
          <>
            <DashboardHeader /> {/* Show the DashboardHeader */}
            <br />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/country" element={<CountryPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="/reset-password" element={<ResetPass />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upgrade-modal" element={<UpgradeModal/>} />
              <Route path="/account-type" element={<AccountType/>} />
              <Route path="/agency-signup" element={<AgencySignup/>} />
              <Route path="/employer-signup" element={<EmployerSignup/>} />
              <Route path="/employee-signup" element={<EmployeeSignup/>} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
              <Route path="/submit-verification" element={<SubmitVerification/>} />
              <Route path="/pending-verification" element={<PendingVerification/>} />
              <Route path="/agency-verification" element={<AgencyVerification/>} />
              <Route path="/employer-verification" element={<EmployerVerification/>} />

                <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />

              <Route path="/agency-dashboard" element={<AgencyDashboard />} />


              {/* Role-based access control */}
              {userRole === 'admin' && (
                <Route path="/dashboard" element={<Dashboard />} />
              )}
              {/* {userRole === 'agency' && (
              )}
              {userRole === 'employer' && (
              )} */}
              {/* {userRole === 'employee' && (
              )} */}
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
