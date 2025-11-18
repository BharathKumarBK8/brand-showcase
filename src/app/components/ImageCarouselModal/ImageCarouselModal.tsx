// components/ImageCarouselModal/ImageCarouselModal.tsx

import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarouselModal.css";

interface ImageCarouselModalProps {
  images: string[];
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  images,
  onClose,
}) => {
  // Prevent body from scrolling when modal is open
  useEffect(() => {
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden"; // Prevent scrolling
    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="carousel-modal-overlay">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
        >
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
