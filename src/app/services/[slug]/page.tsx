import Section from "@/app/components/Section";
import ServiceContent from "./ServiceContent";
import { serviceData } from "@/app/data/serviceData";

interface ServicePageProps {
  params: { slug: string };
}

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

  return <ServiceContent service={service} />;
}
