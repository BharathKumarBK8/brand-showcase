import React from "react";
import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";
import "./ImageCarouselModal.css";

interface ImageCarouselModalProps {
  images: string[];
  visible: boolean;
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  images,
  visible,
  onClose,
}) => {
  const imageTemplate = (image: string) => (
    <img
      src={image}
      alt="Gallery image"
      style={{
        maxHeight: "70dvh",
        objectFit: "contain",
        width: "100%",
        borderRadius: "8px",
      }}
    />
  );

  return (
    <Dialog
      visible={visible}
      onHide={onClose}
      modal
      blockScroll={true}
      draggable={false}
      className="modalWrapper"
    >
      <Carousel
        value={images}
        itemTemplate={imageTemplate}
        numVisible={1}
        numScroll={1}
        circular
        showNavigators
        showIndicators
      />
    </Dialog>
  );
};

export default ImageCarouselModal;
