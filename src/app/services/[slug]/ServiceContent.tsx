"use client";

import { motion } from "framer-motion";
import Section from "@/app/components/Section";
import { fadeUp, container, item } from "@/app/hooks/animation";

export default function ServiceContent({ service }: any) {
  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <Section
        bgImage={service.heroImage}
        bgColor="#000"
        textColor="#fff"
        overlay
      >
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
          {service.title}
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible">
          {service.shortDescription}
        </motion.p>
      </Section>

      {/* ---------------- TRUST STRIP ---------------- */}
      {service.reassurancePoints && (
        <Section bgColor="#fff" textColor="#000">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6 md:grid-cols-3 text-center"
          >
            {service.reassurancePoints.map((point: string, i: number) => (
              <motion.div
                key={i}
                variants={item}
                className="border rounded-xl p-6 font-medium"
              >
                {point}
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* ---------------- WHAT THIS TREATMENT DOES ---------------- */}
      <Section bgColor="#f5f5f5" textColor="#000">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2>What this treatment helps with</h2>
          <div className="grid gap-4 mt-6 md:grid-cols-2">
            {service.whatIsIt.map((item: string, i: number) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------------- BENEFITS ---------------- */}
      <Section bgColor="#fff" textColor="#000">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2>Why patients choose {service.title}</h2>
          <div className="grid gap-4 mt-6 md:grid-cols-2">
            {service.benefits.map((benefit: string, i: number) => (
              <div key={i} className="border-l-4 border-[rgb(0,148,255)] pl-4">
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------------- IDEAL FOR ---------------- */}
      {service.idealFor && (
        <Section bgColor="#000" textColor="#fff">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>Is this treatment right for you?</h2>
            <ul className="mt-6 space-y-3">
              {service.idealFor.map((item: string, i: number) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </motion.div>
        </Section>
      )}

      {/* ---------------- HOW IT WORKS ---------------- */}
      <Section bgColor="#f5f5f5" textColor="#000">
        <motion.div variants={container} initial="hidden" whileInView="visible">
          <h2>How the treatment works</h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {service.procedure.map((step: string, i: number) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <span className="text-[rgb(0,148,255)] font-bold">
                  Step {i + 1}
                </span>
                <p className="mt-2">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      {service.faqs && (
        <Section bgColor="#fff" textColor="#000">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2>Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq: any, i: number) => (
                <details
                  key={i}
                  className="border rounded-lg p-4 cursor-pointer"
                >
                  <summary className="font-semibold">{faq.question}</summary>
                  <p className="mt-2">{faq.answer}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ---------------- FINAL CTA ---------------- */}
      <Section bgColor="rgb(0,148,255)" textColor="#fff">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2>Ready to move forward?</h2>
          <p className="mt-3">
            Get a personalized consultation with our dental experts.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 text-[rgb(0,148,255)] bg-white px-8 py-4 rounded-lg font-semibold"
          >
            Book Appointment
          </a>
        </motion.div>
      </Section>
    </main>
  );
}
