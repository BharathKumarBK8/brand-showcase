"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import styles from "./HorizontalScrollCarousel.module.css";
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

  // Scroll animation (desktop only)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Horizontal motion
  const xRaw = useTransform(scrollYProgress, [0, 0.95], ["10%", "-78%"]);
  const springX = useSpring(xRaw, { damping: 30, stiffness: 100 });
  const x = screenSize === "desktop" ? springX : "0%";

  const contentX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id={id} ref={targetRef} className={styles.carouselSection}>
      {screenSize === "desktop" ? (
        // Desktop
        <div className={styles.desktopWrapper}>
          <div className={styles.desktopSticky}>
            <motion.div
              style={{ x: contentX, opacity: contentOpacity }}
              className={styles.desktopText}
            >
              {icon && <div className="mb-4">{icon}</div>}
              {title && <h2>{title}</h2>}
              {description && <p className="mt-4">{description}</p>}
            </motion.div>

            <motion.div style={{ x }} className={styles.desktopCards}>
              {cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        // Mobile / Tablet
        <div className={styles.mobileSection}>
          {/* Header */}
          <div className={styles.mobileHeader}>
            {icon && <div>{icon}</div>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}

            {/* Swipe hint */}
            <div className={styles.swipeHint}>
              <i className="bi bi-arrow-left-right animate-pulse" />
              <span>Swipe to explore</span>
            </div>
          </div>

          {/* Carousel */}
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel}>
              {cards.map((card) => (
                <div key={card.id} className={styles.carouselItem}>
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HorizontalScrollCarousel;
