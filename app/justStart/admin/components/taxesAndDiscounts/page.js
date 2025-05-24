"use client";

import { useState } from "react";

export default function TaxesAndDiscounts({ onClose }) {
  const [formData, setFormData] = useState({
    taxRate: "",
    discountName: "",
    discountAmount: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/taxes-and-discounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Taxes and discounts saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save taxes and discounts.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="taxes-and-discounts-form">
      <h2>Taxes and Discounts</h2>
      <label>
        Tax Rate (%):
        <input
          type="number"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Discount Name:
        <input
          type="text"
          name="discountName"
          value={formData.discountName}
          onChange={handleChange}
        />
      </label>
      <label>
        Discount Amount (%):
        <input
          type="number"
          name="discountAmount"
          value={formData.discountAmount}
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
        .taxes-and-discounts-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .taxes-and-discounts-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .taxes-and-discounts-form input {
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