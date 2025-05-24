"use client";

import { useState } from "react";

export default function TimeTrackingIntegration({ onClose }) {
  const [formData, setFormData] = useState({
    enableTimeTracking: false,
    hourlyRate: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/time-tracking-integration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Time tracking settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save time tracking settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="time-tracking-integration-form">
      <h2>Time Tracking Integration</h2>
      <label>
        Enable Time Tracking:
        <input
          type="checkbox"
          name="enableTimeTracking"
          checked={formData.enableTimeTracking}
          onChange={handleChange}
        />
      </label>
      <label>
        Hourly Rate:
        <input
          type="number"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleChange}
          placeholder="Enter hourly rate"
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
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .time-tracking-integration-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .time-tracking-integration-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .time-tracking-integration-form input,
        .time-tracking-integration-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .time-tracking-integration-form textarea {
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