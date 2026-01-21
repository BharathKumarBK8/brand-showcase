import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  `"I had an amazing experience at Dr. Joe's Dental Hospital. The staff is incredibly friendly, and the clinic is clean and modern. Dr. JOE DANY is very knowledgeable, took the time to explain everything clearly, and made sure I was comfortable throughout the procedure. Highly recommend!" — Alan John.`,
  `"I had an amazing experience at Dr.Joe’s Dental Hospital! The staff were friendly, professional, and made me feel at ease from the moment I walked in. Dr. Joe explained everything clearly. 5/5 stars! — Yazhini Santhakumar.`,
  `"I’ve always been a bit nervous about dental visits, but Dr.Joe made me feel completely at ease. They took the time to explain everything and were incredibly gentle." — Senthil Ramanan.`,
  `"The clinic offers excellent facilities and is led by a highly skilled and experienced doctor." — Babu Aathithyan`,
  `"Great experience at this dental clinic! Friendly staff, quick appointments, and clear communication. Thank you Dr. Joe Dany!!" — Moobina Afrin`,
];

const AutoPaginatedTestimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="autoTestimonials-container">
      <div style={{ maxWidth: "800px" }}>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.5 } }}
            className="auto-testimonials"
            style={{
              lineHeight: 1.6,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {testimonials[index]}
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AutoPaginatedTestimonials;
