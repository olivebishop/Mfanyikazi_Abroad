import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import DashboardFooter from "./components/DashboardFooter.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Country from "./pages/Country.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    // Preloader
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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/country" element={<Country />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={<Dashboard loggedIn={isLoggedIn} />} // Pass loggedIn prop
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          {isLoggedIn && <DashboardFooter />} {/* Render DashboardFooter for logged-in users */}
          {!isLoggedIn && !authToken && <Footer />} {/* Render Footer for non-logged-in users */}
          <ToastContainer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
