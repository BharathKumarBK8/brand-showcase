import "./Card.css";
import { motion } from "framer-motion";

export type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div className="card" whileHover={{ scale: 1.05 }}>
      <p className="card-title">{card.title}</p>

      <div
        className="card-bg"
        style={{ backgroundImage: `url(${card.url})` }}
      ></div>

      <p className="card-description">{card.description}</p>
    </motion.div>
  );
};

export default Card;

export const cards: CardType[] = [
  {
    id: 1,
    url: "/assets/service1.jpg",
    title: "Event Production Hub",
    description: "Professional planning and production for live events.",
  },
  {
    id: 2,
    url: "/assets/service2.jpg",
    title: "Photography",
    description: "Capturing high-quality images that tell your story.",
  },
  {
    id: 3,
    url: "/assets/service3.jpg",
    title: "Videography",
    description: "Creating cinematic videos that engage and inspire audiences.",
  },
  {
    id: 4,
    url: "/assets/service4.jpg",
    title: "Product & Advertisement Shoots",
    description:
      "Capturing your products & creating compelling ads that grab attention and drive results.",
  },
  {
    id: 5,
    url: "/assets/service5.jpg",
    title: "Branding",
    description:
      "Crafting unique brand identities that leave a lasting impression.",
  },
  {
    id: 7,
    url: "/assets/service7.jpg",
    title: "Documentary",
    description: "Telling authentic stories that resonate with your audience.",
  },
];
