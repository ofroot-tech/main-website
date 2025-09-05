"use client";

import { useState } from "react";

export default function CustomizableInvoiceTemplates({ onClose }) {
  const [formData, setFormData] = useState({
    businessName: "",
    logoUrl: "",
    templateColor: "#ffffff",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-laravel-backend.com/api/customizable-invoice-templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Invoice template saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save invoice template.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="customizable-invoice-templates-form">
      <h2>Customizable Invoice Templates</h2>
      <label>
        Business Name:
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Logo URL:
        <input
          type="url"
          name="logoUrl"
          value={formData.logoUrl}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Template Color:
        <input
          type="color"
          name="templateColor"
          value={formData.templateColor}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .customizable-invoice-templates-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .customizable-invoice-templates-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .customizable-invoice-templates-form input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .submit-button {
          padding: 12px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
        }

        .submit-button:hover {
          background: #005bb5;
        }

        .close-button {
          padding: 10px 20px;
          background: #f44336;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }

        .close-button:hover {
          background: #d32f2f;
        }
      `}</style>
    </form>
  );
}

export default function Page() {
  return null;
}