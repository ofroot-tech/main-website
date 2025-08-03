import React, { useState } from "react";
import axios from "axios";

function CoreInvoicingFeatures() {
    const [invoiceData, setInvoiceData] = useState({
        logo: "",
        brandColors: "",
        terms: "",
        notes: "",
        items: [],
        recurring: false,
        frequency: "monthly",
        currency: "USD",
        taxRate: 0,
        client: "",
        amount: "",
        status: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoiceData({ ...invoiceData, [name]: value });
    };

    const addItem = () => {
        setInvoiceData({
            ...invoiceData,
            items: [...invoiceData.items, { description: "", quantity: 1, rate: 0, tax: 0 }],
        });
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...invoiceData.items];
        updatedItems[index][field] = value;
        setInvoiceData({ ...invoiceData, items: updatedItems });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!invoiceData.client || !invoiceData.amount || !invoiceData.status) {
            alert("Please fill in all required fields: Client, Amount, and Status.");
            return;
        }
        const authToken = localStorage.getItem("authToken");
        try {
            const response = await axios.post(
                "http://localhost:8000/api/invoice",
                invoiceData,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
            alert("Invoice created successfully!");
        } catch (error) {
            console.error("Error creating invoice:", error);
            alert("Failed to create invoice.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="add-invoice-form">
                <div>
                    <label>Logo:</label>
                    <input type="text" name="logo" value={invoiceData.logo} onChange={handleChange} />
                </div>
                <div>
                    <label>Brand Colors:</label>
                    <input type="text" name="brandColors" value={invoiceData.brandColors} onChange={handleChange} />
                </div>
                <div>
                    <label>Terms:</label>
                    <textarea name="terms" value={invoiceData.terms} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea name="notes" value={invoiceData.notes} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Recurring:</label>
                    <input
                        type="checkbox"
                        name="recurring"
                        checked={invoiceData.recurring}
                        onChange={(e) => setInvoiceData({ ...invoiceData, recurring: e.target.checked })}
                    />
                </div>
                {invoiceData.recurring && (
                    <div>
                        <label>Frequency:</label>
                        <select name="frequency" value={invoiceData.frequency} onChange={handleChange}>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                )}
                <div>
                    <label>Currency:</label>
                    <select name="currency" value={invoiceData.currency} onChange={handleChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <div>
                    <label>Tax Rate (%):</label>
                    <input
                        type="number"
                        name="taxRate"
                        value={invoiceData.taxRate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Client:</label>
                    <input
                        type="text"
                        name="client"
                        value={invoiceData.client}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={invoiceData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={invoiceData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="overdue">Overdue</option>
                    </select>
                </div>
                <div>
                    <h3>Itemized Billing</h3>
                    {invoiceData.items.map((item, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="Description"
                                value={item.description}
                                onChange={(e) => handleItemChange(index, "description", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={item.quantity}
                                onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Rate"
                                value={item.rate}
                                onChange={(e) => handleItemChange(index, "rate", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Tax"
                                value={item.tax}
                                onChange={(e) => handleItemChange(index, "tax", e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addItem}>Add Item</button>
                </div>
                <button type="submit">Create Invoice</button>
            </form>
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

        .main {
          max-width: 800px;
          margin: auto;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .add-invoice-form {
          margin-bottom: 20px;
        }

        .add-invoice-form input,
        .add-invoice-form select {
          display: block;
          width: 100%;
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .add-invoice-form button {
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .add-invoice-form button:hover {
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
      `}</style>
        </>
    );
}

export default CoreInvoicingFeatures;
