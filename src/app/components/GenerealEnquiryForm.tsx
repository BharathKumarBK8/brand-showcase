import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "./GeneralEnquiryForm.css"; // Keep your existing colours

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="enquiry-form">
      <h1>Got a question? Let’s chat!</h1>
      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <InputText
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="animated-input"
        />

        <InputText
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="animated-input"
        />

        <InputText
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="animated-input"
        />

        <InputTextarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="animated-input"
        />

        <Button
          type="submit"
          label={submitting ? "Sending..." : "Send Message"}
          className="submit-btn"
          disabled={submitting}
        />

        {success && (
          <div
            style={{
              color: "rgb(205, 0, 1)",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Thank you! We’ll reply soon 😊
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
