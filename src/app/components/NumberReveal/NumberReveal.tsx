import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import "./NumberReveal.css";

interface NumberRevealProps {
  title?: string;
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
  }>;
  className?: string;
}

const NumberReveal: React.FC<NumberRevealProps> = ({
  title,
  stats,
  className = "section",
}) => {
  const ref = useRef<HTMLElement>(null);

  // Trigger once when section enters viewport
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="card">
        {title && <h2>{title}</h2>}

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <AnimatedNumber
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.15}
              start={isInView}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

interface AnimatedNumberProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  start: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  label,
  suffix = "",
  delay,
  start,
}) => {
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
    mass: 1,
  });

  const [displayValue, setDisplayValue] = useState(0);

  // Start animation once
  useEffect(() => {
    if (start) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [start, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default NumberReveal;
