"use client";

import { useState } from "react";

export default function RecurringInvoices({ onClose }) {
  const [formData, setFormData] = useState({
    enableRecurring: false,
    frequency: "",
    startDate: "",
    endDate: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/recurring-invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Recurring invoice settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save recurring invoice settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recurring-invoices-form">
      <h2>Recurring Invoices</h2>
      <label>
        Enable Recurring Invoices:
        <input
          type="checkbox"
          name="enableRecurring"
          checked={formData.enableRecurring}
          onChange={handleChange}
        />
      </label>
      <label>
        Frequency:
        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          required
        >
          <option value="">Select Frequency</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Biweekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
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
        .recurring-invoices-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .recurring-invoices-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .recurring-invoices-form input,
        .recurring-invoices-form select,
        .recurring-invoices-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .recurring-invoices-form textarea {
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