"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "primereact/dialog";
import EnquiryForm from "./components/GenerealEnquiryForm";

const StickyButton = () => {
  const [showText, setShowText] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      label: "General Enquiry",
      iconClass: "pi pi-info-circle",
      action: () => setFormOpen(true),
    },
    {
      label: "Grand Voice Hunt",
      iconClass: "pi pi-calendar",
      action: () => alert("ABC Event clicked"),
    },
  ];

  return (
    <>
      {/* Sticky button and drop-up menu */}
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <div style={{ position: "absolute", bottom: 60, right: 0 }}>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                  minWidth: 180,
                }}
              >
                {menuItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      item.action();
                      setMenuOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 20px",
                      width: "100%",
                      border: "none",
                      background: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "14px",
                      borderBottom:
                        idx < menuItems.length - 1 ? "1px solid #eee" : "none",
                      gap: "10px",
                    }}
                  >
                    <i
                      className={item.iconClass}
                      style={{ fontSize: "16px" }}
                    ></i>
                    <span>{item.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sticky button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            border: "none",
            height: "50px",
            background: "white",
            color: "black",
            cursor: "pointer",
            fontSize: "16px",
            padding: "10px 20px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
          animate={{ width: showText ? 150 : 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <i className="pi pi-envelope" style={{ fontSize: "20px" }}></i>
          <AnimatePresence>
            {showText && (
              <motion.span
                key="text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                style={{ marginLeft: "8px", whiteSpace: "nowrap" }}
              >
                Enquiries
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* PrimeReact Dialog for General Enquiry Form */}
      <Dialog
        header="Enquiries"
        visible={formOpen}
        modal
        onHide={() => setFormOpen(false)}
        className="enquiry-form-dialog" // add your custom class here
        blockScroll={true}
        draggable={false}
      >
        <EnquiryForm />
      </Dialog>
    </>
  );
};

export default StickyButton;
