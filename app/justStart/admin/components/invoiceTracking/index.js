"use client";

import { useState } from "react";

export default function InvoiceTracking({ onClose }) {
  const [formData, setFormData] = useState({
    enableTracking: false,
    notifyOnView: false,
    notifyOnPayment: false,
    notifyOnOverdue: false,
  });

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-laravel-backend.com/api/invoice-tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Invoice tracking settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save invoice tracking settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-tracking-form">
      <h2>Invoice Tracking</h2>
      <label>
        Enable Tracking:
        <input
          type="checkbox"
          name="enableTracking"
          checked={formData.enableTracking}
          onChange={handleChange}
        />
      </label>
      <label>
        Notify on Invoice View:
        <input
          type="checkbox"
          name="notifyOnView"
          checked={formData.notifyOnView}
          onChange={handleChange}
        />
      </label>
      <label>
        Notify on Payment:
        <input
          type="checkbox"
          name="notifyOnPayment"
          checked={formData.notifyOnPayment}
          onChange={handleChange}
        />
      </label>
      <label>
        Notify on Overdue:
        <input
          type="checkbox"
          name="notifyOnOverdue"
          checked={formData.notifyOnOverdue}
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
        .invoice-tracking-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .invoice-tracking-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .invoice-tracking-form input {
          margin-top: 5px;
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
