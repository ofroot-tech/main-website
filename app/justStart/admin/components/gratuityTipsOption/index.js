"use client";

import { useState } from "react";

export default function GratuityTipsOption({ onClose }) {
  const [formData, setFormData] = useState({
    enableTips: false,
    defaultTipPercent: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-laravel-backend.com/api/gratuity-tips-option", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Gratuity/Tips settings saved successfully!");
        onClose();
      } else {
        alert("Failed to save Gratuity/Tips settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gratuity-tips-form">
      <h2>Gratuity / Tips</h2>
      <label>
        Enable Tips:
        <input
          type="checkbox"
          name="enableTips"
          checked={formData.enableTips}
          onChange={handleChange}
        />
      </label>
      <label>
        Default Tip Percentage:
        <input
          type="number"
          name="defaultTipPercent"
          value={formData.defaultTipPercent}
          onChange={handleChange}
          placeholder="Enter default tip percent"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .gratuity-tips-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .gratuity-tips-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .gratuity-tips-form input {
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
