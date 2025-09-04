"use client";

import { useState } from "react";

import AutoRemindersForm from "../../components/autoReminders";
import CustomizableInvoiceTemplates from "../../components/CustomizableInvoiceTemplates";
import ItemizedServices from "../../components/itemizedServices";
import TaxesAndDiscounts from "../../components/taxesAndDiscounts";
import CustomerInfoStorage from "../../components/customerInfoStorage";
import InvoiceTracking from "../../components/invoiceTracking";
import PaymentStatus from "../../components/paymentStatus";
import MultiplePaymentMethods from "../../components/multiplePaymentMethods";
import DepositRequests from "../../components/depositRequests";
import RecurringInvoices from "../../components/recurringInvoices";
import MobileOptimization from "../../components/mobileOptimization";
import EstimatesToInvoices from "../../components/estimatesToInvoices";
import TimeTrackingIntegration from "../../components/timeTrackingIntegration";
import DigitalSignatures from "../../components/digitalSignatures";
import ServiceHistoryLookup from "../../components/serviceHistoryLookup";
import ExpenseTrackingIntegration from "../../components/expenseTrackingIntegration";
import GratuityTipsOption from "../../components/gratuityTipsOption";

export default function InvoicingPage() {
    const [modalContent, setModalContent] = useState(null);
  
    const openModal = (content) => {
      setModalContent(content);
    };
  
    const closeModal = () => {
      setModalContent(null);
    };
  
    const renderModalContent = () => {
      switch (modalContent) {
        case "Email/text clients about unpaid invoices automatically.":
          return <AutoRemindersForm onClose={closeModal} />;
        case "Customizable Invoice Templates":
          return <CustomizableInvoiceTemplates onClose={closeModal} />;
        case "Itemized Services":
          return <ItemizedServices onClose={closeModal} />;
        case "Taxes & Discounts":
          return <TaxesAndDiscounts onClose={closeModal} />;
        case "Save name, address, email, and notes for repeat clients.":
          return <CustomerInfoStorage onClose={closeModal} />;
        case "See which invoices are sent, viewed, and paid.":
          return <InvoiceTracking onClose={closeModal} />;
        case "Mark as 'Paid,' 'Unpaid,' 'Partially Paid,' or 'Overdue.'":
          return <PaymentStatus onClose={closeModal} />;
        case "Accept card, bank transfer, PayPal, or cash.":
          return <MultiplePaymentMethods onClose={closeModal} />;
        case "Allow partial payments or upfront deposits.":
          return <DepositRequests onClose={closeModal} />;
        case "Great for weekly/monthly services like lawn care or house cleaning.":
          return <RecurringInvoices onClose={closeModal} />;
        case "Create/send invoices via smartphone on job sites.":
          return <MobileOptimization onClose={closeModal} />;
        case "Convert quotes/estimates into invoices in one click.":
          return <EstimatesToInvoices onClose={closeModal} />;
        case "Bill based on hours worked if charging hourly.":
          return <TimeTrackingIntegration onClose={closeModal} />;
        case "Get client approval directly on estimates or invoices.":
          return <DigitalSignatures onClose={closeModal} />;
        case "View what’s been billed before, useful for repeat customers.":
          return <ServiceHistoryLookup onClose={closeModal} />;
        case "Track business expenses and tie them to invoices/jobs.":
          return <ExpenseTrackingIntegration onClose={closeModal} />;
        case "Allow customers to tip you during payment.":
          return <GratuityTipsOption onClose={closeModal} />;
        default:
          return null;
      }
    };
  

    return (
        <div className="invoicing-page">
          <header className="header">
            <h1>Invoicing Features</h1>
          </header>
    
          <main className="main">
            <section className="section">
              <h2>Must-Have Features</h2>
              <ul className="features-list">
                <li onClick={() => openModal("Customizable Invoice Templates")}>
                  <strong>Customizable Invoice Templates:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Itemized Services")}>
                  <strong>Itemized Services:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Taxes & Discounts")}>
                  <strong>Taxes & Discounts:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Save name, address, email, and notes for repeat clients.")}>
                  <strong>Customer Info Storage:</strong> Click for details.
                </li>
                <li onClick={() => openModal("See which invoices are sent, viewed, and paid.")}>
                  <strong>Invoice Tracking:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Mark as 'Paid,' 'Unpaid,' 'Partially Paid,' or 'Overdue.'")}>
                  <strong>Payment Status:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Accept card, bank transfer, PayPal, or cash.")}>
                  <strong>Multiple Payment Methods:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Allow partial payments or upfront deposits.")}>
                  <strong>Deposit Requests:</strong> Click for details.
                </li>
              </ul>
            </section>
    
            <section className="section">
              <h2>Advanced & Time-Saving Features</h2>
              <ul className="features-list">
                <li onClick={() => openModal("Great for weekly/monthly services like lawn care or house cleaning.")}>
                  <strong>Recurring Invoices:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Email/text clients about unpaid invoices automatically.")}>
                  <strong>Auto Reminders:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Create/send invoices via smartphone on job sites.")}>
                  <strong>Mobile Optimization:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Convert quotes/estimates into invoices in one click.")}>
                  <strong>Estimates to Invoices:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Bill based on hours worked if charging hourly.")}>
                  <strong>Time Tracking Integration:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Get client approval directly on estimates or invoices.")}>
                  <strong>Digital Signatures:</strong> Click for details.
                </li>
                <li onClick={() => openModal("View what’s been billed before, useful for repeat customers.")}>
                  <strong>Service History Lookup:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Track business expenses and tie them to invoices/jobs.")}>
                  <strong>Expense Tracking Integration:</strong> Click for details.
                </li>
                <li onClick={() => openModal("Allow customers to tip you during payment.")}>
                  <strong>Gratuity/Tips Option:</strong> Click for details.
                </li>
              </ul>
            </section>
          </main>
    
          {modalContent && (
            <div className="modal">
              <div className="modal-content">
                {renderModalContent()}
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
            <style jsx>{`
        .invoicing-page {
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

        .section {
          margin-bottom: 40px;
        }

        .section h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #0070f3;
        }

        .features-list {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          margin-bottom: 15px;
          font-size: 1rem;
          color: #555;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .features-list li:hover {
          color: #0070f3;
        }

        .features-list li strong {
          color: #333;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
          width: 90%;
        }

        .close-button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .close-button:hover {
          background: #005bb5;
        }

   .modal-content {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 90%;
}

.modal-content h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.modal-content form label {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
  color: #555;
}

.modal-content form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
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
  margin-top: 20px;
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
        </div>
        
      );
    }

