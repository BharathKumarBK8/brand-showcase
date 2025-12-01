"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card, { cards } from "./Card";

interface HorizontalScrollCarouselProps {
  id?: string;
  title?: string;
}

const HorizontalScrollCarousel = ({
  id,
  title,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll animation
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-85%"]);

  // Fade out title once first card is past a certain horizontal scroll
  // Assuming first card roughly moves 15% of scroll width
  const titleOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section
      id={id}
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900"
    >
      {/* ONE sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Title pinned left-middle */}
        <motion.h2
          className="
            absolute left-8 top-1/2 -translate-y-1/2
            text-4xl font-bold text-gold md:text-5xl lg:text-6xl
          "
          style={{
            opacity: titleOpacity,
            fontWeight: "900",
            lineHeight: "1.1",
            letterSpacing: "-0.05em",
          }}
        >
          {title}
        </motion.h2>

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
