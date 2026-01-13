"use client";
import Link from "next/link";
import Section from "./components/Section";

export default function NotFound() {
  return (
    <Section
      bgColor="linear-gradient(135deg, #000 0%, #1a1a1a 100%)"
      textColor="#fff"
      style={{ height: "90vh" }}
    >
      <h1
        style={{
          fontSize: "clamp(6rem, 15vw, 20rem)",
          marginBottom: "0.5rem",
          fontWeight: 900,
          letterSpacing: "-0.05em",
        }}
      >
        4<span className="span">0</span>4
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 3rem)",
          marginBottom: "1rem",
          fontWeight: 600,
          opacity: 0.9,
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: "3rem",
          opacity: 0.7,
          maxWidth: "500px",
          margin: "0 auto 3rem",
        }}
      >
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "white",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: 500,
          padding: "0.75rem 0",
          borderBottom: "2px solid rgb(0,148,255)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderBottomColor = "white";
          e.currentTarget.style.color = "rgb(0,148,255)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderBottomColor = "rgb(0,148,255)";
          e.currentTarget.style.color = "white";
        }}
      >
        ← Back to Home
      </Link>
    </Section>
  );
}
