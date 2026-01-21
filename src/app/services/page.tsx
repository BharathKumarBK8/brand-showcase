"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/app/components/Section";
import { fadeUp } from "../hooks/animation";
import styles from "@/app/components/Section.module.css";
import Link from "next/link";
import { openWhatsApp } from "../utils/whatsapp";

/* ---------------- Services Data ---------------- */
const services = [
  {
    id: "invisible-aligners",
    title: "Invisible Aligners",
    image: "/assets/services/Aligners.jpeg",
    description:
      "Our invisible aligners offer a discreet, comfortable way to straighten teeth without metal braces. Using advanced 3D scans and custom treatment plans, these clear trays gradually correct gaps, crowding, and bite issues while remaining nearly invisible.",
  },
  {
    id: "routine-checkups",
    title: "Routine Dental Checkups",
    image: "/assets/services/Checkups.jpg",
    description:
      "Regular dental checkups are essential for maintaining long-term oral health. Each visit includes professional cleaning, early detection of dental issues, and personalized advice to keep your smile healthy and strong.",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    image: "/assets/services/Implants.jpg",
    description:
      "Dental implants are a permanent solution for missing teeth, restoring both function and aesthetics. We use titanium implants and precise placement techniques to ensure natural-looking results that last for years.",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    image: "/assets/services/root-canal.png",
    description:
      "Root canal treatment saves infected or damaged teeth, relieving pain and preventing further complications. With advanced tools and modern anesthesia, we ensure a comfortable and effective procedure",
  },
  {
    id: "smile-makeovers",
    title: "Smile Makeovers",
    image: "/assets/services/smile-makeover.jpg",
    description:
      "A smile makeover combines treatments like veneers, whitening, crowns, and orthodontics to enhance your teeth’s appearance. Each plan is personalized to create a natural, balanced, and confident smile.",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    image: "/assets/services/TeethWhitening.jpg",
    description:
      "Professional teeth whitening removes stains and discoloration to brighten your smile in a single visit. We use safe, enamel-friendly techniques for long-lasting, radiant results",
  },
  {
    id: "dental-veneers",
    title: "Dental Veneers",
    image: "/assets/services/veneers.webp",
    description:
      "Custom dental veneers are thin porcelain shells bonded to the front of your teeth to correct chips, gaps, or discoloration. They create a flawless, natural-looking smile with minimal discomfort and long-lasting results.",
  },
  {
    id: "complete-dentures",
    title: "Complete Dentures",
    image: "/assets/services/Dentures.jpg",
    description:
      "Complete dentures replace all missing teeth, restoring chewing ability, speech, and facial structure. We craft comfortable, durable dentures that look natural and help you regain confidence.",
  },
  {
    id: "metal-braces",
    title: "Metal Braces",
    image: "/assets/services/metal-braces.jpg",
    description:
      "Traditional metal braces are a reliable way to correct misaligned teeth, spacing, and bite issues. Each treatment plan is customized to deliver effective, long-lasting results for all ages.",
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    image: "/assets/services/dental-fillings.jpg",
    description:
      "Dental fillings repair cavities and restore tooth strength using durable, tooth-colored materials. Our minimally invasive approach ensures long-lasting protection while keeping your smile natural and healthy.",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section
        bgImage="/assets/serviceHero1.jpg"
        bgColor="#000"
        textColor="#fff"
        overlay
      >
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          Our Dental Services
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
          From preventive care to advanced dental treatments, we focus on
          comfort, clarity, and long-term results — serving families across
          Madurai with modern, patient-first dentistry.
        </motion.p>
      </Section>

      {/* SERVICES LIST */}
      {services.map((service, index) => {
        const reverse = index % 2 !== 0; // every second service is reversed
        const dark = index % 2 !== 0;

        const imgRef = useRef<HTMLDivElement | null>(null);
        const { scrollYProgress } = useScroll({
          target: imgRef,
          offset: ["start end", "end start"],
        });
        const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

        return (
          <Section
            key={service.id}
            id={service.id}
            bgColor={dark ? "#000" : "#fff"}
            textColor={dark ? "#fff" : "#000"}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${styles.flexTwoCols} ${reverse ? styles.reverse : ""}`}
              style={{ gap: "2rem", alignItems: "center" }}
            >
              {/* IMAGE */}
              <motion.div
                ref={imgRef}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "35rem",
                  aspectRatio: "16/9",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  flexShrink: 0,
                  margin: "0 auto",
                  scale,
                }}
              >
                <motion.img
                  src={service.image}
                  alt={`${service.title} at Dr. Joe’s Dental Hospital`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />

                {dark && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.35)",
                    }}
                  />
                )}
              </motion.div>

              {/* CONTENT */}
              <div className={styles.flexContent}>
                <h2>{service.title}</h2>
                <p style={{ marginTop: "1.5rem" }}>{service.description}</p>

                {/* LINK TO SLUG PAGE */}
                <Link
                  href={`/services/${service.id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.5rem",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: dark ? "#fff" : "#555",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = dark ? "#ccc" : "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = dark ? "#fff" : "#555";
                  }}
                >
                  Learn More <span style={{ fontSize: "1.2rem" }}>→</span>
                </Link>
              </div>
            </motion.div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section textColor="#fff" bgImage="/assets/serviceHero2.webp" overlay>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
          Book Your Appointment
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
          From routine checkups to advanced treatments, our team focuses on
          comfort, clarity, and long-term oral health — so you always know what
          to expect.
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
    </main>
  );
}
