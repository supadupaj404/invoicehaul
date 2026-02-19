"use client";

import { useState, useCallback, useMemo } from "react";
import EditableField from "./EditableField";
import { Plus, Trash2, Download, FileDown, ArrowLeft } from "lucide-react";

type LineItem = {
    description: string;
    quantity: number;
    unitPrice: number;
};

type InvoiceData = {
    // Carrier
    carrierName: string;
    carrierAddress: string;
    carrierCityStateZip: string;
    carrierPhone: string;
    carrierEmail: string;
    mcNumber: string;
    dotNumber: string;
    // Broker
    brokerName: string;
    brokerAddress: string;
    brokerCityStateZip: string;
    brokerEmail: string;
    // Details
    invoiceNumber: string;
    loadNumber: string;
    invoiceDate: string;
    dueDate: string;
    // Items
    items: LineItem[];
    // Payment
    paymentTerms: string;
    notes: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
};

const defaultData: InvoiceData = {
    carrierName: "",
    carrierAddress: "",
    carrierCityStateZip: "",
    carrierPhone: "",
    carrierEmail: "",
    mcNumber: "",
    dotNumber: "",
    brokerName: "",
    brokerAddress: "",
    brokerCityStateZip: "",
    brokerEmail: "",
    invoiceNumber: "",
    loadNumber: "",
    invoiceDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    dueDate: "",
    items: [{ description: "Freight Charges", quantity: 1, unitPrice: 0 }],
    paymentTerms: "Net 15",
    notes: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
};

const STORAGE_KEY = "invoicehaul:quickDraft";

function loadDraft(): InvoiceData {
    if (typeof window === "undefined") return defaultData;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultData;
        return { ...defaultData, ...JSON.parse(raw) };
    } catch {
        return defaultData;
    }
}

type QuickEditorProps = {
    onBack: () => void;
};

