import { Transition, Variants, MotionValue, useTransform } from "framer-motion";

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

export const useParallaxGalleryAnimations = (
  scrollYProgress: MotionValue<number>
) => ({
  img1Y: useTransform(scrollYProgress, [0, 1], [-60, 5]),
  img2Y: useTransform(scrollYProgress, [0, 1], [-40, 5]),
  img3Y: useTransform(scrollYProgress, [0, 1], [-60, 5]),
  imgZoom: useTransform(scrollYProgress, [0, 1], [1.15, 0.8]),
});
