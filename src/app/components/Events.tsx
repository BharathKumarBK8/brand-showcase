"use client";
import React, { useState, useMemo } from "react";
import GalleryGrid, {
  GalleryItem,
} from "../components/GalleryGrid/GalleryGrid";
import ImageCarouselModal from "../components/ImageCarouselModal/ImageCarouselModal";

const Events: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const eventItems: GalleryItem[] = [
    {
      id: 1,
      title: "Junior Voice Hunt",
      description: "Sample Description 1",
      images: [
        "../assets/event1.jpg",
        "../assets/section1.jpg",
        "../assets/section2.jpg",
      ],
      date: "April 19th, 2024",
    },
    {
      id: 2,
      title: "Sample Event 2",
      description: "Sample Description 2",
      images: [
        "../assets/event2.jpg",
        "../assets/section3.jpg",
        "../assets/section4.jpg",
      ],
      date: "Month Day, 2023",
    },
  ];

  /** Extract year from a date string like:
   * "April 19th, 2024"
   * "Month Day, 2023"
   * "2022-05-04"
   */
  const extractYear = (dateString?: string): number | null => {
    if (!dateString) return null;
    const match = dateString.match(/\d{4}/);
    return match ? Number(match[0]) : null;
  };

  /** Unique list of available years */
  const availableYears = useMemo(() => {
    const set = new Set<number>();
    eventItems.forEach((item) => {
      const year = extractYear(item.date);
      if (year) set.add(year);
    });
    return Array.from(set).sort((a, b) => b - a);
  }, [eventItems]);

  /** Filter the items by year */
  const filteredItems = useMemo(() => {
    if (selectedYear === "all") return eventItems;

    return eventItems.filter((item) => extractYear(item.date) === selectedYear);
  }, [selectedYear, eventItems]);

  /** Opens image modal */
  const handleCardClick = (id: number) => {
    const selectedPost = eventItems.find((post) => post.id === id);
    if (selectedPost) {
      setSelectedImages(selectedPost.images);
    }
  };

  return (
    <div className="section">
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Works</h1>

        <p style={{ textAlign: "center", marginBottom: "3rem", opacity: 0.9 }}>
          Showcasing our expertise in event production, talent competitions, and
          documentary filmmaking. From dynamic live events to compelling
          storytelling, we bring your vision to life with creativity and
          professionalism.
        </p>

        {/* Year Filter */}
        <div style={{ marginBottom: "2rem", textAlign: "right" }}>
          <label style={{ marginRight: "10px" }}>Filter by Year:</label>
          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(
                e.target.value === "all" ? "all" : Number(e.target.value)
              )
            }
            style={{ padding: "6px 12px", borderRadius: "4px" }}
          >
            <option value="all">All</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <GalleryGrid
          items={filteredItems}
          onItemClick={handleCardClick}
          showDate={true}
          actionText="Read More →"
        />

        {/* Carousel Modal */}
        {selectedImages && (
          <ImageCarouselModal
            images={selectedImages}
            onClose={() => setSelectedImages(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
