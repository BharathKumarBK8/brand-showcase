import Section from "@/app/components/Section";
import ServiceContent from "./ServiceContent";
import { serviceData } from "@/app/data/serviceData";
import { Metadata } from "next";

interface ServicePageProps {
  params: { slug: string };
}

/* ------------------------------------------------------------------ */
/* Metadata                                                           */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return {
      title: "Service Not Found | Dr. Joe's Dental Hospital",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Dr. Joe's Dental Hospital`,
    description:
      service.excerpt ||
      "Learn more about our dental services at Dr. Joe's Hospital.",
    openGraph: {
      title: `${service.title} | Dr. Joe's Dental Hospital`,
      description:
        service.excerpt ||
        "Learn more about our dental services at Dr. Joe's Hospital.",
      url: `https://www.drjoedental.com/services/${slug}`,
      siteName: "Dr. Joe's Dental Hospital",
      images: service.image
        ? [
            {
              url: service.image,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Dr. Joe's Dental Hospital`,
      description:
        service.excerpt ||
        "Learn more about our dental services at Dr. Joe's Hospital.",
      images: service.image ? [service.image] : [],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Static Params                                                      */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/* Page Component                                                     */
/* ------------------------------------------------------------------ */
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <main>
        <Section bgColor="#fff" textColor="#000">
          <h1>Service Not Found</h1>
          <p>Sorry, the service you are looking for does not exist.</p>
        </Section>
      </main>
    );
  }

  return (
    <>
      <ServiceContent service={service} />
    </>
  );
}
