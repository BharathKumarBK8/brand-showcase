import "./Card.css";

export type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="card">
      <p className="card-title">{card.title}</p>

      <div
        className="card-bg"
        style={{ backgroundImage: `url(${card.url})` }}
      ></div>

      <p className="card-description">{card.description}</p>
    </div>
  );
};

export default Card;

export const cards: CardType[] = [
  {
    url: "../assets/section4.jpg",
    title: "Event Production Hub",
    description: "Professional planning and production for live events.",
    id: 1,
  },
  {
    url: "../assets/section5.jpg",
    title: "Documentary Film-Making",
    description: "Capturing real stories with cinematic filmmaking.",
    id: 2,
  },
  {
    url: "../assets/section6.jpg",
    title: "Talent Shows & Competition",
    description: "Organizing talent showcases and creative competitions.",
    id: 3,
  },
];
