"use client";

import { motion } from "framer-motion";
import Section from "@/app/components/Section";
import { fadeUp } from "@/app/hooks/animation";

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  heroImage: string;
  shortDescription: string;
  whatIsIt: string[];
  benefits: string[];
  procedure: string[];
  faqs?: FAQ[];
}

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <main>
      {/* HERO */}
      <Section
        bgImage={service.heroImage}
        bgColor="#000"
        textColor="#fff"
        overlay
      >
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          {service.title}
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
          {service.shortDescription}
        </motion.p>
      </Section>

      {/* WHAT IS IT */}
      <Section bgColor="#f5f5f5" textColor="#000">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
          What is {service.title}?
        </motion.h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          {service.whatIsIt.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ marginBottom: "0.75rem" }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* BENEFITS */}
      <Section bgColor="#fff" textColor="#000">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
          Benefits of {service.title}
        </motion.h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          {service.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ marginBottom: "0.75rem" }}
            >
              {benefit}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* PROCEDURE */}
      <Section bgColor="#f5f5f5" textColor="#000">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
          How the Procedure Works
        </motion.h2>
        <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          {service.procedure.map((step, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ marginBottom: "0.75rem" }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <Section bgColor="#fff" textColor="#000">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
            Frequently Asked Questions
          </motion.h2>
          {service.faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              style={{ marginBottom: "1rem" }}
            >
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </Section>
      )}
    </main>
  );
}
