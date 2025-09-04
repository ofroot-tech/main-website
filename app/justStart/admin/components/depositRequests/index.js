"use client";

import { useState } from "react";

export default function DepositRequests({ onClose }) {
  const [formData, setFormData] = useState({
    depositAmount: "",
    depositPercentage: "",
    description: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/deposit-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Deposit request saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save deposit request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-requests-form">
      <h2>Deposit Requests</h2>
      <label>
        Deposit Amount:
        <input
          type="number"
          name="depositAmount"
          value={formData.depositAmount}
          onChange={handleChange}
          placeholder="Enter deposit amount"
          required
        />
      </label>
      <label>
        Deposit Percentage (%):
        <input
          type="number"
          name="depositPercentage"
          value={formData.depositPercentage}
          onChange={handleChange}
          placeholder="Enter deposit percentage"
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter a description for the deposit request"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .deposit-requests-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .deposit-requests-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .deposit-requests-form input,
        .deposit-requests-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .deposit-requests-form textarea {
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
