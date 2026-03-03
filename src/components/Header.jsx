import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; 
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="FlowerPlant Logo" className="logo" />
          <span className="logo-text">FlowerPlant</span>
        </NavLink>

        
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/my-plants" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            My Plants
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;