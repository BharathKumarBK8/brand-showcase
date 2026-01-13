"use client";

import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  sticky?: boolean;
  bgImage?: string;
  bgColor?: string;
  style?: React.CSSProperties;
  textColor?: string;
  overlay?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  id,
  sticky,
  bgImage,
  bgColor,
  style,
  textColor = "#000",
  overlay = false,
  children,
  className = "",
}: SectionProps) => (
  <section
    id={id}
    className={`${styles.section} ${sticky ? styles.sticky : ""} ${className}`}
    style={{
      backgroundColor: bgColor,
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      color: textColor,
      ...style,
    }}
  >
    {overlay && <div className={styles.overlay} />}
    <div className={styles.sectionContent}>{children}</div>
  </section>
);

export default Section;
