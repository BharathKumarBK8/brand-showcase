import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Designer Credit */}
        <div className="footer-credit">Designed & built by bk.</div>
        {/* Center: Copyright */}
        <div>© {new Date().getFullYear()} R2 Media.</div>
        {/* Right: Social Links */}
        <div className="social-links">
          <a
            href="https://www.instagram.com/r2mediaevent/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/r2mediaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/@r2mediaindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
