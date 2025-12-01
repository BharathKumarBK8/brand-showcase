"use client";
import React, { useState, useMemo } from "react";
import { Dropdown } from "primereact/dropdown";
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
        "../assets/jvh.jpg",
        "../assets/JVH-1.jpg",
        "../assets/JVH-2.jpg",
        "../assets/JVH-3.jpg",
        "../assets/JVH-4.jpg",
        "../assets/JVH-5.jpg",
        "../assets/JVH-6.jpg",
        "../assets/JVH-7.jpg",
      ],
      date: "April 19th, 2025",
    },
    {
      id: 2,
      title: "Grand Art Hunt",
      description: "Sample Description 2",
      images: [
        "../assets/gah.jpg",
        "../assets/GAH-1.webp",
        "../assets/GAH-2.webp",
        "../assets/GAH-3.webp",
        "../assets/GAH-4.webp",
        "../assets/GAH-5.webp",
        "../assets/GAH-6.webp",
      ],
      date: "May 2nd, 2025",
    },
    {
      id: 3,
      title: "Crown 64",
      description: "",
      images: [
        "../assets/crown64.jpg",
        "../assets/C64-1.webp",
        "../assets/C64-2.webp",
        "../assets/C64-3.webp",
        "../assets/C64-4.webp",
        "../assets/C64-5.webp",
        "../assets/C64-6.webp",
        "../assets/C64-7.webp",
        "../assets/C64-8.webp",
        "../assets/C64-9.webp",
        "../assets/C64-10.webp",
      ],
      date: "October 26th, 2025",
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

  /** Dropdown options */
  const yearOptions = useMemo(
    () => [
      { label: "All", value: "all" },
      ...availableYears.map((year) => ({
        label: year.toString(),
        value: year,
      })),
    ],
    [availableYears]
  );

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
      <div>
        <h2>OUR WORKS</h2>

        <p style={{ textAlign: "center", marginBottom: "3rem", opacity: 0.9 }}>
          Showcasing our expertise in event production, talent competitions, and
          documentary filmmaking. From dynamic live events to compelling
          storytelling, we bring your vision to life with creativity and
          professionalism.
        </p>

        {/* Year Filter */}
        <div style={{ marginBottom: "2rem", textAlign: "right" }}>
          <label style={{ marginRight: "10px" }}>Year:</label>
          <Dropdown
            value={selectedYear}
            options={yearOptions}
            onChange={(e) => setSelectedYear(e.value)}
          />
        </div>

        <GalleryGrid
          items={filteredItems}
          onItemClick={handleCardClick}
          showDate={true}
          actionText="Click to View Photos/Videos →"
        />

        {/* Carousel Modal */}
        {selectedImages && (
          <ImageCarouselModal
            visible={true}
            images={selectedImages}
            onClose={() => setSelectedImages(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
