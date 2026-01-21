"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CommunityServicesPage.module.css";
import { communityServicesData } from "../data/communityServices";

export default function CommunityServicesPage() {
  return (
    <main className={styles.communityPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Community Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore our community programs, free dental camps, and oral health
          initiatives.
        </motion.p>
      </section>

      {/* Featured Service */}
      <section className={styles.featured}>
        <motion.article
          className={styles.featuredCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/community-services/${communityServicesData[0].slug}`}>
            <img
              src={communityServicesData[0].image}
              alt={communityServicesData[0].title}
              loading="lazy"
            />
          </Link>
          <div className={styles.featuredContent}>
            <span className={styles.tag}>
              {communityServicesData[0].category}
            </span>
            <h2>
              <Link
                href={`/community-services/${communityServicesData[0].slug}`}
              >
                {communityServicesData[0].title}
              </Link>
            </h2>
            <p>{communityServicesData[0].excerpt}</p>
            <div className={styles.meta}>
              {communityServicesData[0].date} ·{" "}
              {communityServicesData[0].readTime}
            </div>
          </div>
        </motion.article>
      </section>

      {/* Services Grid */}
      <section className={styles.grid}>
        {communityServicesData.slice(1).map((service, i) => (
          <motion.article
            key={service.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <Link href={`/community-services/${service.slug}`}>
              <img src={service.image} alt={service.title} loading="lazy" />
            </Link>
            <div className={styles.cardContent}>
              <span className={styles.tag}>{service.category}</span>
              <h3>
                <Link href={`/community-services/${service.slug}`}>
                  {service.title}
                </Link>
              </h3>
              <p>{service.excerpt}</p>
              <div className={styles.meta}>
                {service.date} · {service.readTime}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
