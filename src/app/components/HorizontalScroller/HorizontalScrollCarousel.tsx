"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import Card, { cards } from "./Card";

interface HorizontalScrollCarouselProps {
  id?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

const HorizontalScrollCarousel = ({
  id,
  title,
  description,
  icon,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  // Detect screen size
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenSize("mobile");
      else if (width <= 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll animation
  const x = useTransform(
    scrollYProgress,
    [0, 0.95], // ⬅️ animation finishes at 75%
    screenSize === "mobile"
      ? ["0%", "-99%"]
      : screenSize === "tablet"
      ? ["10%", "-110%"]
      : ["20%", "-100%"]
  );

  const contentX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id={id} ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x: contentX, opacity: contentOpacity, margin: "2rem" }}
        >
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
