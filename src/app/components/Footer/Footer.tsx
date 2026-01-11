import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Dr. Joe&apos;s Dental.</span>

        <span className="footer-credit">Designed & built by bk.</span>
      </div>
    </footer>
  );
};

export default Footer;
