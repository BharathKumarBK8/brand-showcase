import { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import "./ParallaxGallery.css";

interface ParallaxGalleryProps {
  title?: string;
  description?: string;
  images: Array<{
    src: string;
    alt: string;
    animationType: "img1Y" | "img2Y" | "img3Y";
  }>;
  className?: string;
}

export const useParallaxGalleryAnimations = (
  scrollYProgress: MotionValue<number>,
) => ({
  img1Y: useTransform(scrollYProgress, [0, 1], [-60, 5]),
  img2Y: useTransform(scrollYProgress, [0, 1], [-40, 5]),
  img3Y: useTransform(scrollYProgress, [0, 1], [-60, 5]),
  imgZoom: useTransform(scrollYProgress, [0, 1], [1.15, 0.8]),
});

const ParallaxGallery: React.FC<ParallaxGalleryProps> = ({
  title,
  description,
  images,
  className = "portfolio",
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { img1Y, img2Y, img3Y, imgZoom } =
    useParallaxGalleryAnimations(scrollYProgress);

  const getYTransform = (type: string) => {
    switch (type) {
      case "img1Y":
        return img1Y;
      case "img2Y":
        return img2Y;
      case "img3Y":
        return img3Y;
      default:
        return img1Y;
    }
  };

  return (
    <motion.section ref={ref} className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ y: getYTransform(image.animationType), scale: imgZoom }}
          loading="lazy"
        />
      ))}
    </motion.section>
  );
};

export default ParallaxGallery;
