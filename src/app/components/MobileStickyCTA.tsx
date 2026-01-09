"use client";
import { useRef } from "react";
import "./MobileStickyCTA.css";

export default function MobileStickyCTA({ menuOpen }: { menuOpen: boolean }) {
  if (menuOpen) return null;

  return (
    <div className="mobile-cta-pill">
      <a href="tel:+919945149151" className="cta-item">
        <i className="bi bi-telephone-fill" />
        <span className="cta-text">call</span>
      </a>

      <span className="cta-divider" />

      <a
        href="https://wa.me/919945149151?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="cta-item"
      >
        <i className="bi bi-whatsapp" />
        <span className="cta-text">book appointment</span>
      </a>
    </div>
  );
}
