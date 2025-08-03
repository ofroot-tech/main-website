"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CoreInvoicingFeatures from "./CoreInvoicingFeatures"; // Adjust the import based on your file structure

export default function ManageInvoicingPage() {
  const [invoices, setInvoices] = useState([
    { id: 1, client: "Acme Corp", amount: 500, status: "Paid" },
    { id: 2, client: "Globex Inc", amount: 1200, status: "Pending" },
    { id: 3, client: "Soylent Corp", amount: 800, status: "Overdue" },
  ]);

  const [newInvoice, setNewInvoice] = useState({
    client: "",
    amount: "",
    status: "",
  });

  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  useEffect(() => {
    // Fetch initial invoices from the server if needed
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/invoices", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("Fetched invoices:", response.data.invoices);
      setInvoices(response.data.invoices);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  // TODO before deleting prompt user to confirm deletion and export invoice data
  const handleDelete = (id) => {
    const updatedInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(updatedInvoices);
  };

  const handleEdit = (id) => {
    alert(`Edit invoice with ID: ${id}`);
    // Add your edit logic here
    // TODO on edit make sure to include whom edited the invoice and when
  };

  const token = localStorage.getItem("authToken");

  const handleAddInvoice = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/invoice", // TODO: Replace with your actual API endpoint
        newInvoice,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newId = response.data.invoice.id; // Assuming the API returns the new invoice ID
      const updatedInvoices = [...invoices, { id: newId, ...newInvoice }];
      setInvoices(updatedInvoices);
      setNewInvoice({ client: "", amount: "", status: "" });
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  };

  const exportToCSV = () => {
    const csvContent = ["ID,Client,Amount,Status"];
    invoices.forEach((invoice) => {
      csvContent.push(
        `${invoice.id},${invoice.client},${invoice.amount},${invoice.status}`
      );
    });
    const blob = new Blob([csvContent.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    saveAs(blob, "invoices.csv");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Invoices", 10, 10);
    doc.autoTable({
      head: [["ID", "Client", "Amount", "Status"]],
      body: invoices.map((invoice) => [
        invoice.id,
        invoice.client,
        invoice.amount,
        invoice.status,
      ]),
    });
    doc.save("invoices.pdf");
  };

  const handleNewInvoiceClick = () => {
    setShowInvoiceForm(true);
  };

  return (
    <div className="manage-invoicing-page">
      <header className="header">
        <h1>Manage Invoicing</h1>
      </header>

      {!showInvoiceForm && (
        <button
          className="new-invoice-button"
          onClick={handleNewInvoiceClick}
        >
          New Invoice
        </button>
      )}

      {showInvoiceForm && (
        <div>
          <button
            className="hide-invoice-button"
            onClick={() => setShowInvoiceForm(false)}
          >
            Hide Invoice
          </button>
          <CoreInvoicingFeatures />
        </div>
      )}

      {!showInvoiceForm && (
        <div className="export-buttons">
          <button onClick={exportToCSV}>Export to CSV</button>
          <button onClick={exportToPDF}>Export to PDF</button>
        </div>
      )}

      {!showInvoiceForm && (
        <table className="invoices-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.client}</td>
                <td>${invoice.amount}</td>
                <td>{invoice.status}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(invoice.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(invoice.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .manage-invoicing-page {
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

        .new-invoice-button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .new-invoice-button:hover {
          background: #005bb5;
        }

        .export-buttons {
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
        }

        .export-buttons button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .export-buttons button:hover {
          background: #005bb5;
        }

        .invoices-table {
          width: 100%;
          border-collapse: collapse;
        }

        .invoices-table th,
        .invoices-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .invoices-table th {
          background: #f9f9f9;
          font-weight: bold;
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

        .hide-invoice-button {
          padding: 10px 20px;
          background: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .hide-invoice-button:hover {
          background: #d32f2f;
        }
      `}</style>
    </div>
  );
}