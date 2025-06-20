import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">DevifyX</a>

        <form className="search-form" role="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-btn" type="submit">
            Search
          </button>

          <div className="theme-switch">
            
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
