import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import "./NumberReveal.css";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

interface NumberRevealProps {
  title?: string;
  stats: StatItem[];
  className?: string;
}

const NumberReveal: React.FC<NumberRevealProps> = ({
  title,
  stats,
  className = "section",
}) => {
  const ref = useRef<HTMLElement>(null);

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
              {...stat}
              delay={index * 0.15}
              start={isInView}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

interface AnimatedNumberProps extends StatItem {
  delay: number;
  start: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  label,
  suffix = "",
  decimals = 0,
  delay,
  start,
}) => {
  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    damping: 25,
    stiffness: 50,
    mass: 1.5,
  });

  const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!start) return;

    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [start, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      const formatted = formatter.format(Number(latest.toFixed(decimals)));
      setDisplayValue(formatted);
    });

    return () => unsubscribe();
  }, [spring, formatter, decimals]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {displayValue}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default NumberReveal;
