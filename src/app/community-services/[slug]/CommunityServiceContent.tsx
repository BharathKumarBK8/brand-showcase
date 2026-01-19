// src/app/community-services/[slug]/CommunityServicesContent.tsx
"use client";

import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

interface Service {
  title: string;
  venue: string;
  date: string;
  timings: string;
  fullDescription: string;
  gallery: string[];
}

interface Props {
  service: Service;
}

export default function CommunityServicesContent({ service }: Props) {
  return (
    <main
      style={{
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "3rem auto 2rem",
          padding: "4rem 1.25rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          {service.title}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.95rem",
            color: "#333",
          }}
        >
          <span>{service.venue}</span>
          <span>{service.date}</span>
          <span>{service.timings}</span>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            borderBottom: "1px solid #e0e0e0",
          }}
        />
      </section>

      {/* ================= MEDIA (CAROUSEL) ================= */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 3rem",
          padding: "0 1.25rem",
        }}
      >
        <div
          style={{
            border: "1px solid #222",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#111",
          }}
        >
          <Carousel
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable
            emulateTouch
          >
            {service.gallery.map((img, i) => (
              <div key={i} className="carousel-image-wrapper">
                <img src={img} alt={`Event image ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.85rem",
            color: "#666",
            textAlign: "right",
          }}
        >
          {service.gallery.length} images
        </p>
      </section>

      {/* ================= SUMMARY ================= */}
      <section
        style={{
          maxWidth: "820px",
          margin: "0 auto 4rem",
          padding: "0 1.25rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Summary
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#333",
          }}
        >
          {service.fullDescription}
        </p>
      </section>

      {/* ================= BACK LINK ================= */}
      <div
        style={{
          textAlign: "center",
          padding: "2.5rem 1.25rem",
        }}
      >
        <Link
          href="/community-services"
          style={{
            fontSize: "0.9rem",
            color: "rgb(0,148,255)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          ← Back to community services
        </Link>
      </div>
    </main>
  );
}
