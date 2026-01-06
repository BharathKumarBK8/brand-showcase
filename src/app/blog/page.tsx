"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link
import styles from "./BlogPage.module.css";

const posts = [
  {
    id: 1,
    slug: "regular-dental-cleaning",
    title: "Why Regular Dental Cleaning Matters",
    excerpt:
      "Routine dental cleanings help prevent cavities, gum disease, and keep your smile healthy.",
    category: "Hygiene",
    date: "Mar 12, 2025",
    readTime: "4 min read",
    image: "/blog/cleaning.jpg",
  },
  {
    id: 2,
    slug: "children-dental-care-tips",
    title: "Top 5 Tips for Children’s Dental Care",
    excerpt:
      "Good oral habits start early. Learn how to protect your child’s smile from day one.",
    category: "Kids",
    date: "Mar 8, 2025",
    readTime: "5 min read",
    image: "/blog/kids.jpg",
  },
  {
    id: 3,
    slug: "teeth-whitening-guide",
    title: "Teeth Whitening: What You Should Know",
    excerpt:
      "Thinking about whitening your teeth? Here’s what’s safe, effective, and recommended.",
    category: "Cosmetic",
    date: "Mar 3, 2025",
    readTime: "3 min read",
    image: "/blog/whitening.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dental Care Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Expert tips, oral health guides, and updates from Dr. Joe’s Dental
          Clinic.
        </motion.p>
      </section>

      {/* Featured Post */}
      <section className={styles.featured}>
        <motion.article
          className={styles.featuredCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/blog/${posts[0].slug}`}>
            <img src={posts[0].image} alt={posts[0].title} />
          </Link>
          <div className={styles.featuredContent}>
            <span className={styles.tag}>{posts[0].category}</span>
            <h2>
              <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
            </h2>
            <p>{posts[0].excerpt}</p>
            <div className={styles.meta}>
              {posts[0].date} · {posts[0].readTime}
            </div>
          </div>
        </motion.article>
      </section>

      {/* Blog Grid */}
      <section className={styles.grid}>
        {posts.slice(1).map((post, i) => (
          <motion.article
            key={post.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <img src={post.image} alt={post.title} />
            </Link>
            <div className={styles.cardContent}>
              <span className={styles.tag}>{post.category}</span>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className={styles.meta}>
                {post.date} · {post.readTime}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
