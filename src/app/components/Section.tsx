"use client";
import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  backgroundClassName?: string;
  backgroundStyle?: CSSProperties;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  backgroundImage?: string;
  backgroundElement?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  style,
  backgroundClassName,
  backgroundStyle,
  contentClassName,
  contentStyle,
  backgroundImage,
  backgroundElement,
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }} // starting position
      whileInView={{ opacity: 1, y: 0 }} // animate into place
      viewport={{ once: true, amount: 0.2 }} // only animate the first time
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {(backgroundClassName || backgroundImage || backgroundElement) && (
        <motion.div
          className={backgroundClassName}
          style={{
            ...backgroundStyle,
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {backgroundElement}
        </motion.div>
      )}

      <motion.div
        className={contentClassName}
        style={{ ...contentStyle }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
