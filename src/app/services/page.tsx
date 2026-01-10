"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  Transition,
} from "framer-motion";
import styles from "@/app/components/StickySections.module.css";

/* ---------------- Animations (same as landing) ---------------- */
const transition: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 15,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

/* ---------------- Section Wrapper ---------------- */
const Section = ({
  bgColor,
  textColor = "#000",
  children,
  sticky,
}: {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
  sticky?: boolean;
}) => (
  <section
    className={`${styles.section} ${sticky ? styles.sticky : ""}`}
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <div className={styles.sectionContent}>{children}</div>
  </section>
);

/* ---------------- Services Data ---------------- */
const services = [
  {
    title: "Invisible Aligners",
    image: "/assets/dentalaligners.jpeg",
    description:
      "Invisible aligners at Dr. Joe’s Dental Hospital provide a discreet and modern solution for straightening teeth without metal braces. Using advanced 3D digital scans and AI-based treatment planning, we design custom clear aligners that gradually correct gaps, crowding, and bite issues while remaining nearly invisible throughout treatment.",
  },
  {
    title: "Routine Dental Checkups",
    image: "/assets/heroBg.jpg",
    description:
      "Routine dental checkups form the foundation of long-term oral health. At Dr. Joe’s Dental Hospital in Appanthirupathi and Pasingapuram, each visit focuses on early detection, professional cleaning, and preventive care to help patients avoid complex dental problems and maintain healthy smiles year after year.",
  },
  {
    title: "Dental Implants",
    image: "/assets/dentalimplants.jpg",
    description:
      "Dental implants are a permanent and natural-looking solution for missing teeth. Our Madurai clinics use titanium implants and computer-guided techniques to restore function, preserve jawbone health, and deliver results that closely resemble natural teeth in both appearance and strength.",
  },
  {
    title: "Root Canal Treatment",
    image: "/assets/services/root-canal.jpg",
    description:
      "Root canal treatment at Dr. Joe’s Dental Hospital is designed to eliminate pain while preserving your natural tooth. With advanced imaging, precision tools, and modern anesthesia, we ensure a comfortable, stress-free experience that saves teeth and prevents further infection.",
  },
  {
    title: "Smile Makeovers",
    image: "/assets/services/smile-makeover.jpg",
    description:
      "A smile makeover is a personalized cosmetic transformation that enhances the shape, color, and alignment of your teeth. By combining treatments such as veneers, whitening, crowns, and orthodontics, we create balanced, natural-looking smiles tailored to your facial features and lifestyle.",
  },
  {
    title: "Teeth Whitening",
    image: "/assets/img1.jpg",
    description:
      "Professional teeth whitening at Dr. Joe’s Dental Hospital delivers visible results in a single visit. Using safe, enamel-friendly systems such as laser or Zoom whitening, we remove deep stains and discoloration to reveal a brighter, more confident smile.",
  },
];

/* ---------------- Page ---------------- */
export default function ServicesPage() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <Section bgColor="#fff" textColor="#000">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={styles.heading}
        >
          Our Dental Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={styles.para}
          style={{ maxWidth: "720px", margin: "0 auto" }}
        >
          Modern dentistry delivered with precision, comfort, and clarity —
          trusted by families across Madurai.
        </motion.p>
      </Section>

      {/* SERVICES */}
      {services.map((service, index) => {
        const reverse = index % 2 !== 0;
        const dark = index % 2 !== 0;

        const ref = useRef<HTMLDivElement | null>(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });
        const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

        return (
          <Section
            key={service.title}
            bgColor={dark ? "#000" : "#fff"}
            textColor={dark ? "#fff" : "#000"}
            sticky
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.gridTwoCols}
              style={{ direction: reverse ? "rtl" : "ltr" }}
            >
              {/* IMAGE */}
              <motion.div
                ref={ref}
                style={{
                  y,
                  width: "35rem",
                  height: "100%",
                  borderRadius: "20px",
                  backgroundImage: `
                    linear-gradient(
                      rgba(0,0,0,${dark ? 0.35 : 0}),
                      rgba(0,0,0,${dark ? 0.35 : 0})
                    ),
                    url(${service.image})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                }}
              />

              {/* CONTENT */}
              <div
                style={{
                  direction: "ltr",
                  textAlign: "left",
                }}
              >
                <h2 className={styles.heading}>{service.title}</h2>
                <p className={styles.para} style={{ marginTop: "1.5rem" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section bgColor="#fff" textColor="#000">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.heading}
        >
          Book Your Consultation
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className={styles.para}
        >
          Experience calm, transparent, and modern dentistry at Dr. Joe’s Dental
          Hospital.
        </motion.p>

        <motion.a
          className={styles.btnPrimary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.a>
      </Section>
    </main>
  );
}
