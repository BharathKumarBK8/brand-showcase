"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card, { cards } from "./Card";

interface HorizontalScrollCarouselProps {
  id?: string;
}

const HorizontalScrollCarousel = ({ id }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"]);

  return (
    <section
      id={id}
      ref={targetRef}
      className="relative h-[300vh] bg-neutral-900"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
