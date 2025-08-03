"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ManageUsers from "./components/admin/ManageUsers";
import ManageCustomers from "./components/admin/ManageCustomers";
import ManageInvoicing from "./components/admin/ManageInvoicing";
import CoreInvoicingFeatures from "./components/admin/CoreInvoicingFeatures";
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("users");
  const [menuOpen, setMenuOpen] = useState(false); // Added state for menu
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      // Redirect to login if no token is found
      router.push("/justStart/signIn");
    }
  }, [router]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <ManageUsers />;
      case "subscriptions":
        return (
          <div>
            <h2>Manage Subscription Plans</h2>
            <p>View and update subscription plans.</p>
            {/* Add subscription management functionality here */}
          </div>
        );
      case "invoicing":
        return <ManageInvoicing />;
      case "customers":
        return <ManageCustomers />;
      case "invoiceCreate":
        return <CoreInvoicingFeatures />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-page"> <header className="header">
        <div className="logo">OFROOT x JUST START</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>     
            <li>
                <Link href="/justStart">JUST START</Link>
              </li>     
                <hr></hr>
            <li>
              <a href="https://www.ofroot.health">OFROOT HEALTH</a>
            </li>
              <hr></hr>
          
                <li>
                <Link href="/justStart/signUp">Sign Up</Link>
              </li>     
                <hr></hr>
            {/* <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </header>
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
         <button
          className={`nav-button ${activeTab === "customers" ? "active" : ""}`}
          onClick={() => setActiveTab("customers")}
        >
          Customers
        </button>
        <button
          className={`nav-button ${activeTab === "invoiceCreate" ? "active" : ""}`}
          onClick={() => setActiveTab("invoiceCreate")}
        >
          Create Invoice
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

                       // sidebar menu
               .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #ffffff;
          border-bottom: 1px solid #ddd;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000000;
        }

        .hamburger {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 60px;
          right: 20px;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .menu.open {
          display: flex;
        }

        .menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin: 10px 0;
        }

        .menu a {
          text-decoration: none;
          color: #000000;
          font-size: 1rem;
        }

        .menu a:hover {
          color: #0070f3;
        }

            .signup-form {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}