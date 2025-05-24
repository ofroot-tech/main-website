"use client";

import { useState } from "react";

export default function ManageSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Basic", price: "$10/month", features: ["Branding Tools", "Customer Management"] },
    { id: 2, name: "Pro", price: "$25/month", features: ["All Basic Features", "AI-Powered Blog Creation", "Smart Forms & Booking"] },
    { id: 3, name: "Enterprise", price: "Custom Pricing", features: ["All Pro Features", "Dedicated Support", "Custom Integrations"] },
  ]);

  const handleDelete = (id) => {
    const updatedSubscriptions = subscriptions.filter((plan) => plan.id !== id);
    setSubscriptions(updatedSubscriptions);
  };

  const handleEdit = (id) => {
    alert(`Edit subscription plan with ID: ${id}`);
    // Add your edit logic here
  };

  return (
    <div className="manage-subscriptions-page">
      <header className="header">
        <h1>Manage Subscriptions</h1>
      </header>

      <main className="main">
        <table className="subscriptions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Features</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.id}</td>
                <td>{plan.name}</td>
                <td>{plan.price}</td>
                <td>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(plan.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(plan.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <style jsx>{`
        .manage-subscriptions-page {
          font-family: "JetBrains Mono", monospace;
          padding: 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 2rem;
          color: #333;
        }

        .main {
          max-width: 800px;
          margin: auto;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .subscriptions-table {
          width: 100%;
          border-collapse: collapse;
        }

        .subscriptions-table th,
        .subscriptions-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .subscriptions-table th {
          background: #f9f9f9;
          font-weight: bold;
        }

        .subscriptions-table ul {
          margin: 0;
          padding-left: 20px;
        }

        .edit-button,
        .delete-button {
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          margin-right: 5px;
        }

        .edit-button {
          background: #0070f3;
          color: white;
        }

        .edit-button:hover {
          background: #005bb5;
        }

        .delete-button {
          background: #ff4d4f;
          color: white;
        }

        .delete-button:hover {
          background: #d9363e;
        }
      `}</style>
    </div>
  );
}