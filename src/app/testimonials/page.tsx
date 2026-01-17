"use client";

import { motion } from "framer-motion";
import { fadeUp, container, item } from "@/app/hooks/animation";
import Section from "@/app/components/Section";
import NumberReveal from "@/app/components/NumberReveal/NumberReveal";

const featuredStories = [
  {
    name: "John Doe",
    photoBefore: "/assets/img3.jpg",
    photoAfter: "/assets/img4.jpg",
    title: "Confidence Restored",
    story:
      "John had been hiding his smile for years due to dental anxiety. After a painless dental implant procedure at our clinic, he now smiles freely and feels confident in every social situation.",
    service: "Dental Implants",
  },
  {
    name: "Emily P.",
    photoBefore: "/assets/patient2-before.jpg",
    photoAfter: "/assets/patient2-after.jpg",
    title: "Life-changing Smile Makeover",
    story:
      "Emily struggled with yellowed and chipped teeth. Our smile makeover gave her teeth perfect alignment and whitening, transforming her professional and personal life.",
    service: "Smile Makeover",
  },
];

const testimonials = [
  {
    name: "Mark T.",
    photo: "/assets/patient3.jpg",
    text: "The staff was so kind and professional. I never thought dental visits could be this comfortable!",
    service: "Routine Checkup",
  },
  {
    name: "Sophia L.",
    photo: "/assets/patient4.jpg",
    text: "Dr. Joe explained everything clearly. My root canal was painless, and I’m thrilled with the results.",
    service: "Root Canal",
  },
  {
    name: "Ravi K.",
    photo: "/assets/patient5.jpg",
    text: "From consultation to treatment, every step was handled with care. My smile has never looked better.",
    service: "Smile Makeover",
  },
  {
    name: "Priya M.",
    photo: "/assets/patient6.jpg",
    text: "Highly recommend Dr. Joe’s Dental Hospital. Professional, caring, and truly life-changing.",
    service: "Dental Implants",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <Section bgColor="#000" textColor="#fff" sticky>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center py-24 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Real Stories. Real Transformations.
          </h1>
          <div className="w-32 h-1 bg-[rgb(0,148,255)] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            See how Dr. Joe’s Dental Hospital has changed lives in Madurai — one
            smile at a time.
          </p>
          <p className="mt-4 text-[rgb(0,148,255)] font-semibold">
            Pain-free. Transparent pricing. Trusted by 850+ patients.
          </p>
        </motion.div>
      </Section>

      {/* ---------------- FEATURED TRANSFORMATIONS ---------------- */}
      <Section bgColor="#fff" textColor="#000">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 py-20"
        >
          {featuredStories.map((story, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-xl border border-black shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={story.photoBefore}
                  alt={`${story.name} before`}
                  className="w-full h-64 md:h-80 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={story.photoAfter}
                  alt={`${story.name} after`}
                  className="w-full h-64 md:h-80 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="absolute top-2 left-2 bg-[rgb(0,148,255)] text-white text-xs px-2 py-1 rounded">
                  Before / After
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                <p className="mb-2">{story.story}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Service: {story.service}
                </p>
                <p className="font-semibold text-[rgb(0,148,255)]">
                  {story.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---------------- SHORT TESTIMONIAL GRID ---------------- */}
      <Section bgColor="#fdfaf6" textColor="#000">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto px-4 py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hear From Our Happy Patients
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={item}
                className="border-2 border-[rgb(0,148,255)] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center text-center bg-white"
              >
                <div className="w-24 h-24 mb-4">
                  <img
                    src={t.photo || "/assets/placeholder.jpg"}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full border-2 border-[rgb(0,148,255)]"
                  />
                </div>
                <p className="mb-4 text-[rgb(0,148,255)] text-3xl">❝</p>
                <p className="mb-4 text-black">{t.text}</p>
                <p className="font-semibold text-[rgb(0,148,255)]">{t.name}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Service: {t.service}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------------- IMPACT METRICS ---------------- */}
      <Section bgColor="#000" textColor="#fff">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center py-24 px-4"
        >
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <div className="max-w-4xl mx-auto">
            <NumberReveal
              stats={[
                {
                  value: 850,
                  label: "Smiles Transformed",
                  suffix: "+",
                  decimals: 0,
                },
                {
                  value: 95,
                  label: "Anxiety-Free Treatments",
                  suffix: "%",
                  decimals: 0,
                },
                {
                  value: 500,
                  label: "Happy Patient Stories",
                  suffix: "+",
                  decimals: 0,
                },
                {
                  value: 4.9,
                  label: "Google Rating",
                  suffix: "★",
                  decimals: 1,
                },
              ]}
            />
          </div>
          {/* Trust badges / hygiene icons */}
          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            <div className="flex items-center gap-2">
              <i className="bi bi-shield-check text-[rgb(0,148,255)] text-2xl"></i>
              <span>100% Sterilized Tools</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="bi bi-patch-check-fill text-[rgb(0,148,255)] text-2xl"></i>
              <span>Certified Dentists</span>
            </div>

            <div className="flex items-center gap-2">
              <i className="bi bi-currency-rupee text-[rgb(0,148,255)] text-2xl"></i>
              <span>Transparent Pricing</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ---------------- MINI FAQ ---------------- */}
      <Section bgColor="#fdfaf6" textColor="#000">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-4 py-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Does dental treatment hurt?",
                answer:
                  "We use painless techniques and anesthesia options for every procedure. Most patients report zero discomfort.",
              },
              {
                question: "Is the treatment expensive?",
                answer:
                  "Our pricing is transparent with no hidden costs. Flexible payment options are available to make dental care accessible.",
              },
              {
                question: "How safe is the clinic?",
                answer:
                  "We follow strict sterilization protocols, use digital scans, and our certified staff ensures every procedure is completely safe.",
              },
              {
                question: "Do you treat dental anxiety?",
                answer:
                  "Absolutely! We specialize in anxiety-free dentistry, explaining each step clearly and using gentle techniques to ensure comfort.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="border-2 border-[rgb(0,148,255)] rounded-lg p-4 bg-white group"
              >
                <summary className="cursor-pointer font-semibold text-[rgb(0,148,255)] list-none">
                  {faq.question}
                </summary>
                <p className="mt-2 text-black">{faq.answer}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section bgColor="#fff" textColor="#000">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center py-24 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Smile Transformation Starts Today
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-lg">
            Join hundreds of patients who trusted Dr. Joe’s Dental Hospital.
            Pain-free, ethical, and life-changing dental care awaits.
          </p>
          <a
            href="#"
            className="bg-[rgb(0,148,255)] text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-block"
          >
            Book Appointment
          </a>
          <p className="mt-4 text-gray-600 text-sm">
            No hidden costs • Painless procedures • Trusted by 850+ patients
          </p>
        </motion.div>
      </Section>
    </main>
  );
}
