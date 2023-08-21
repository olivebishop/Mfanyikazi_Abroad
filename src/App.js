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
import AgencyDashboard from "./pages/dashboard/AgencyDashboard.jsx";
import EmployeeDashboard from "./pages/dashboard/EmployeeDashboard.jsx";
import EmployerDashboard from "./pages/dashboard/EmployerDashboard.jsx";
import UsersPage from "./pages/dashboard/Protected-routes/UsersPage";
import CreateUser from "./pages/dashboard/Protected-routes/CreateUser";
import ViewUser from "./pages/dashboard/Protected-routes/ViewUser";
import UpgradeModal from "./components/UpgradeModal.jsx"
import AccountType from "./components/AccountType.jsx"
import EmployerSignup from "./components/register/EmployerSignup.jsx"
import EmployeeSignup from "./components/register/EmployeeSignup.jsx"
import AgencySignup from "./components/register/AgencySignup.jsx"
import TermsAndConditions from "./components/TermsCondtions";


function App() {
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);

    const role = localStorage.getItem('userRole'); // Make sure to set this after successful login
    setUserRole(role);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          {!authToken && <Navbar />}
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


            {/* Role-based access control */}
            {userRole === 'admin' && (
              <Route path="/dashboard" element={<Dashboard />} />
            )}
            {userRole === 'agency' && (
              <Route path="/agency-dashboard" element={<AgencyDashboard />} />
            )}
            {userRole === 'employer' && (
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            )}
            {userRole === 'employee' && (
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            )}

            <Route path="/user" element={<UsersPage />} />
            <Route path="/create-users" element={<CreateUser />} />
            <Route path="/view-users" element={<ViewUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
