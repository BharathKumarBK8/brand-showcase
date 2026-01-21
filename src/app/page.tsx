"use client";

import { motion } from "framer-motion";
import { fadeUp, container, item } from "@/app/hooks/animation";
import { openWhatsApp } from "./utils/whatsapp";
import AutoPaginatedTestimonials from "@/app/components/AutoPaginatedTestimonials";
import NumberReveal from "@/app/components/NumberReveal/NumberReveal";
import ParallaxGallery from "@/app/components/ParallaxGallery/ParallaxGallery";
import styles from "@/app/components/Section.module.css";
import Section from "@/app/components/Section";
import Link from "next/link";

export default function LandingPage() {
  const clinics = [
    { name: "Appanthirupathi", img: "/assets/Appanthirupathi.jpg" },
    { name: "Pasingapuram", img: "/assets/Pasingapuram.jpeg" },
  ];

  const points = [
    { icon: "bi bi-heart-pulse", text: "Patient-first, anxiety-free care" },
    {
      icon: "bi bi-currency-rupee",
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
    { name: "Invisible Aligners", id: "invisible-aligners" },
    { name: "Routine Dental Checkups", id: "routine-checkups" },
    { name: "Dental Implants", id: "dental-implants" },
    { name: "Root Canal Treatment", id: "root-canal" },
    { name: "Smile Makeovers", id: "smile-makeovers" },
    { name: "Teeth Whitening", id: "teeth-whitening" },
    { name: "Dental Veneers", id: "dental-veneers" },
    { name: "Complete Dentures", id: "complete-dentures" },
    { name: "Metal Braces", id: "metal-braces" },
    { name: "Dental Fillings", id: "dental-fillings" },
  ];

  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section bgImage="/assets/heroBg.jpg" textColor="#fff" overlay sticky>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          Madurai’s Trusted Dental Chain
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginTop: "1rem" }}
        >
          Pain-free, affordable dental care across Appanthirupathi and
          Pasingapuram — built on trust, hygiene, and clinical excellence.
        </motion.p>

        <motion.a
          className={styles.btnPrimary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
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
            <h2>Built on Trust, Grown with Care</h2>

            <p style={{ marginTop: "1rem" }}>
              What began in a modest <strong>110 sq ft clinic</strong> at
              Goripalayam was driven by one simple belief — dental care should
              be gentle, honest, and affordable.
            </p>

            <p style={{ marginTop: "1rem" }}>
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
                    loading="lazy"
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
          <h2>Our Dental Services</h2>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
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
                  href={`/services/${service.id}`}
                  className={styles.serviceLink}
                  scroll
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  🦷 {service.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <p style={{ marginTop: "1.5rem" }}>
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
          <h2 className={styles.headingWithLogo}>
            <span>Why Choose</span>

            <span className={styles.logoGroup}>
              <img
                src={"/assets/logo.png"}
                alt="Dr. Joe's Logo"
                className={styles.sectionLogo}
                loading="lazy"
              />
              <span>?</span>
            </span>
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
                <div>
                  <i className={point.icon}></i>
                </div>
                <p>{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section bgColor="#000" textColor="#fff" className={styles.extraPadding}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Our Impact</h2>
            <p>
              Real numbers, happy patients, and a glimpse of our clinic work.
            </p>
          </div>

          {/* Number Reveal */}
          <div style={{ marginBottom: "4rem" }}>
            <NumberReveal
              stats={[
                {
                  value: 2000,
                  label: "Patients Treated",
                  suffix: "+",
                  decimals: 0,
                },
                {
                  value: 3,
                  label: "Years of Experience",
                  suffix: "+",
                  decimals: 0,
                },
                { value: 3, label: "Branches", decimals: 0 },
                {
                  value: 4.9,
                  label: "Google Rating",
                  suffix: "★",
                  decimals: 1,
                },
              ]}
            />
          </div>

          {/* Testimonials */}
          <div
            style={{
              marginBottom: "4rem",
              textAlign: "center",
              // height: "30vh", // remove this
            }}
          >
            <h3 style={{ marginBottom: "1.5rem" }}>What Our Patients Say</h3>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <AutoPaginatedTestimonials />
            </div>
          </div>

          {/* Parallax Gallery */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ marginBottom: "1.5rem" }}>A Glimpse of Our Work</h3>
            <ParallaxGallery
              images={[
                {
                  src: "/assets/work1.jpg",
                  alt: "Image 1",
                  animationType: "img1Y",
                },
                {
                  src: "/assets/work2.jpg",
                  alt: "Image 2",
                  animationType: "img2Y",
                },
                {
                  src: "/assets/work3.jpg",
                  alt: "Image 3",
                  animationType: "img3Y",
                },
              ]}
            />
          </div>
        </motion.div>
      </Section>

      {/* DOCTOR */}
      <Section textColor="#000" bgColor="#fff">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.gridTwoCols}
        >
          <div className={styles.gridTwoColsLeft}>
            <h2>Meet Dr. Joe Dany</h2>

            <p style={{ marginTop: "1rem" }}>
              Dr. Joe Dany began his dental journey in 2015, gaining experience
              across Hyderabad, Chennai, Gulbarga, Tirunelveli, and Madurai —
              including
              <strong> Rajaji Government Hospital</strong>.
            </p>

            <p style={{ marginTop: "1rem" }}>
              In 2023, he founded Dr. Joe’s Dental Hospital with a clear
              mission: to deliver world-class dentistry without fear or
              financial burden. Today, he leads Madurai’s fastest-growing dental
              chain.
            </p>

            <p style={{ marginTop: "1rem" }}>
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
      <Section bgColor="#000" textColor="#fff">
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

                <p className="timingsP">
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

                <p className="timingsP">
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
