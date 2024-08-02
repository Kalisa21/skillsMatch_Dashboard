import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import './index.css';
import Home from "./Components/Home";
import DashNavbar from "./Components/Dashnavbar";
import Events from "./Components/events";
import JobSection from "./Components/JobSection";
import Resources from "./Components/resources";
import JobListingSection from './Components/JobListingSection';
import JobStatsTableSection from './Components/JobStatsTableSection';
import Employer from './Components/Employer';
import AddEducation from "./Components/AddEducation";
import Interests from "./Components/Interests";


const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DashNavbar" element={<DashNavbar />} />
        <Route path="/Jobs" element={<JobSection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/JobListing" element={<JobListingSection />} />
        <Route path="/JobStatsTable" element={<JobStatsTableSection />} />
        <Route path="/Employer" element={<Employer/>} />
        <Route path="/Education" element={<AddEducation/>} />
        <Route path="/interest" element={<Interests/>} />
        <Route path="/interest" element={<Interests/>} />

      </Routes>
  );
};

export default App;
