"use client";
import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import styles from "./StickySections.module.css";

interface SectionProps {
  bg: string;
  color: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ bg, color, children }) => {
  return (
    <div className={styles.section} style={{ backgroundColor: bg, color }}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const springTransition: Transition = { duration: 0.5, type: "spring" };

const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: springTransition },
};

const StickySections: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* Section 1: Welcome */}
      <Section bg="#0d47a1" color="#fff">
        <motion.div
          className={styles.icon}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          🦷
        </motion.div>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Dr. Joe's Dental
        </motion.h3>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your smile is our priority! We provide gentle, professional dental
          care for patients of all ages in a friendly and modern environment.
        </motion.p>
        <motion.a
          className={styles.button}
          style={{ backgroundColor: "#64b5f6" }}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book an Appointment
        </motion.a>
      </Section>

      {/* Section 2: Services */}
      <Section bg="#fff" color="#000">
        <motion.div
          className={styles.icon}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
        >
          🪥
        </motion.div>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h3>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Routine checkups, teeth whitening, fillings, root canals, and
          orthodontics – we take care of all your dental needs.
        </motion.p>
        <motion.a
          className={styles.button}
          style={{ backgroundColor: "#29b6f6" }}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
        </motion.a>
      </Section>

      {/* Section 3: Meet the Team */}
      <Section bg="#0d47a1" color="#fff">
        <motion.div
          className={styles.icon}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
        >
          👨‍⚕️👩‍⚕️
        </motion.div>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h3>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Led by Dr. Joe, our experienced dentists and friendly staff are
          committed to making every visit comfortable and stress-free.
        </motion.p>
        <motion.a
          className={styles.button}
          style={{ backgroundColor: "#42a5f5" }}
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </Section>

      {/* Section 4: Contact */}
      <Section bg="#fff" color="#000">
        <motion.div
          className={styles.icon}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={iconVariants}
        >
          📍
        </motion.div>
        <motion.h3
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.h3>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dr. Joe's Dental Clinic, 123 Smile Avenue, Happy Town, State.
          <br />
          📞 (+91) 98765 43210
        </motion.p>
        <motion.a
          className={styles.button}
          style={{ backgroundColor: "#29b6f6" }}
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Directions
        </motion.a>
      </Section>
    </main>
  );
};

export default StickySections;
