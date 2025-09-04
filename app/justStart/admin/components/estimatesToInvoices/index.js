"use client";

import { useState } from "react";

export default function EstimatesToInvoices({ onClose }) {
  const [formData, setFormData] = useState({
    estimateId: "",
    invoiceDate: "",
    notes: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/estimates-to-invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Estimate successfully converted to invoice!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to convert estimate to invoice.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="estimates-to-invoices-form">
      <h2>Convert Estimate to Invoice</h2>
      <label>
        Estimate ID:
        <input
          type="text"
          name="estimateId"
          value={formData.estimateId}
          onChange={handleChange}
          placeholder="Enter the estimate ID"
          required
        />
      </label>
      <label>
        Invoice Date:
        <input
          type="date"
          name="invoiceDate"
          value={formData.invoiceDate}
          onChange={handleChange}
          required
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
        Convert
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .estimates-to-invoices-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .estimates-to-invoices-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .estimates-to-invoices-form input,
        .estimates-to-invoices-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .estimates-to-invoices-form textarea {
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
