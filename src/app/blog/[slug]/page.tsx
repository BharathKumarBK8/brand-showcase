import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import styles from "../BlogPage.module.css";
import ReactMarkdown from "react-markdown";

/* ------------------------------------------------------------------ */
/* Blog Data                                                          */
/* ------------------------------------------------------------------ */

const blogs = [
  {
    id: 1,
    slug: "minor-surgical-procedures",
    title: "Minor Surgical Procedures in Dentistry",
    excerpt:
      "Minimally invasive dental surgeries that treat common oral health issues safely and effectively.",
    category: "Surgery",
    date: "Jan 13, 2026",
    readTime: "4 min read",
    image: "/assets/blog1.webp",
    tags: [
      "Minor Oral Surgery",
      "Dental Surgery Madurai",
      "Tooth Extraction",
      "Gum Surgery",
      "Oral Health Care",
      "Dr Joe's Dental Hospital",
    ],
    content: `
Minor surgical procedures in dentistry are designed to treat common oral health problems using minimally invasive techniques, usually performed under local anesthesia. These procedures help manage conditions such as impacted teeth, gum infections, and soft-tissue abnormalities while ensuring patient comfort and faster recovery.

At Dr. Joe’s Dental Hospital, patients receive expert minor oral surgical care that restores function and prevents future complications.

## Common Types of Minor Dental Procedures

Dr. Joe’s Dental Hospital provides a wide range of minor surgical treatments, including:

- Tooth extractions to remove severely damaged, decayed, or impacted teeth
- Gum surgeries (gingivectomy) to treat gum disease and improve oral hygiene
- Frenectomy to correct restricted tongue or lip movement
- Abscess drainage and oral biopsies for infection control and early detection
- Apicoectomy to save teeth when root canal treatment is unsuccessful
- Alveoloplasty to smooth jawbone surfaces after tooth extraction

## Why Minor Surgical Procedures Are Important

Minor dental surgeries prevent oral health problems from progressing into serious conditions such as bone loss, chronic pain, or systemic infections. Early intervention restores chewing ability, speech, and appearance while improving overall confidence and nutrition.

## Expert Care at Dr. Joe’s Dental Hospital

Located in Appanthirupathi and Pasingapuram, Madurai, Dr. Joe’s Dental Hospital is known for providing patient-focused and reliable dental care.

## Benefits and Recovery

Most minor dental surgical procedures involve minimal discomfort and short recovery periods. Patients often return to normal activities within a few days.
`,
  },
];

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ------------------------------------------------------------------ */
/* Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | Dr. Joe's Dental Hospital`,
    description: blog.excerpt,
  };
}

/* ------------------------------------------------------------------ */
/* Static Params                                                      */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  return (
    <main className={styles.blogSlugPage}>
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.meta}>
            {blog.category} · {blog.date} · {blog.readTime}
          </p>

          <h1 className={styles.title}>{blog.title}</h1>

          <p className={styles.excerpt}>{blog.excerpt}</p>
        </header>

        {/* Image */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.blogImg}
              src={blog.image}
              alt={blog.title}
              fill
              priority
            />
          </div>
        </div>

        {/* Content */}
        <section className={styles.content}>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </section>

        {/* Tags */}
        <footer className={styles.tags}>
          <span>Tags:</span>
          {blog.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </footer>
      </article>
    </main>
  );
}
