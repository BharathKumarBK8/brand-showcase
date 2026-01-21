"use client";

import { motion } from "framer-motion";
import { fadeUp, container, item } from "@/app/hooks/animation";
import "./ServiceContent.css";
import { openWhatsApp } from "@/app/utils/whatsapp";

export default function ServiceContent({ service }: any) {
  return (
    <main style={{ paddingTop: "5rem" }}>
      {service.reassurancePoints && (
        <section className="py-10 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="reassurance-points"
            >
              {service.reassurancePoints.map((point: string, index: number) => (
                <motion.span
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="reassurance-point"
                >
                  <span>✔</span>
                  {point}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* INTRO + IMAGE (REPLACES HERO & IMAGE+KEYPOINTS) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-white leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src={service.heroImage}
            alt={service.title}
            variants={fadeUp}
            loading="lazy"
            initial="hidden"
            animate="visible"
            className="rounded-2xl shadow-lg w-full h-[360px] object-cover"
          />
        </div>
      </section>

      {/* WHAT IT DOES */}
      {service.whatIsIt && (
        <section className="bg-gray-50 py-16 text-black">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
              What this treatment helps with
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="point-container"
            >
              {service.whatIsIt.map((point: string, index: number) => (
                <motion.span key={index} variants={item} className="point-item">
                  <span>✔</span>
                  {point}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      {service.benefits && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
              Benefits of {service.title}
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="point-container"
            >
              {service.benefits.map((point: string, index: number) => (
                <motion.span key={index} variants={item} className="point-item">
                  <span>✔</span>
                  {point}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* IDEAL FOR */}
      {service.idealFor && (
        <section className="bg-white py-16 text-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
              Is this treatment right for you?
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="point-container"
            >
              {service.idealFor.map((point: string, index: number) => (
                <motion.span key={index} variants={item} className="point-item">
                  <span>✔</span>
                  {point}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* PROCEDURE TIMELINE */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-8"
          >
            How the treatment works
          </motion.h2>
          <div className="timeline">
            {service.procedure.map((step: string, index: number) => (
              <motion.div key={index} variants={item} className="timeline-step">
                <span>Step {index + 1}</span>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs && (
        <section className="bg-white py-16 text-black">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="text-center mb-8"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {service.faqs.map((faq: any, index: number) => (
                <motion.details
                  key={index}
                  variants={item}
                  className="faq-item"
                >
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible">
            Ready to move forward?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
            Get a personalized consultation with our dental experts.
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="cta-button"
            onClick={openWhatsApp}
          >
            Book Appointment
          </motion.a>
        </div>
      </section>
    </main>
  );
}
