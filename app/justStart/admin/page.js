"use client";

import { useState } from "react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("users");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <div>
            <h2>Manage Users</h2>
            <p>View, edit, or delete user accounts.</p>
            {/* Add user management functionality here */}
          </div>
        );
      case "subscriptions":
        return (
          <div>
            <h2>Manage Subscription Plans</h2>
            <p>View and update subscription plans.</p>
            {/* Add subscription management functionality here */}
          </div>
        );
      case "invoicing":
        return (
          <div>
            <h2>Manage Invoicing Features</h2>
            <p>Configure and update invoicing settings.</p>
            {/* Add invoicing management functionality here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-page">
      <header className="header">
        <div className="logo">Admin Dashboard</div>
      </header>

      <nav className="admin-nav">
        <button
          className={`nav-button ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={`nav-button ${activeTab === "subscriptions" ? "active" : ""}`}
          onClick={() => setActiveTab("subscriptions")}
        >
          Subscriptions
        </button>
        <button
          className={`nav-button ${activeTab === "invoicing" ? "active" : ""}`}
          onClick={() => setActiveTab("invoicing")}
        >
          Invoicing
        </button>
      </nav>

      <main className="admin-content">{renderContent()}</main>

      <style jsx>{`
        .admin-page {
          font-family: "JetBrains Mono", monospace;
          padding: 20px;
        }

        .header {
          background: #0070f3;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .admin-nav {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .nav-button {
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px 20px;
          margin: 0 10px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .nav-button.active {
          background: #0070f3;
          color: white;
          border-color: #005bb5;
        }

        .nav-button:hover {
          background: #eaeaea;
        }

        .admin-content {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}