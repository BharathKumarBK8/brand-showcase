"use client";
import Events from "./components/Events";
import HorizontalScrollCarousel from "./components/HorizontalScroller/HorizontalScrollCarousel";
import Section from "./components/Section";
import StickyEnquiriesButton from "./StickyEnquiriesButton";
import { useEnquiryForm } from "./context/EnquiryFormContext";
import { MdLayers } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const { openForm } = useEnquiryForm();

  return (
    <>
      <Section
        id="hero"
        className="section section-hero"
        backgroundClassName="background"
        backgroundImage="/assets/heroBg.webp"
        contentStyle={{ zIndex: "1" }}
      >
        <h1 style={{ color: "white" }}>
          We Bring <span>Ideas</span> to Life
        </h1>
        <p style={{ color: "whitesmoke" }}>
          At <strong>R2 Media</strong>, we transform ideas into unforgettable
          experiences through<strong> stunning visuals</strong>,
          <strong> captivating videos</strong>, and
          <strong> seamless event productions</strong>.
        </p>
        <button className="cta" onClick={openForm}>
          Let's Create Together
        </button>
      </Section>
      <Section id="works">
        <Events />
      </Section>
      <Section>
        <HorizontalScrollCarousel
          id="services"
          title=" 
        SERVICES"
          description="A creative production studio delivering compelling visual experiences that bring events, products, and brands to life—combining photography, videography, and storytelling to make every project memorable."
          icon={<MdLayers className="icon" />}
        />
      </Section>
      <Section
        id="contact"
        className="section"
        style={{ background: "lab(7.78201% -.0000149012 0)" }}
      >
        <div className="section-content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaLocationDot className="icon" />
            <h2>Visit Us</h2>
          </div>
          <div>
            <Link
              href={"https://maps.app.goo.gl/U67aQEpvTRwooyte8"}
              className="location-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Land Mark, No. 6, First Floor, Sri Shopping Complex Vasu Nagar
              2nd Street, New, Natham Rd, above Chennai Kulfi, Naganakulam,
              Madurai, Tamil Nadu 625014
            </Link>

            <p>📞 (+91) 63691 98911</p>
            <ul
              style={{ listStyleType: "none", padding: 0, marginTop: "1rem" }}
            >
              <li>
                🕒 <strong>Monday - Sunday:</strong> 10:00 AM – 9:00 PM
              </li>
            </ul>
          </div>
        </div>

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

      <StickyEnquiriesButton />
    </>
  );
}
