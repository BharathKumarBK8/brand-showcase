"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const menuItems = [
  {
    label: "home.",
    icon: <i className="bi bi-house-door-fill text-3xl md:text-4xl" />,
  },
  {
    label: "features.",
    icon: <i className="bi bi-gear-fill text-3xl md:text-4xl" />,
  },
  {
    label: "blog.",
    icon: <i className="bi bi-pencil-fill text-3xl md:text-4xl" />,
  },
  {
    label: "careers.",
    icon: <i className="bi bi-briefcase-fill text-3xl md:text-4xl" />,
  },
];

const socialItems = [
  { icon: <i className="bi bi-twitter" />, url: "#" },
  { icon: <i className="bi bi-instagram" />, url: "#" },
  { icon: <i className="bi bi-linkedin" />, url: "#" },
  { icon: <i className="bi bi-youtube" />, url: "#" },
];

const FloatingButtonMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.1, type: "spring", stiffness: 140 },
    }),
  };

  const contactVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1, type: "spring", stiffness: 140 },
    },
  };

  return (
    <div>
      {/* Floating header button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition"
        >
          <motion.span
            className="absolute block h-1 w-10 bg-white origin-center"
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.span
            className="absolute block h-1 w-10 bg-white"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute block h-1 w-10 bg-white origin-center"
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </button>
      </div>

      {/* AnimatePresence menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed top-4 right-4 z-40 w-[calc(100%-32px)] h-[calc(100vh-32px)] overflow-hidden text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background */}
            <motion.div
              className="absolute top-0 right-0 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 shadow-lg shadow-violet-800/20"
              style={{ width: "100%", height: "100%" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            />

            {/* Mini Home Button */}
            <a
              href="#"
              className="absolute top-4 right-4 grid h-20 w-20 place-content-center bg-white text-violet-600 rounded-br-xl rounded-tl-xl transition-colors hover:bg-violet-50"
            >
              <i className="bi bi-star-fill text-3xl" />
            </a>

            {/* Staggered Menu */}
            <div className="absolute top-28 left-8 md:left-20 space-y-6">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href="#"
                  custom={i}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  className="block text-5xl md:text-7xl font-semibold text-white flex items-center gap-4"
                >
                  {item.icon}
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-6 left-6 flex gap-6 md:flex-col">
              {socialItems.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl text-white hover:text-violet-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact Button */}
            <motion.button
              className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-violet-700 px-6 py-3 text-2xl text-violet-200 transition hover:bg-white hover:text-violet-600"
              variants={contactVariant}
              initial="hidden"
              animate="visible"
            >
              contact us <i className="bi bi-arrow-right" />
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtonMenu;
