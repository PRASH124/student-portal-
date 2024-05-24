import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Hostel from "./pages/hostel";
import Inst_contacts from "./pages/inst_contacts";
import AboutUs from "./pages/about_us";
import Attendance from "./pages/attendance";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="container">
          <Sidebar isVisible={isSidebarVisible} />
          <div className="content">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/hostel" element={<Hostel />} />
              <Route path="/instcontacts" element={<Inst_contacts />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/attendance" element={<Attendance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
