import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark navbar-dark" : "bg-info-subtle"}`}>
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/assets/image.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
        </NavLink>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-recipe">Add Recipe</NavLink>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          {/* Dark Mode Toggle Button */}
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"} ms-3`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
