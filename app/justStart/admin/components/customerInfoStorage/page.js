"use client";

import { useState } from "react";

export default function CustomerInfoStorage({ onClose }) {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/customer-info-storage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Customer information saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save customer information.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="customer-info-storage-form">
      <h2>Customer Information Storage</h2>
      <label>
        Customer Name:
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter customer address"
        />
      </label>
      <label>
        Notes:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Additional notes about the customer"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .customer-info-storage-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .customer-info-storage-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .customer-info-storage-form input,
        .customer-info-storage-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .customer-info-storage-form textarea {
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