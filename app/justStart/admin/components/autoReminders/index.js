"use client";

import { useState } from "react";

export default function AutoRemindersForm({ onClose }) {
  const [formData, setFormData] = useState({
    reminderType: "",
    reminderInterval: "",
    emailTemplate: "",
    smsTemplate: "",
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
      const response = await fetch("https://your-laravel-backend.com/api/auto-reminders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Auto Reminder settings saved successfully!");
        onClose(); // Close the modal after successful submission
      } else {
        alert("Failed to save Auto Reminder settings.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auto-reminders-form">
      <h2>Auto Reminders</h2>
      <label>
        Reminder Type:
        <select name="reminderType" value={formData.reminderType} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="both">Both</option>
        </select>
      </label>
      <label>
        Reminder Interval (in days):
        <input
          type="number"
          name="reminderInterval"
          value={formData.reminderInterval}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email Template:
        <textarea
          name="emailTemplate"
          value={formData.emailTemplate}
          onChange={handleChange}
          placeholder="Enter email template content"
        />
      </label>
      <label>
        SMS Template:
        <textarea
          name="smsTemplate"
          value={formData.smsTemplate}
          onChange={handleChange}
          placeholder="Enter SMS template content"
        />
      </label>
      <button type="submit" className="submit-button">
        Save
      </button>
      <button type="button" className="close-button" onClick={onClose}>
        Close
      </button>

      <style jsx>{`
        .auto-reminders-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .auto-reminders-form label {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          color: #555;
        }

        .auto-reminders-form input,
        .auto-reminders-form select,
        .auto-reminders-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
        }

        .auto-reminders-form textarea {
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