export default function QuickEditor({ onBack }: QuickEditorProps) {
    const [data, setData] = useState<InvoiceData>(loadDraft);
    const [generating, setGenerating] = useState(false);

    const update = useCallback((key: keyof InvoiceData, value: any) => {
        setData((prev) => {
            const next = { ...prev, [key]: value };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }, []);

    const updateItem = useCallback((index: number, field: keyof LineItem, value: any) => {
        setData((prev) => {
            const items = [...prev.items];
            items[index] = { ...items[index], [field]: value };
            const next = { ...prev, items };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }, []);

    const addItem = useCallback(() => {
        setData((prev) => {
            const next = {
                ...prev,
                items: [...prev.items, { description: "", quantity: 1, unitPrice: 0 }],
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }, []);

    const removeItem = useCallback((index: number) => {
        setData((prev) => {
            if (prev.items.length <= 1) return prev;
            const items = prev.items.filter((_, i) => i !== index);
            const next = { ...prev, items };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }, []);

    const subtotal = useMemo(() => {
        return data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    }, [data.items]);

    const formatNum = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Build the form data in the shape the existing PDF API expects
    const buildFormData = useCallback(() => {
        return {
            sender: {
                name: data.carrierName,
                address: data.carrierAddress,
                city: data.carrierCityStateZip,
                zipCode: "",
                country: "",
                email: data.carrierEmail,
                phone: data.carrierPhone,
                mcNumber: data.mcNumber,
                dotNumber: data.dotNumber,
                customInputs: [],
            },
            receiver: {
                name: data.brokerName,
                address: data.brokerAddress,
                city: data.brokerCityStateZip,
                zipCode: "",
                country: "",
                email: data.brokerEmail,
                phone: "",
                customInputs: [],
            },
            details: {
                invoiceLogo: "",
                invoiceNumber: data.invoiceNumber,
                invoiceDate: data.invoiceDate,
                dueDate: data.dueDate,
                loadNumber: data.loadNumber,
                purchaseOrderNumber: "",
                currency: "USD",
                items: data.items.map((item) => ({
                    name: item.description,
                    description: "",
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    total: (item.quantity * item.unitPrice).toFixed(2),
                })),
                paymentTerms: data.paymentTerms,
                additionalNotes: data.notes,
                paymentInformation: {
                    bankName: data.bankName,
                    accountName: data.accountName,
                    accountNumber: data.accountNumber,
                },
                taxDetails: { amount: 0, amountType: "amount", taxID: "" },
                discountDetails: { amount: 0, amountType: "amount" },
                shippingDetails: { cost: 0, costType: "amount" },
                subTotal: subtotal.toFixed(2),
                totalAmount: subtotal.toFixed(2),
                totalAmountInWords: "",
                pdfTemplate: 1,
                signature: { data: "", fontFamily: "" },
            },
        };
    }, [data, subtotal]);

    const handleExport = useCallback(async () => {
        setGenerating(true);
        try {
            const formData = buildFormData();
            const res = await fetch("/api/invoice/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("PDF generation failed");
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `invoice-${data.invoiceNumber || "draft"}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setGenerating(false);
        }
    }, [buildFormData, data.invoiceNumber]);

    return (
        <div className="min-h-screen" style={{ background: "#f5f0eb" }}>
            {/* Floating toolbar */}
            <div className="sticky top-0 z-50 px-4 sm:px-6 pt-3 pb-3">
                <div
                    className="max-w-3xl mx-auto h-12 flex items-center justify-between px-4 rounded-2xl"
                    style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid #e5e1dc",
                        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
                    }}
                >
                    <button
                        onClick={onBack}
                        className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-gray-900"
                        style={{ color: "#6b7280" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <div className="flex items-center gap-1.5">
                        <span className="hidden sm:inline text-xs font-medium" style={{ color: "#9ca3af" }}>
                            Click any field to edit
                        </span>
                        <div className="w-px h-5 mx-1" style={{ background: "#e5e1dc" }} />
                        <button
                            onClick={handleExport}
                            disabled={generating}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-50"
                            style={{ background: "#22c55e" }}
                        >
                            <Download className="w-3.5 h-3.5" />
                            {generating ? "Generating..." : "Export PDF"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Invoice */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
                <div
                    className="bg-white rounded-xl shadow-sm p-6 sm:p-10 min-h-[50rem]"
                    style={{ fontFamily: "Outfit, sans-serif", border: "1px solid #e5e1dc" }}
                >
                    {/* Header — Carrier + Invoice title */}
                    <div className="flex justify-between items-start border-b-2 border-green-500 pb-4 mb-6">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">
                                <EditableField
                                    value={data.carrierName}
                                    onChange={(v) => update("carrierName", v)}
                                    placeholder="Your Company Name"
                                    className="text-xl font-bold"
                                />
                            </h1>
                            <div className="text-xs text-gray-500 space-y-0.5 mt-1" style={{ fontFamily: "monospace" }}>
                                <div>
                                    MC# <EditableField
                                        value={data.mcNumber}
                                        onChange={(v) => update("mcNumber", v)}
                                        placeholder="000000"
                                        className="text-xs"
                                        style={{ fontFamily: "monospace" }}
                                    />
                                </div>
                                <div>
                                    DOT# <EditableField
                                        value={data.dotNumber}
                                        onChange={(v) => update("dotNumber", v)}
                                        placeholder="000000"
                                        className="text-xs"
                                        style={{ fontFamily: "monospace" }}
                                    />
                                </div>
                            </div>
                            <div className="mt-1 text-sm text-gray-600 space-y-0.5">
                                <div>
                                    <EditableField
                                        value={data.carrierAddress}
                                        onChange={(v) => update("carrierAddress", v)}
                                        placeholder="123 Main St"
                                        className="text-sm"
                                    />
                                </div>
                                <div>
                                    <EditableField
                                        value={data.carrierCityStateZip}
                                        onChange={(v) => update("carrierCityStateZip", v)}
                                        placeholder="City, State ZIP"
                                        className="text-sm"
                                    />
                                </div>
                                <div>
                                    <EditableField
                                        value={data.carrierPhone}
                                        onChange={(v) => update("carrierPhone", v)}
                                        placeholder="(555) 123-4567"
                                        className="text-sm"
                                    />
                                </div>
                                <div>
                                    <EditableField
                                        value={data.carrierEmail}
                                        onChange={(v) => update("carrierEmail", v)}
                                        placeholder="email@example.com"
                                        className="text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <h2 className="text-3xl font-bold text-gray-800">INVOICE</h2>
                            <p className="text-lg text-gray-800 mt-1" style={{ fontFamily: "monospace" }}>
                                #<EditableField
                                    value={data.invoiceNumber}
                                    onChange={(v) => update("invoiceNumber", v)}
                                    placeholder="INV-001"
                                    className="text-lg"
                                    style={{ fontFamily: "monospace" }}
                                />
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Load #: <EditableField
                                    value={data.loadNumber}
                                    onChange={(v) => update("loadNumber", v)}
                                    placeholder="12345"
                                    className="text-sm"
                                    style={{ fontFamily: "monospace" }}
                                />
                            </p>
                        </div>
                    </div>

                    {/* Broker + Dates */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Bill To</p>
                            <h3 className="font-bold text-gray-900">
                                <EditableField
                                    value={data.brokerName}
                                    onChange={(v) => update("brokerName", v)}
                                    placeholder="Broker / Company Name"
                                    className="font-bold"
                                />
                            </h3>
                            <div className="text-sm text-gray-600 space-y-0.5">
                                <div>
                                    <EditableField
                                        value={data.brokerAddress}
                                        onChange={(v) => update("brokerAddress", v)}
                                        placeholder="456 Broker Ave"
                                        className="text-sm"
                                    />
                                </div>
                                <div>
                                    <EditableField
                                        value={data.brokerCityStateZip}
                                        onChange={(v) => update("brokerCityStateZip", v)}
                                        placeholder="City, State ZIP"
                                        className="text-sm"
                                    />
                                </div>
                                <div>
                                    <EditableField
                                        value={data.brokerEmail}
                                        onChange={(v) => update("brokerEmail", v)}
                                        placeholder="broker@example.com"
                                        className="text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <dl className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <dt className="font-semibold text-gray-700">Invoice Date:</dt>
                                    <dd className="text-gray-600">
                                        <EditableField
                                            value={data.invoiceDate}
                                            onChange={(v) => update("invoiceDate", v)}
                                            placeholder="February 19, 2026"
                                            className="text-sm"
                                            style={{ fontFamily: "monospace" }}
                                        />
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-semibold text-gray-700">Due Date:</dt>
                                    <dd className="text-gray-600">
                                        <EditableField
                                            value={data.dueDate}
                                            onChange={(v) => update("dueDate", v)}
                                            placeholder="March 6, 2026"
                                            className="text-sm"
                                            style={{ fontFamily: "monospace" }}
                                        />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Line Items */}
                    <div className="mt-3">
                        <div className="border border-gray-200 p-1 rounded-lg space-y-1">
                            {/* Header */}
                            <div className="grid grid-cols-12 text-xs font-medium text-gray-500 uppercase">
                                <div className="col-span-5">Description</div>
                                <div className="col-span-2">Qty</div>
                                <div className="col-span-2">Rate</div>
                                <div className="col-span-2 text-right">Amount</div>
                                <div className="col-span-1" />
                            </div>
                            <div className="border-b border-gray-200" />

                            {data.items.map((item, i) => (
                                <div key={i} className="grid grid-cols-12 gap-1 items-start py-1 border-b border-gray-100">
                                    <div className="col-span-5">
                                        <EditableField
                                            value={item.description}
                                            onChange={(v) => updateItem(i, "description", v)}
                                            placeholder="Freight Charges, Detention, etc."
                                            className="font-medium text-gray-800 text-sm"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <EditableField
                                            value={String(item.quantity)}
                                            onChange={(v) => updateItem(i, "quantity", Number(v) || 0)}
                                            placeholder="1"
                                            className="text-sm text-gray-800"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <EditableField
                                            value={String(item.unitPrice)}
                                            onChange={(v) => updateItem(i, "unitPrice", Number(v) || 0)}
                                            placeholder="0.00"
                                            className="text-sm text-gray-800"
                                        />
                                        <span className="text-xs text-gray-400 ml-0.5">USD</span>
                                    </div>
                                    <div className="col-span-2 text-right text-sm text-gray-800">
                                        {formatNum(item.quantity * item.unitPrice)} USD
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        {data.items.length > 1 && (
                                            <button
                                                onClick={() => removeItem(i)}
                                                className="p-1 rounded hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Add item */}
                            <button
                                onClick={addItem}
                                className="flex items-center gap-1 text-xs font-medium py-1.5 px-2 rounded transition-colors hover:bg-gray-50"
                                style={{ color: "#22c55e" }}
                            >
                                <Plus className="w-3.5 h-3.5" />
                                Add line item
                            </button>
                        </div>
                    </div>

                    {/* Totals */}
                    <div className="mt-4 flex justify-end">
                        <div className="text-right space-y-1">
                            <div className="flex justify-between gap-8">
                                <span className="font-semibold text-gray-800">Subtotal:</span>
                                <span className="text-gray-500">{formatNum(subtotal)} USD</span>
                            </div>
                            <div className="flex justify-between gap-8 border-t border-gray-200 pt-1">
                                <span className="font-bold text-gray-900 text-base">Total:</span>
                                <span className="font-bold text-gray-900 text-base">{formatNum(subtotal)} USD</span>
                            </div>
                        </div>
                    </div>

                    {/* Remittance */}
                    <div className="mt-6 p-4 rounded-lg border border-green-200" style={{ backgroundColor: "#f0fdf4" }}>
                        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Remittance Information</p>
                        <div className="text-sm text-gray-800 space-y-0.5">
                            <div>
                                Bank: <EditableField
                                    value={data.bankName}
                                    onChange={(v) => update("bankName", v)}
                                    placeholder="Bank name"
                                    className="text-sm"
                                />
                            </div>
                            <div>
                                Account: <EditableField
                                    value={data.accountName}
                                    onChange={(v) => update("accountName", v)}
                                    placeholder="Account holder name"
                                    className="text-sm"
                                />
                            </div>
                            <div style={{ fontFamily: "monospace" }}>
                                Account #: <EditableField
                                    value={data.accountNumber}
                                    onChange={(v) => update("accountNumber", v)}
                                    placeholder="XXXX-XXXX-XXXX"
                                    className="text-sm"
                                    style={{ fontFamily: "monospace" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notes + Terms */}
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold text-green-600">Payment Terms:</p>
                            <EditableField
                                value={data.paymentTerms}
                                onChange={(v) => update("paymentTerms", v)}
                                placeholder="Net 15"
                                className="text-sm text-gray-800"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-green-600">Notes:</p>
                            <EditableField
                                value={data.notes}
                                onChange={(v) => update("notes", v)}
                                placeholder="Additional notes..."
                                className="text-sm text-gray-800"
                                multiline
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mt-6 text-sm text-gray-500">
                        <p>Questions about this invoice? Contact:</p>
                        <p className="font-medium text-gray-800">{data.carrierEmail || "your email"}</p>
                        <p className="font-medium text-gray-800">{data.carrierPhone || "your phone"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
