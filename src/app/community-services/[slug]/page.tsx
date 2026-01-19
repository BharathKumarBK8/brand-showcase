// src/app/community-services/[slug]/page.tsx
import { communityServicesData } from "@/app/data/communityServices";
import CommunityServicesContent from "./CommunityServiceContent";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CommunityServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = communityServicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div style={{ padding: "4rem", textAlign: "center", color: "#000" }}>
        <h1>Service Not Found</h1>
        <a
          href="/community-services"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "rgb(0,148,255)",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Back to Services
        </a>
      </div>
    );
  }

  return <CommunityServicesContent service={service} />;
}
