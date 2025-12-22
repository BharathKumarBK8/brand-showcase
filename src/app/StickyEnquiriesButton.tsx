"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "primereact/dialog";
import EnquiryForm from "./components/GenerealEnquiryForm";
import { PiCamera } from "react-icons/pi";
import { useEnquiryForm } from "./context/EnquiryFormContext";

const StickyButton = () => {
  const [showText, setShowText] = useState(true);
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <motion.button
          onClick={openForm}
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
      <Dialog
        visible={isOpen}
        modal
        onHide={closeForm}
        className="enquiry-form-dialog"
        blockScroll
        resizable={false}
        draggable={false}
        contentStyle={{ padding: 0 }}
        header={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <PiCamera size={36} color="#cd0001" />
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                Get Started With Us
              </span>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                }}
              >
                Tell us about your project and we'll bring it to life
              </p>
            </div>
          </div>
        }
      >
        <EnquiryForm />
      </Dialog>
    </>
  );
};

export default StickyButton;
