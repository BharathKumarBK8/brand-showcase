"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavigate = (id: string) => {
    onNavigate?.(id);
  };

  return (
    <motion.header className="header">
      <div className="header-content">
        <div className="logo">
          <img
            src="../../assets/logo.webp"
            className="logo-img"
            style={{ height: 100, cursor: "pointer" }}
            alt="R2 Media Logo"
            onClick={() => handleNavigate("hero")}
          />
        </div>

        {/* Normal navigation */}
        <nav className="nav-links">
          <span onClick={() => handleNavigate("hero")}>Home</span>
          <span onClick={() => handleNavigate("works")}>Works</span>
          <span onClick={() => handleNavigate("services")}>Services</span>
          <span onClick={() => handleNavigate("contact")}>Contact</span>
        </nav>

        {/* Hamburger removed */}
      </div>
    </motion.header>
  );
};

export default Header;
