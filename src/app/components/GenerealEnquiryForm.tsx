import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "./GeneralEnquiryForm.css";

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const toast = useRef<Toast>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Message sent successfully! We'll get back to you soon.",
          life: 5000,
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to send message. Please try again.",
          life: 5000,
        });
      }
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Network Error",
        detail: "Please check your connection and try again.",
        life: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquiry-form">
      <Toast ref={toast} />
      <h1>Got a question? Let's chat!</h1>
      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
        Fill out the form below and we'll get back to you as soon as possible.
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
          type="email"
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
      </form>
    </div>
  );
};

export default EnquiryForm;
