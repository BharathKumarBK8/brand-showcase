"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import styles from "./StickySections.module.css";
import Link from "next/link";

/* ---------------- Animations ---------------- */
const transition: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 15,
};

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
  id?: string;
  sticky?: boolean;
  bgImage?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  textColor?: string;
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  id,
  sticky,
  bgImage,
  bgColor,
  style,
  textColor = "#000",
  overlay = false,
  children,
  className = "",
}: SectionProps) => (
  <section
    id={id}
    className={`${styles.section} ${sticky ? styles.sticky : ""} ${className}`}
    style={{
      backgroundColor: bgColor,
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
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
    { icon: "bi bi-heart-pulse", text: "Patient-first, anxiety-free care" },
    {
      icon: "bi bi-currency-dollar",
      text: "Premium treatment at fair pricing",
    },
    { icon: "bi bi-droplet", text: "Strict sterilization & hygiene protocols" },
    {
      icon: "bi bi-file-text",
      text: "Transparent treatment plans before procedures",
    },
    { icon: "bi bi-star-fill", text: "Best dental clinics in Madurai" },
  ];

  const servicesList = [
    { name: "Routine Dental Checkups", id: "routine-checkups" },
    { name: "Root Canal Treatment", id: "root-canal" },
    { name: "Dental Implants", id: "dental-implants" },
    { name: "Braces & Clear Aligners", id: "braces-aligners" },
    { name: "Teeth Whitening", id: "teeth-whitening" },
    { name: "Smile Makeovers", id: "smile-makeovers" },
  ];

  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section bgImage="/assets/herobG321.jpg" textColor="#fff" overlay sticky>
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
              What began in a modest <strong>110 sq ft clinic</strong> at
              Goripalayam was driven by one simple belief — dental care should
              be gentle, honest, and affordable.
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                  }}
                >
                  <img
                    src={"/assets/locationpicker.svg"}
                    className={styles.locationPicker}
                  />
                  <p className={styles.clinicName}>{clinic.name}</p>
                </div>
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
          {/* Animated grid for service cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={styles.gridTwoColsRight}
          >
            {servicesList.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className={styles.whiteCard}
                whileHover={{ scale: "1.05" }}
              >
                <Link
                  href={`/services#${service.id}`}
                  scroll
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  🦷 {service.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
          {/* Heading with logo and text on the same line */}
          <h2
            className={`${styles.heading} ${styles.headingWithLogo}`}
            style={{
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem", // space between words and logo
            }}
          >
            <span>Why Choose</span>
            <img
              src={"/assets/logo.png"}
              alt="Dr. Joe's Logo"
              className={styles.sectionLogo}
            />
            <span>?</span>
          </h2>

          {/* Cards */}
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
                  }}
                >
                  <i className={point.icon}></i>
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
      {/* ---------------- VISIT US ---------------- */}
      <Section bgColor="#fff" textColor="#000">
        <div>
          {/* Heading */}
          <motion.div
            className={styles.headingWithIcon}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <i className="bi bi-cursor-fill icon"></i>
            <h2>Visit Us</h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            className={styles.gridWithDivider}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ---------------- Location 1 ---------------- */}
            <motion.div variants={item}>
              <div className={styles.mapContent}>
                <address>
                  <a
                    href="https://maps.app.goo.gl/1NHreFWHu3h4CbMHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-link"
                  >
                    <i className="bi bi-geo-alt-fill" /> 42/2, Alagar Kovil Main
                    Rd, Appanthirupathi, Madurai, Tamil Nadu 625301
                  </a>
                </address>

                <p className={styles.timingsP}>
                  <i className="bi bi-clock-fill" />{" "}
                  <strong>Monday – Saturday:</strong> 10:00 AM – 9:00 PM <br />
                  <i className="bi bi-x-lg" /> <strong>Sunday:</strong> Closed
                </p>
              </div>

              <iframe
                title="Dr. Joe’s Dental Hospital – Appanthirupathi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.942787080121!2d78.19098337503141!3d10.021580190084983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c702d07a7ecb%3A0x923cdd3fa082bc1d!2sDr.JOE&#39;s%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1768029355371!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Divider */}
            <div className={styles.gridDivider}></div>

            {/* ---------------- Location 2 ---------------- */}
            <motion.div variants={item}>
              <div className={styles.mapContent}>
                <address>
                  <a
                    href="https://maps.app.goo.gl/4JUH7EfASHpZaPTEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-link"
                  >
                    <i className="bi bi-geo-alt-fill" />
                    Shop 6, Ramakrishnan Nagar, Alanganallur Main Road, near
                    Boston Aviation, Pasingapuram, Madurai, Tamil Nadu 625018
                  </a>
                </address>

                <p className={styles.timingsP}>
                  <strong>
                    <i className="bi bi-clock-fill" /> Monday – Saturday:
                  </strong>{" "}
                  10:00 AM – 9:00 PM <br />
                  <i className="bi bi-x-lg" /> <strong>Sunday:</strong> Closed
                </p>
              </div>

              <iframe
                title="Dr. Joe’s Dental Hospital – Pasingapuram"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.331049959913!2d78.09647757503102!3d9.98948889011538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c99d33970c67%3A0x74901e368d6f769!2sDr.%20JOE&#39;s%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1768029682415!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
