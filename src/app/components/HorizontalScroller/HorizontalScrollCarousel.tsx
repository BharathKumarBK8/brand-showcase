"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import Card, { cards } from "./Card";

interface HorizontalScrollCarouselProps {
  id?: string;
  title?: string;
  description?: string;
  icon?: ReactNode; // <-- Accept JSX element as prop
}

const HorizontalScrollCarousel = ({
  id,
  title,
  description,
  icon,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll animation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["1%", "-90%"] : ["20%", "-85%"]
  );

  const contentX = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.25 : 0.35],
    ["0%", isMobile ? "-30%" : "-50%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.25 : 0.35],
    [1, 0]
  );

  return (
    <section
      id={id}
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x: contentX, opacity: contentOpacity, margin: "2rem" }}
        >
          {/* Render the icon if provided */}
          {icon && <div className="mb-4">{icon}</div>}
          <h2>{title}</h2>
          <p style={{ margin: "2rem" }}>{description}</p>
        </motion.div>

        {/* Horizontal scroll cards */}
        <motion.div style={{ x }} className="flex gap-4 px-8">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
