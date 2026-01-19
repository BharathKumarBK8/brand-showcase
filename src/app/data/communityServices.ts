export interface CommunityService {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  fullDescription: string;
  venue: string;
  timings: string;
  participants: number;
  gallery: string[];
}

export const communityServicesData: CommunityService[] = [
  {
    id: 1,
    slug: "free-dental-camp",
    title: "Free Dental Checkup Camp",
    category: "Dental Health Awareness",
    shortDescription:
      "Join our free dental checkup camp and get expert consultation on oral health.",
    date: "Jan 25, 2026",
    readTime: "4 min read",
    image: "/assets/community-services/CommunityService2.webp",
    fullDescription:
      "Our dental camp provided free checkups, fluoride treatments, and oral hygiene guidance for children and families. Over 50 participants received personalized advice from our experienced dentists. Every smile counts!",
    venue: "Sunshine Dental Clinic, Main Street",
    timings: "10:00 AM - 4:00 PM",
    participants: 52,
    gallery: [
      "/assets/community-services/CommunityService1.webp",
      "/assets/community-services/CommunityService2.webp",
      "/assets/community-services/CommunityService3.webp",
      "/assets/community-services/CommunityService4.webp",
    ],
  },
];
