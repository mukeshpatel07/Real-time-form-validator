import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <p>
          <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="https://yourwebsite.com" target="_blank" rel="noreferrer">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
