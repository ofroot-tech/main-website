"use client";

import { useState } from "react";

export default function DigitalSignatures({ onClose }) {
  const [formData, setFormData] = useState({
    enableSignatures: false,
    signatureType: "",
    instructions: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/digital-signatures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Digital signature settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save digital signature settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="digital-signatures-form">
      <h2>Digital Signatures</h2>
      <label>
        Enable Digital Signatures:
        <input
          type="checkbox"
          name="enableSignatures"
          checked={formData.enableSignatures}
          onChange={handleChange}
        />
      </label>
      <label>
        Signature Type:
        <select
          name="signatureType"
          value={formData.signatureType}
          onChange={handleChange}
          required
        >
          <option value="">Select Signature Type</option>
          <option value="draw">Draw Signature</option>
          <option value="type">Type Signature</option>
          <option value="upload">Upload Signature</option>
        </select>
      </label>
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Enter any instructions for the signer"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .digital-signatures-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .digital-signatures-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .digital-signatures-form input,
        .digital-signatures-form select,
        .digital-signatures-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .digital-signatures-form textarea {
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
