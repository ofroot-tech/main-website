"use client";

import { useState } from "react";

export default function PaymentStatus({ onClose }) {
  const [formData, setFormData] = useState({
    paymentStatus: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/payment-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Payment status updated successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to update payment status.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-status-form">
      <h2>Payment Status</h2>
      <label>
        Payment Status:
        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="partially_paid">Partially Paid</option>
          <option value="overdue">Overdue</option>
        </select>
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
        .payment-status-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .payment-status-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .payment-status-form select,
        .payment-status-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .payment-status-form textarea {
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