import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>© {new Date().getFullYear()} R2 Media. All rights reserved.</div>
        <div className="social-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
