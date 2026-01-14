"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./CommunityServicesPage.module.css";

const services = [
  {
    id: 1,
    slug: "free-dental-checkup",
    title: "Free Dental Checkup Camp",
    description:
      "Join our free dental checkup camp and get expert consultation on oral health.",
    category: "Health",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    image: "/assets/CommunityService2.webp",
  },
  /* {
    id: 2,
    slug: "oral-health-awareness",
    title: "Oral Health Awareness Program",
    description:
      "Educating the community about proper oral hygiene and preventive care.",
    category: "Education",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    image: "/assets/service2.jpg",
  },
  {
    id: 3,
    slug: "school-dental-camps",
    title: "School Dental Camps",
    description:
      "Providing dental checkups and guidance to children in local schools.",
    category: "Kids",
    date: "Jan 10, 2026",
    readTime: "3 min read",
    image: "/assets/service3.jpg",
  }, */
];

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
          <Link href={`/community-services/${services[0].slug}`}>
            <img src={services[0].image} alt={services[0].title} />
          </Link>
          <div className={styles.featuredContent}>
            <span className={styles.tag}>{services[0].category}</span>
            <h2>
              <Link href={`/community-services/${services[0].slug}`}>
                {services[0].title}
              </Link>
            </h2>
            <p>{services[0].description}</p>
            <div className={styles.meta}>
              {services[0].date} · {services[0].readTime}
            </div>
          </div>
        </motion.article>
      </section>

      {/* Services Grid */}
      <section className={styles.grid}>
        {services.slice(1).map((service, i) => (
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
              <img src={service.image} alt={service.title} />
            </Link>
            <div className={styles.cardContent}>
              <span className={styles.tag}>{service.category}</span>
              <h3>
                <Link href={`/community-services/${service.slug}`}>
                  {service.title}
                </Link>
              </h3>
              <p>{service.description}</p>
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
