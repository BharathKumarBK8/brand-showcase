"use client";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import { openWhatsApp } from "@/app/utils/whatsapp";

// motion Link wrapper
const MotionLink = motion.create(Link);

const ToothIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 311.572 311.572"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    className={className}
  >
    <path d="M239.964,0c-38.262,0-45.435,37.55-84.173,37.55C117.059,37.55,109.885,0,71.619,0C24.76,0,4.961,47.903,4.961,94.756s39.731,216.817,86.584,216.817c19.814,0,24.366-108.723,64.241-108.723s44.426,108.723,64.241,108.723c46.858,0,86.584-169.958,86.584-216.817S286.817,0,239.964,0z" />
  </svg>
);

const menuItems = [
  { label: "home", href: "/", icon: <i className="bi bi-house-door-fill" /> },
  {
    label: "services",
    href: "/services",
    icon: <ToothIcon className="tooth-icon" />,
  },
  { label: "blog", href: "/blog", icon: <i className="bi bi-journal-text" /> },
  {
    label: "community services",
    href: "/community-services",
    icon: <i className="bi bi-people-fill" />,
  },
  /* {
    label: "testimonials",
    href: "/testimonials",
    icon: <i className="bi bi-chat-dots-fill"></i>,
  }, */
];

const socialItems = [
  {
    iconClass: "bi bi-instagram",
    url: "https://www.instagram.com/dr.joesdental/",
  },
  {
    iconClass: "bi bi-facebook",
    url: "https://www.facebook.com/share/1GS42zVBaB/",
  },
  {
    iconClass: "bi bi-linkedin",
    url: "https://www.linkedin.com/in/dr-joe-s-dental-hospital-83a8743a2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { iconClass: "bi bi-twitter-x", url: "https://x.com/DrJOEsDental" },
];

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  const pathname = usePathname();

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
        <Link href="/">
          <img
            src="/assets/logo2.png"
            alt="Logo"
            className="logo"
            loading="lazy"
          />
        </Link>

        <nav className="menu-items">
          {menuItems.map((item, i) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <MotionLink
                key={item.label}
                href={item.href}
                className={`menu-link ${isActive ? "active" : ""}`}
                custom={i}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon} {item.label}
              </MotionLink>
            );
          })}
        </nav>

        <div className="header-right">
          <div className="social-icons">
            {socialItems.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#ccc" }}
                className="social-link"
              >
                <i className={s.iconClass}></i>
              </motion.a>
            ))}
          </div>

          <motion.a
            onClick={openWhatsApp}
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
          >
            Book Appointment <i className="bi bi-arrow-right" />
          </motion.a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="header-mobile">
        <div className="mobile-topbar">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/assets/logo2.png"
              alt="Logo"
              className="mobile-logo"
              loading="lazy"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Menu"
          >
            <motion.span
              className="hamburger-line"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 20 : 0 }}
            />
            <motion.span
              className="hamburger-line"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="hamburger-line"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mobile-menu-items">
                {menuItems.map((item, i) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");
                  return (
                    <MotionLink
                      key={item.label}
                      href={item.href}
                      className={`mobile-link ${isActive ? "active" : ""}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.1 },
                      }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon} {item.label}
                    </MotionLink>
                  );
                })}
              </div>

              <div className="mobile-social">
                {socialItems.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    className="mobile-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
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
                className="mobile-contact-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
                onClick={() => {
                  openWhatsApp();
                  setMenuOpen(false);
                }}
              >
                Book Appointment <i className="bi bi-arrow-right" />
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
