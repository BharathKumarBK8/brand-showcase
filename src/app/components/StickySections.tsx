"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import styles from "./StickySections.module.css";

/* ---------------- Animations ---------------- */
const transition: Transition = { type: "spring", duration: 0.6 };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ---------------- Section Wrapper ---------------- */
interface SectionProps {
  sticky?: boolean;
  bgImage?: string;
  bgColor?: string;
  textColor?: string;
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  sticky,
  bgImage,
  bgColor,
  textColor = "#000",
  overlay = false,
  children,
  className = "",
}: SectionProps) => (
  <section
    className={`${styles.section} ${sticky ? styles.sticky : ""} ${className}`}
    style={{
      backgroundColor: bgColor,
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: textColor,
    }}
  >
    {overlay && <div className={styles.overlay} />}
    <div className={styles.sectionContent}>{children}</div>
  </section>
);

/* ---------------- Landing Page ---------------- */
export default function StickySections() {
  const clinics = [
    { name: "Appanthirupathi", img: "/assets/Appanthirupathi.jpg" },
    { name: "Pasingapuram", img: "/assets/Pasingapuram.jpeg" },
  ];

  const points = [
    { icon: "🦷", text: "Patient-first, anxiety-free care" },
    { icon: "💰", text: "Premium treatment at fair pricing" },
    { icon: "🧼", text: "Strict sterilization & hygiene protocols" },
    { icon: "📋", text: "Transparent treatment plans before procedures" },
    { icon: "⭐", text: "Trusted dental clinics in Madurai" },
  ];

  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section bgImage="" textColor="#fff" overlay sticky>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={styles.heading}
        >
          Madurai’s Trusted Dental Chain
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={styles.para}
          style={{ marginTop: "1rem" }}
        >
          Pain-free, affordable dental care across Appanthirupathi and
          Pasingapuram — built on trust, hygiene, and clinical excellence.
        </motion.p>

        <motion.a
          className={styles.btnPrimary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.a>
      </Section>

      {/* CREDIBILITY + CLINIC PROOF */}
      <Section bgColor="#ffffff">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.gridTwoCols}
        >
          {/* LEFT: STORY */}
          <div className={styles.gridTwoColsLeft}>
            <h2 className={styles.heading}>Built on Trust, Grown with Care</h2>

            <p className={styles.para} style={{ marginTop: "1rem" }}>
              What began in a modest <strong>110 sq ft clinic</strong> was
              driven by one simple belief — dental care should be gentle,
              honest, and affordable.
            </p>

            <p className={styles.para} style={{ marginTop: "1rem" }}>
              Today, Dr. Joe’s Dental Hospital serves patients through
              <strong> two fully equipped branches in Madurai</strong> —
              Appanthirupathi and Pasingapuram — known for ethical dentistry and
              consistent results.
            </p>
          </div>

          {/* RIGHT: CLINIC COLLAGE */}
          <div className={styles.gridRightOneCol}>
            {clinics.map((clinic) => (
              <div key={clinic.name} className={styles.clinicCard}>
                <div
                  className={styles.clinicImg}
                  style={{ backgroundImage: `url(${clinic.img})` }}
                />
                <p className={styles.clinicName}>{clinic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* SERVICES */}
      <Section bgColor="#000" textColor="#fff">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className={styles.heading}>Our Dental Services</h2>

          <p className={styles.para} style={{ marginTop: "1rem" }}>
            We focus on anxiety-free dentistry — explaining every step clearly
            before treatment begins.
          </p>

          <div
            className={styles.gridTwoColsRight}
            style={{ marginTop: "2rem" }}
          >
            {[
              "Routine Dental Checkups",
              "Root Canal Treatment",
              "Dental Implants",
              "Braces & Clear Aligners",
              "Teeth Whitening",
              "Smile Makeovers",
            ].map((item) => (
              <div key={item} className={styles.whiteCard}>
                🦷 {item}
              </div>
            ))}
          </div>

          <p className={styles.para} style={{ marginTop: "1.5rem" }}>
            With <strong>digital X-rays</strong> and
            <strong> intraoral scanners</strong>, we ensure precise, safe, and
            comfortable treatment — no guesswork, no fear.
          </p>
        </motion.div>
      </Section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <Section
        bgColor="#fdfaf6"
        textColor="#000"
        className={styles.extraPadding}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className={styles.heading} style={{ marginBottom: "2rem" }}>
            Why Choose Dr. Joe’s?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                variants={item}
                className={styles.blackCard}
                style={{
                  gap: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {point.icon}
                </div>
                <p className={styles.para}>{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* DOCTOR */}
      <Section textColor="#ffffff" bgColor="#000">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.gridTwoCols}
        >
          <div className={styles.gridTwoColsLeft}>
            <h2 className={styles.heading}>Meet Dr. Joe Dany</h2>

            <p className={styles.para} style={{ marginTop: "1rem" }}>
              Dr. Joe Dany began his dental journey in 2015, gaining experience
              across Hyderabad, Chennai, Gulbarga, Tirunelveli, and Madurai —
              including
              <strong> Rajaji Government Hospital</strong>.
            </p>

            <p className={styles.para} style={{ marginTop: "1rem" }}>
              In 2023, he founded Dr. Joe’s Dental Hospital with a clear
              mission: to deliver world-class dentistry without fear or
              financial burden. Today, he leads Madurai’s fastest-growing dental
              chain.
            </p>

            <p className={styles.para} style={{ marginTop: "1rem" }}>
              <em>
                “Every patient deserves clarity, comfort, and confidence.”
              </em>
            </p>
          </div>

          <div
            className={styles.doctorImg}
            style={{ backgroundImage: "url(/assets/dr.joe.jpg)" }}
          />
        </motion.div>
      </Section>

      {/* FINAL CTA */}
      <Section bgImage="" bgColor="#fff" textColor="#000">
        <motion.div
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className={styles.heading}>Your Healthier Smile Starts Here</h2>

          <p className={styles.para} style={{ marginTop: "1rem" }}>
            Visit us at Appanthirupathi or Pasingapuram.
            <br />
            Walk in or call for friendly guidance — no obligation, no pressure.
            <br />
            <a href="tel:+919945149151" className={styles.phoneLink}>
              📞 (+91) 99451 49151
            </a>
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            className={styles.btnSecondary}
          >
            Visit Any Branch
          </a>
        </motion.div>
      </Section>
    </main>
  );
}
