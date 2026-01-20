import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  `"I had an amazing experience at Dr. Joe's Dental Hospital. The staff is incredibly friendly, and the clinic is clean and modern. Dr. JOE DANY is very knowledgeable, took the time to explain everything clearly, and made sure I was comfortable throughout the procedure. I appreciated how they addressed all my concerns and followed up after the visit. Highly recommend for anyone looking for professional and compassionate dental care!" — Alan John.`,
  `"I had an amazing experience at Dr.Joe’s Dental Hospital! The staff were friendly, professional, and made me feel at ease from the moment I walked in. Dr. Joe explained everything clearly, and did an excellent job with my treatment. The clinic was modern, clean, and well-organised. I highly recommend to anyone looking for top-notch dental care. 5/5 stars! — Yazhini Santhakumar.`,
  `"I’ve always been a bit nervous about dental visits, but Dr.joe made me feel completely at ease. They took the time to explain everything and were incredibly gentle. A truly very good doctor" — Senthil Ramanan.`,
  `"The clinic offers excellent facilities and is led by a highly skilled and experienced doctor." - Babu Aathithyan`,
  `"Great experience at this dental clinic! Friendly staff, quick appointments, and clear communication. Highly recommend!" Best Dental Clinic at Appanthirupathi Alagarkovil.Thankyou Dr. Joe Dany!!" - Moobina Afrin`,
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
    <motion.div layout>
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 0.3 },
            layout: { duration: 0.4, ease: "easeInOut" },
          }}
          className="auto-testimonials"
        >
          {testimonials[index]}
        </motion.blockquote>
      </AnimatePresence>
    </motion.div>
  );
};

export default AutoPaginatedTestimonials;
