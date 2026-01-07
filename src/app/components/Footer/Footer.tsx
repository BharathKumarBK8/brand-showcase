import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Dr. Joe's Dental.</div>
      </div>
    </div>
  );
};

export default Footer;
