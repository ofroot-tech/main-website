"use client";

import { useState } from "react";

export default function ServiceHistoryLookup({ onClose }) {
  const [formData, setFormData] = useState({
    customerId: "",
    serviceName: "",
    dateRangeStart: "",
    dateRangeEnd: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/service-history-lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Service history retrieved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to retrieve service history.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="service-history-lookup-form">
      <h2>Service History Lookup</h2>
      <label>
        Customer ID:
        <input
          type="text"
          name="customerId"
          value={formData.customerId}
          onChange={handleChange}
          placeholder="Enter customer ID"
          required
        />
      </label>
      <label>
        Service Name:
        <input
          type="text"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          placeholder="Enter service name"
        />
      </label>
      <label>
        Date Range Start:
        <input
          type="date"
          name="dateRangeStart"
          value={formData.dateRangeStart}
          onChange={handleChange}
        />
      </label>
      <label>
        Date Range End:
        <input
          type="date"
          name="dateRangeEnd"
          value={formData.dateRangeEnd}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="submit-button">
        Search
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .service-history-lookup-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .service-history-lookup-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .service-history-lookup-form input {
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