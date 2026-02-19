"use client";

import React, { createContext, useContext } from "react";

// Flattened English strings from en.json
const STRINGS: Record<string, string> = {
    "form.title": "Invoice",
    "form.description": "Generate Invoice",
    "form.newInvBadge": "New Invoice",
    "form.wizard.fromAndTo": "Carrier & Broker",
    "form.wizard.invoiceDetails": "Invoice Details",
    "form.wizard.lineItems": "Freight Charges",
    "form.wizard.paymentInfo": "Remittance",
    "form.wizard.summary": "Summary",
    "form.wizard.next": "Next",
    "form.wizard.back": "Back",
    "form.steps.fromAndTo.billFrom": "Bill From",
    "form.steps.fromAndTo.billTo": "Bill To",
    "form.steps.fromAndTo.name": "Name",
    "form.steps.fromAndTo.address": "Address",
    "form.steps.fromAndTo.zipCode": "Zip",
    "form.steps.fromAndTo.city": "City",
    "form.steps.fromAndTo.country": "Country",
    "form.steps.fromAndTo.email": "Email",
    "form.steps.fromAndTo.phone": "Phone",
    "form.steps.fromAndTo.addCustomInput": "Add Custom Input",
    "form.steps.fromAndTo.sender": "Sender",
    "form.steps.fromAndTo.receiver": "Receiver",
    "form.steps.invoiceDetails.heading": "Invoice Details",
    "form.steps.invoiceDetails.invoiceLogo.label": "Invoice Logo",
    "form.steps.invoiceDetails.invoiceLogo.placeholder": "Click to upload image",
    "form.steps.invoiceDetails.invoiceNumber": "Invoice Number",
    "form.steps.invoiceDetails.issuedDate": "Issue Date",
    "form.steps.invoiceDetails.dueDate": "Due Date",
    "form.steps.invoiceDetails.currency": "Currency",
    "form.steps.lineItems.heading": "Freight Charges / Services",
    "form.steps.lineItems.item": "Item",
    "form.steps.lineItems.name": "Name",
    "form.steps.lineItems.quantity": "Quantity",
    "form.steps.lineItems.rate": "Rate",
    "form.steps.lineItems.total": "Total",
    "form.steps.lineItems.description": "Description",
    "form.steps.lineItems.addNewItem": "Add a new item",
    "form.steps.lineItems.removeItem": "Remove item",
    "form.steps.paymentInfo.heading": "Remittance / Payment Info",
    "form.steps.paymentInfo.bankName": "Bank Name",
    "form.steps.paymentInfo.accountName": "Account Name",
    "form.steps.paymentInfo.accountNumber": "Account Number",
    "form.steps.summary.heading": "Summary",
    "form.steps.summary.signature.heading": "Signature",
    "form.steps.summary.signature.placeholder": "Click to add signature",
    "form.steps.summary.signature.description": "Choose a method to add your signature to the invoice",
    "form.steps.summary.signature.draw": "Draw",
    "form.steps.summary.signature.type": "Type",
    "form.steps.summary.signature.upload": "Upload",
    "form.steps.summary.additionalNotes": "Additional Notes",
    "form.steps.summary.paymentTerms": "Payment Terms",
    "form.steps.summary.discount": "Discount",
    "form.steps.summary.tax": "Tax",
    "form.steps.summary.shipping": "Shipping",
    "form.steps.summary.subTotal": "Subtotal",
    "form.steps.summary.totalAmount": "Total Amount",
    "form.steps.summary.includeTotalInWords": "Include Total in Words?",
    "form.steps.summary.yes": "Yes",
    "form.steps.summary.no": "No",
    "actions.title": "Actions",
    "actions.description": "Operations and preview",
    "actions.loadInvoice": "Load Invoice",
    "actions.exportInvoice": "Export Invoice",
    "actions.newInvoice": "New Invoice",
    "actions.generatePdf": "Generate PDF",
    "actions.pdfView": "PDF View",
    "footer.developedBy": "Developed by",
};

// Recursive lookup to support both "form.title" and nested access via _t("form.steps.fromAndTo.name")
const lookup = (key: string): string => {
    return STRINGS[key] ?? key;
};

const defaultTranslationContext = {
    _t: lookup,
};

export const TranslationContext = createContext(defaultTranslationContext);

export const useTranslation = () => {
    return useContext(TranslationContext);
};

export const useTranslationContext = () => {
    return useContext(TranslationContext);
};

type TranslationProviderProps = {
    children: React.ReactNode;
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
    return (
        <TranslationContext.Provider value={{ _t: lookup }}>
            {children}
        </TranslationContext.Provider>
    );
};
