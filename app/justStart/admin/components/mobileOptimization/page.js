"use client";

import { useState } from "react";

export default function MobileOptimization({ onClose }) {
  const [formData, setFormData] = useState({
    enableMobileOptimization: false,
    supportedDevices: "",
    notes: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/mobile-optimization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mobile optimization settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save mobile optimization settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mobile-optimization-form">
      <h2>Mobile Optimization</h2>
      <label>
        Enable Mobile Optimization:
        <input
          type="checkbox"
          name="enableMobileOptimization"
          checked={formData.enableMobileOptimization}
          onChange={handleChange}
        />
      </label>
      <label>
        Supported Devices:
        <input
          type="text"
          name="supportedDevices"
          value={formData.supportedDevices}
          onChange={handleChange}
          placeholder="Enter supported devices (e.g., iOS, Android)"
        />
      </label>
      <label>
        Notes:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Enter any additional notes"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .mobile-optimization-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-optimization-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .mobile-optimization-form input,
        .mobile-optimization-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .mobile-optimization-form textarea {
          resize: vertical;
          min-height: 80px;
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