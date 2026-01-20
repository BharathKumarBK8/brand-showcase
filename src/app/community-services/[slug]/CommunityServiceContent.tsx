"use client";

import Link from "next/link";
import styles from "@/app/blog/BlogPage.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import ReactMarkdown from "react-markdown";
import { CommunityService } from "@/app/data/communityServices";

interface Props {
  service: CommunityService;
}

export default function CommunityServicesContent({ service }: Props) {
  return (
    <main className={styles.blogSlugPage}>
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.meta}>
            {service.date} · {service.timings} · {service.category} ·{" "}
            {service.readTime}
          </p>

          <h1 className={styles.title}>{service.title}</h1>

          <p className={styles.excerpt}>{service.excerpt}</p>
        </header>

        {/* ================= MEDIA (CAROUSEL) ================= */}
        {service.gallery?.length > 0 && (
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
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                swipeable
                emulateTouch
              >
                {service.gallery.map((img, i) => (
                  <div key={i} className="carousel-image-wrapper">
                    <img
                      src={img}
                      alt={`${service.title} - image ${i + 1}`}
                      loading="lazy"
                    />
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
        )}

        {/* ================= Content ================= */}
        <section className={styles.content}>
          <ReactMarkdown>{service.content}</ReactMarkdown>
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
      </article>
    </main>
  );
}
