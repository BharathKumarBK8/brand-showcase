export interface CommunityService {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  venue: string;
  timings: string;
  gallery: string[];
}

export const communityServicesData: CommunityService[] = [
  {
    id: 1,
    slug: "free-dental-camp",
    title: "Free Dental & Eye Camp at Madurai Vandiyur",
    venue: "Vandiyur, Madurai",
    category: "Community Health Initiative",
    excerpt:
      "A free dental and eye checkup camp at Vandiyur, Madurai by Dr. Joe’s Dental Hospital with TVK Party and Maxivision, benefiting 100+ patients.",
    date: "6th July 2025",
    readTime: "5 min read",
    image: "/assets/community-services/CommunityService3.webp",
    timings: "10 AM - 1 PM",
    gallery: [
      "/assets/community-services/CommunityService3.webp",
      "/assets/community-services/CommunityService2.webp",
      "/assets/community-services/CommunityService1.webp",
      "/assets/community-services/CommunityService4.webp",
    ],
    content:
      '## A Resounding Success by Dr. Joe’s Dental Hospital\n\nDr. Joe’s Dental Hospital, Appanthirupathi, successfully organized a **free dental and eye care camp at Vandiyur, Madurai**, in collaboration with the **TVK Party (Tamilaga Vetri Kazhagam)** and **Maxivision**. The event was honored by **Annan Madurai Vijay Anban** and provided **essential dental treatments and free eye checkups** to **over 100 patients**, many from underserved communities.\n\nMore than a medical camp, the initiative demonstrated that **quality oral and eye healthcare can be accessible to all**.\n\n---\n\n## Bringing Smiles and Clear Vision to Vandiyur\n\nThe camp began with great enthusiasm, attracting residents eager for professional care. The dental team from Dr. Joe’s Dental Hospital, led by **Dr. Joe Dany**, delivered comprehensive dental services, while **Maxivision** offered complimentary eye screenings.\n\nServices provided included:\n\n- Comprehensive oral check-ups, cleanings, and consultations\n- Painless fillings, extractions, and gum treatments\n- Fluoride applications and oral hygiene education with free kits\n- Free eye screenings by Maxivision, including vision tests and basic eye health assessments\n\nSpecial attention was given to **children, senior citizens, and individuals with limited access to dental or eye clinics**. The Vandiyur camp setup was hygienic, efficient, and equipped with modern tools to ensure patient comfort.\n\n---\n\n## Honored by Annan Madurai Vijay Anban\n\nThe event was further elevated by the presence of **Annan Madurai Vijay Anban**, who appreciated the collective efforts of the **TVK Party**, **Dr. Joe’s Dental Hospital**, and **Maxivision** in delivering holistic healthcare to the community.\n\n> *"Serving the people is our true victory."*\n\nHis words reflected the spirit of unity between public service and healthcare, reinforcing the message that **health begins with both eyes and smiles**.\n\n---\n\n## Why This Dental and Eye Camp Matters for Madurai\n\nIn Madurai, oral and vision health concerns often remain untreated due to cost and limited access. This camp addressed those challenges by offering **a one-stop wellness solution**, helping detect early issues such as dental decay, gum disease, and vision problems.\n\nOne attendee shared:\n> *"Painless dental treatment and a clear vision test — all free!"*\n\nThe camp’s success reflects Dr. Joe’s Dental Hospital’s mission to deliver **world-class healthcare beyond clinic walls**, strengthened through partnerships like Maxivision.\n\n---\n\n## Join the Smile and Vision Revolution at Dr. Joe’s\n\nThe **Free Dental and Eye Camp at Vandiyur** was a proud milestone, made possible by the support of TVK Party, Maxivision, and our dedicated team. More holistic community health initiatives are on the way — stay tuned.\n\nFor affordable dental care, visit **Dr. Joe’s Dental Hospital, Appanthirupathi**, or book your appointment online. Follow us on Instagram for updates and upcoming events.\n\n**Dr. Joe Dany, BDS (2015)**  \n*Managing Director, Dr. Joe’s Dental Hospital*',
  },
];
