import React from "react";
import "./GalleryGrid.css";

export interface GalleryItem {
  id: number;
  title: string;
  images: string[];
  date?: string;
  category?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick?: (id: number) => void;
  columns?: number;
  actionText?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  items,
  onItemClick,
  actionText = "Click to View Content →",
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  };

  return (
    <div className="gallery-grid" style={gridStyle}>
      {items.map((item) => (
        <div
          key={item.id}
          className="gallery-card"
          onClick={() => onItemClick?.(item.id)}
        >
          {/* Cover Image */}
          <div className="gallery-image-wrapper">
            <img
              src={item.images[0]}
              alt={item.title}
              className="gallery-thumbnail"
            />
          </div>

          {/* Bottom Section */}
          <div className="gallery-bottom">
            <div className="gallery-action">{actionText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
