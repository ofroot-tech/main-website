"use client";

import { useState } from "react";

export default function ItemizedServices({ onClose }) {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDescription: "",
    price: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/itemized-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Itemized service added successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to add itemized service.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="itemized-services-form">
      <h2>Itemized Services</h2>
      <label>
        Service Name:
        <input
          type="text"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Service Description:
        <textarea
          name="serviceDescription"
          value={formData.serviceDescription}
          onChange={handleChange}
          placeholder="Enter a brief description of the service"
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="submit-button">
        Add Service
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .itemized-services-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .itemized-services-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .itemized-services-form input,
        .itemized-services-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .itemized-services-form textarea {
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