"use client";

import { useState } from "react";

export default function MultiplePaymentMethods({ onClose }) {
  const [formData, setFormData] = useState({
    enableCreditCard: false,
    enableBankTransfer: false,
    enablePayPal: false,
    enableCash: false,
    notes: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/multiple-payment-methods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Payment methods settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save payment methods settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="multiple-payment-methods-form">
      <h2>Multiple Payment Methods</h2>
      <label>
        Enable Credit Card:
        <input
          type="checkbox"
          name="enableCreditCard"
          checked={formData.enableCreditCard}
          onChange={handleChange}
        />
      </label>
      <label>
        Enable Bank Transfer:
        <input
          type="checkbox"
          name="enableBankTransfer"
          checked={formData.enableBankTransfer}
          onChange={handleChange}
        />
      </label>
      <label>
        Enable PayPal:
        <input
          type="checkbox"
          name="enablePayPal"
          checked={formData.enablePayPal}
          onChange={handleChange}
        />
      </label>
      <label>
        Enable Cash:
        <input
          type="checkbox"
          name="enableCash"
          checked={formData.enableCash}
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
        .multiple-payment-methods-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .multiple-payment-methods-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .multiple-payment-methods-form input,
        .multiple-payment-methods-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .multiple-payment-methods-form textarea {
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