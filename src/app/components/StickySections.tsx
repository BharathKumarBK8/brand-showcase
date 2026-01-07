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

/* ---------------- Section Wrapper ---------------- */
const Section = ({
  bgImage,
  bgColor,
  textColor = "#000",
  overlay = false,
  children,
  className = "",
}: {
  bgImage?: string;
  bgColor?: string;
  textColor?: string;
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`${styles.section} ${className}`}
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
    { name: "Goripalayam", img: "/images/clinic-goripalayam.jpg" },
    { name: "Appanthirupathi", img: "/assets/Appanthirupathi-1.jpeg" },
    { name: "Pasingapuram", img: "/images/clinic-pasingapuram.jpg" },
  ];

  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section bgImage="/images/hero.jpg" textColor="#fff" overlay>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          Madurai’s Best Dental Chain
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginTop: "1rem", fontSize: "1.1rem" }}
        >
          Welcome to <strong>Dr. Joe's Dental Hospital</strong> — transforming
          smiles across Appanthirupathi, Pasingapuram, and Goripalayam.
        </motion.p>

        <motion.a
          className={styles.btnPrimary}
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.a>
      </Section>

      {/* JOURNEY */}
      <Section bgColor="#ffffff">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className={styles.heading}>
            From a Tiny Room to Madurai’s Smile Revolution
          </h2>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            From humble beginnings in a <strong>110 sq ft clinic</strong>, Dr.
            Joe’s Dental Hospital began with a simple dream — to replace pain
            with hope, one smile at a time.
          </p>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            Today, that dream has grown into a trusted chain of
            <strong> 3 thriving branches</strong> in Appanthirupathi,
            Pasingapuram, and Goripalayam — a journey powered by patient trust,
            passion, and clinical excellence.
          </p>
        </motion.div>
      </Section>

      {/* WHO WE ARE */}
      <Section bgColor="#000" textColor="#fff">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className={styles.heading}>Who We Are</h2>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            We are a growing chain of dental clinics delivering the
            <strong> best dental treatments at affordable prices</strong> to the
            people of Madurai.
          </p>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            Our expansion proves one thing clearly — world-class dentistry can
            scale without compromising care, comfort, or cost.
          </p>
        </motion.div>
      </Section>

      {/* SERVICES */}
      <Section bgColor="#ffffff">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className={styles.heading}>What We Do</h2>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            We treat every patient with care, concern, and empathy, making each
            procedure seamless and stress-free.
          </p>

          <div
            className={styles.gridTwoColsRight}
            style={{ marginTop: "2rem" }}
          >
            {[
              "Routine Dental Checkups",
              "Teeth Whitening",
              "Root Canal Treatments",
              "Dental Implants",
              "Braces & Clear Aligners",
              "Smile Makeovers",
            ].map((item) => (
              <div key={item} className={styles.serviceCard}>
                🦷 {item}
              </div>
            ))}
          </div>

          <p style={{ marginTop: "1.5rem" }} className={styles.para}>
            We use advanced technology like <strong>digital X-rays</strong> and
            <strong> intraoral scanners</strong> to deliver precise, pain-free
            results.
          </p>
        </motion.div>
      </Section>

      {/* WHY CHOOSE */}
      <Section bgColor="#000" textColor="#fff" className={styles.extraPadding}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.gridTwoCols}
        >
          <div className={styles.gridTwoColsLeft}>
            <h2 className={styles.heading}>Why Choose Dr. Joe’s?</h2>
            <p style={{ marginTop: "1rem" }} className={styles.para}>
              ✔ From 110 sq ft to 3 prime Madurai locations
            </p>
            <p className={styles.para}>
              ✔ Premium treatments at affordable prices
            </p>
            <p className={styles.para}>✔ Patient-first, anxiety-free care</p>
            <p className={styles.para}>
              ✔ Trusted dental clinic in Goripalayam, Appanthirupathi &
              Pasingapuram
            </p>
          </div>

          <motion.div className={styles.gridTwoColsRight}>
            {clinics.map((clinic) => (
              <div key={clinic.name}>
                <div
                  className={styles.clinicImg}
                  style={{ backgroundImage: `url(${clinic.img})` }}
                />
                <p className={styles.clinicName}>{clinic.name}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* DOCTOR */}
      <Section bgColor="#ffffff">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.gridTwoCols}
        >
          <div className={styles.gridTwoColsLeft}>
            <h2 className={styles.heading}>Meet Dr. Joe Dany</h2>
            <p style={{ marginTop: "1rem" }} className={styles.para}>
              In 2015, Dr. Joe Dany began his journey with a BDS degree and a
              dream to heal smiles. His experience across Hyderabad, Chennai,
              Gulbarga, Tirunelveli, and Madurai — including Rajaji Government
              Hospital — shaped him into a compassionate, skilled dental
              surgeon.
            </p>
            <p style={{ marginTop: "1rem" }} className={styles.para}>
              In 2023, he founded Dr. Joe’s Dental Hospital — today Madurai’s
              fastest-growing dental chain — delivering world-class dentistry
              without premium prices.
            </p>
          </div>

          <motion.div
            className={styles.doctorImg}
            style={{ backgroundImage: "url(/assets/dr.joe.jpg)" }}
          />
        </motion.div>
      </Section>

      {/* FINAL CTA */}
      <Section bgImage="/assets/smile.jpg" textColor="#fff" overlay>
        <motion.div
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className={styles.heading}>Ready for Your Brighter Smile?</h2>
          <p style={{ marginTop: "1rem" }} className={styles.para}>
            Visit us at Appanthirupathi, Pasingapuram, or Goripalayam.
            <br />
            📞 (+91) 98765 43210
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
