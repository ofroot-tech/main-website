"use client";

import { useState } from "react";

export default function ExpenseTrackingIntegration({ onClose }) {
  const [formData, setFormData] = useState({
    expenseName: "",
    amount: "",
    category: "",
    associatedInvoice: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/expense-tracking-integration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Expense tracked successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to track expense.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-tracking-integration-form">
      <h2>Expense Tracking Integration</h2>
      <label>
        Expense Name:
        <input
          type="text"
          name="expenseName"
          value={formData.expenseName}
          onChange={handleChange}
          placeholder="Enter expense name"
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter expense amount"
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter expense category"
        />
      </label>
      <label>
        Associated Invoice (Optional):
        <input
          type="text"
          name="associatedInvoice"
          value={formData.associatedInvoice}
          onChange={handleChange}
          placeholder="Enter associated invoice ID"
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
        Save Expense
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .expense-tracking-integration-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .expense-tracking-integration-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .expense-tracking-integration-form input,
        .expense-tracking-integration-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .expense-tracking-integration-form textarea {
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
