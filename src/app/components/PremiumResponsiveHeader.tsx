"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./PremiumResponsiveHeader.css";

// Tooth Icon Component
const ToothIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 311.572 311.572"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor" // inherit text color from menu-link
    stroke="currentColor" // match stroke color
    className={className}
  >
    <path d="M239.964,0c-38.262,0-45.435,37.55-84.173,37.55C117.059,37.55,109.885,0,71.619,0C24.76,0,4.961,47.903,4.961,94.756 s39.731,216.817,86.584,216.817c19.814,0,24.366-108.723,64.241-108.723s44.426,108.723,64.241,108.723 c46.858,0,86.584-169.958,86.584-216.817S286.817,0,239.964,0z"></path>
  </svg>
);

const menuItems = [
  {
    label: "home.",
    href: "/",
    icon: <i className="bi bi-house-door-fill" />,
  },
  {
    label: "services.",
    href: "/services",
    icon: <ToothIcon className="tooth-icon" />,
  },
  {
    label: "team.",
    href: "/team",
    icon: <i className="bi bi-people-fill" />,
  },
  {
    label: "blog.",
    href: "/blog",
    icon: <i className="bi bi-journal-text" />,
  },
  {
    label: "contact.",
    href: "/contact",
    icon: <i className="bi bi-envelope-fill" />,
  },
];

const socialItems = [
  { iconClass: "bi bi-instagram", url: "#" },
  { iconClass: "bi bi-facebook", url: "#" },
];

const PremiumResponsiveHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <header>
      {/* Desktop Header */}
      <div className="header-desktop">
        <div className="logo">dr. joe's</div>

        <nav className="menu-items">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="menu-link"
              custom={i}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, color: "#ccc" }}
            >
              {item.icon} {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="header-right">
          <div className="social-icons">
            {socialItems.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                whileHover={{ scale: 1.2, color: "#ccc" }}
                className="social-link"
              >
                <i className={s.iconClass}></i>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#appointment"
            className="contact-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
          >
            Book Appointment <i className="bi bi-arrow-right"></i>
          </motion.a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <div className="mobile-topbar">
          <div className="mobile-logo">dr. joe's</div>

          <button
            onClick={() => setOpen(!open)}
            className="hamburger-btn"
            aria-label="Menu"
          >
            <motion.span
              className="hamburger-line"
              animate={{ rotate: open ? 45 : 0, y: open ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.span
              className="hamburger-line"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="hamburger-line"
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="space-y-16 mt-24">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="mobile-link flex items-center gap-4 text-5xl font-bold"
                    custom={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1 },
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {item.icon} {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mobile-social flex gap-6 mt-12 justify-center">
                {socialItems.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    className="text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.6 + i * 0.1 },
                    }}
                  >
                    <i className={s.iconClass}></i>
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#appointment"
                className="mobile-contact-btn mt-12 inline-flex items-center gap-3 rounded-full bg-violet-700 px-6 py-3 text-2xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
              >
                Book Appointment <i className="bi bi-arrow-right"></i>
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default PremiumResponsiveHeader;
