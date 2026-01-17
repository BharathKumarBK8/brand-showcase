import { Transition, Variants } from "framer-motion";

/* ---------------- Animations ---------------- */
export const transition: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 15,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
};

export const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
