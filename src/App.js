import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import TaxCalc from './pages/TaxCalc';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="navbar-logo">Tax Calculator</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/tax" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Tax
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about-us" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact-us" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tax" element={<TaxCalc />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;