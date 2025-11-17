import HorizontalScrollCarousel from "./components/HorizontalScroller/HorizontalScrollCarousel";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Section
        id="hero"
        className="section section-hero"
        backgroundClassName="background"
        backgroundImage="/assets/heroBg.webp"
        /* backgroundStyle={{ inset: "-12%", backgroundPosition: "center" }} */
        contentStyle={{
          zIndex: "1",
        }}
      >
        <h1 style={{ color: "white" }}>
          We Bring <span>Ideas</span> to Life
        </h1>
        <p style={{ color: "whitesmoke" }}>
          At <strong>R2 Media</strong>, we craft unforgettable experiences
          through <strong>Event Management</strong>,{" "}
          <strong>Video Production</strong>, <strong>Photography</strong>, and{" "}
          <strong>Creative Advertising</strong>.
        </p>
        <button className="cta">Let’s Create Together</button>
      </Section>
      <HorizontalScrollCarousel id="services" />
      <Section id="contact" className="section">
        <h2>Visit Us</h2>
        <p>
          📍 Land Mark, No. 6, First Floor, Sri Shopping Complex Vasu Nagar 2nd
          Street, New, Natham Rd, above Chennai Kulfi, Naganakulam, Madurai,
          Tamil Nadu 625014
        </p>
        <p>📞 (+91) 63691 98911</p>
        <ul style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}>
          <li>
            🕒 <strong>Monday - Sunday:</strong> 10:00 AM – 9:00 PM
          </li>
        </ul>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6507183052327!2d78.13241367450804!3d9.962990373671559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c73ec42b4d9b%3A0x3f602ac0e0146e!2sR2%20Media!5e0!3m2!1sen!2sin!4v1757500127453!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
    </>
  );
}
