import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  `"I've never felt more comfortable at a dental clinic. They truly care!" — Sarah M.`,
  `"Absolutely top-notch service and friendly staff. Highly recommend!" — James T.`,
  `"They made my kids feel at ease. Great pediatric care!" — Priya R.`,
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
    <AnimatePresence mode="wait">
      <motion.blockquote
        style={{ fontStyle: "italic" }}
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {testimonials[index]}
      </motion.blockquote>
    </AnimatePresence>
  );
};

export default AutoPaginatedTestimonials;
