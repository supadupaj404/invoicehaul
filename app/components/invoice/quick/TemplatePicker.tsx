"use client";

import { useState } from "react";
import QuickEditor from "./QuickEditor";
import { Check, CreditCard, UserX, Zap, ChevronRight } from "lucide-react";

// Miniature visual preview of Template 1 — green top border, carrier left / INVOICE right
function Template1Preview() {
    return (
        <div className="w-full aspect-[8.5/11] rounded-md bg-white border border-gray-200 overflow-hidden p-3 text-left pointer-events-none select-none">
            <div className="border-b-2 border-green-500 pb-2 mb-2 flex justify-between items-start">
                <div>
                    <div className="w-16 h-2 rounded-full bg-gray-800 mb-1" />
                    <div className="w-10 h-1 rounded-full bg-gray-300 mb-0.5" />
                    <div className="w-12 h-1 rounded-full bg-gray-300 mb-0.5" />
                    <div className="w-8 h-1 rounded-full bg-gray-300" />
                </div>
                <div className="text-right">
                    <div className="text-[8px] font-bold text-gray-700 tracking-tight">INVOICE</div>
                    <div className="w-10 h-1 rounded-full bg-gray-300 ml-auto mt-0.5" />
                </div>
            </div>
            <div className="flex gap-3 mb-2">
                <div className="flex-1">
                    <div className="text-[5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Bill To</div>
                    <div className="w-14 h-1.5 rounded-full bg-gray-700 mb-0.5" />
                    <div className="w-10 h-1 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between mb-0.5">
                        <div className="w-8 h-1 rounded-full bg-gray-400" />
                        <div className="w-10 h-1 rounded-full bg-gray-200" />
                    </div>
                    <div className="flex justify-between">
                        <div className="w-6 h-1 rounded-full bg-gray-400" />
                        <div className="w-10 h-1 rounded-full bg-gray-200" />
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 rounded p-1 mb-2">
                <div className="flex gap-1 mb-1">
                    <div className="flex-[3] h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                </div>
                <div className="border-t border-gray-100 pt-1 flex gap-1 mb-0.5">
                    <div className="flex-[3] h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                </div>
                <div className="flex gap-1">
                    <div className="flex-[3] h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                </div>
            </div>
            <div className="flex justify-end mb-2">
                <div className="w-20">
                    <div className="flex justify-between mb-0.5">
                        <div className="w-8 h-1 rounded-full bg-gray-400" />
                        <div className="w-6 h-1 rounded-full bg-gray-300" />
                    </div>
                    <div className="border-t border-gray-200 pt-0.5 flex justify-between">
                        <div className="w-6 h-1.5 rounded-full bg-gray-700" />
                        <div className="w-8 h-1.5 rounded-full bg-gray-700" />
                    </div>
                </div>
            </div>
            <div className="rounded p-1.5 mb-1.5" style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <div className="text-[5px] font-bold text-green-600 uppercase tracking-wider mb-0.5">Remittance</div>
                <div className="w-16 h-1 rounded-full bg-green-200 mb-0.5" />
                <div className="w-12 h-1 rounded-full bg-green-200" />
            </div>
        </div>
    );
}

// Miniature visual preview of Template 2 — no top border, Invoice # top-left, address top-right
function Template2Preview() {
    return (
        <div className="w-full aspect-[8.5/11] rounded-md bg-white border border-gray-200 overflow-hidden p-3 text-left pointer-events-none select-none">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="text-[7px] font-semibold text-gray-600 tracking-tight">Invoice #</div>
                    <div className="w-12 h-1 rounded-full bg-gray-300 mt-0.5 mb-1.5" />
                    <div className="w-20 h-2 rounded-full bg-gray-800" />
                </div>
                <div className="text-right">
                    <div className="w-14 h-1 rounded-full bg-gray-300 ml-auto mb-0.5" />
                    <div className="w-10 h-1 rounded-full bg-gray-300 ml-auto mb-0.5" />
                    <div className="w-12 h-1 rounded-full bg-gray-300 ml-auto" />
                </div>
            </div>
            <div className="flex gap-3 mb-2">
                <div className="flex-1">
                    <div className="text-[6px] font-semibold text-gray-500 mb-0.5">Bill to:</div>
                    <div className="w-14 h-1.5 rounded-full bg-gray-700 mb-0.5" />
                    <div className="w-12 h-1 rounded-full bg-gray-200 mb-0.5" />
                    <div className="w-10 h-1 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 text-right">
                    <div className="flex justify-between mb-0.5">
                        <div className="w-8 h-1 rounded-full bg-gray-400" />
                        <div className="w-10 h-1 rounded-full bg-gray-200" />
                    </div>
                    <div className="flex justify-between">
                        <div className="w-6 h-1 rounded-full bg-gray-400" />
                        <div className="w-10 h-1 rounded-full bg-gray-200" />
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 rounded p-1 mb-2">
                <div className="flex gap-1 mb-1">
                    <div className="flex-[3] h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex-1 h-1 rounded-full bg-gray-300" />
                </div>
                <div className="border-t border-gray-100 pt-1 flex gap-1 mb-0.5">
                    <div className="flex-[3] h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                </div>
                <div className="flex gap-1">
                    <div className="flex-[3] h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                    <div className="flex-1 h-1 rounded-full bg-gray-200" />
                </div>
            </div>
            <div className="flex justify-end mb-2">
                <div className="w-20">
                    <div className="flex justify-between mb-0.5">
                        <div className="w-8 h-1 rounded-full bg-gray-400" />
                        <div className="w-6 h-1 rounded-full bg-gray-300" />
                    </div>
                    <div className="flex justify-between">
                        <div className="w-6 h-1 rounded-full bg-gray-400" />
                        <div className="w-8 h-1 rounded-full bg-gray-300" />
                    </div>
                </div>
            </div>
            <div className="space-y-1">
                <div>
                    <div className="text-[5px] font-semibold text-green-500 mb-0.5">Additional notes:</div>
                    <div className="w-16 h-1 rounded-full bg-gray-200" />
                </div>
                <div>
                    <div className="text-[5px] font-semibold text-green-500 mb-0.5">Payment terms:</div>
                    <div className="w-12 h-1 rounded-full bg-gray-200" />
                </div>
                <div>
                    <div className="w-20 h-1 rounded-full bg-gray-400 mb-0.5" />
                    <div className="w-14 h-1 rounded-full bg-gray-200 mb-0.5" />
                    <div className="w-16 h-1 rounded-full bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

export default function TemplatePicker() {
    const [step, setStep] = useState<"pick" | "edit">("pick");
    const [selectedTemplate, setSelectedTemplate] = useState<1 | 2>(1);

    if (step === "edit") {
        return <QuickEditor onBack={() => setStep("pick")} />;
    }

    return (
        <div style={{ background: "#f5f0eb" }}>
            {/* ═══ HERO: Template Picker ═══ */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                        Create your invoice.
                    </h1>
                    <p className="text-base mb-5" style={{ color: "#6b7280" }}>
                        Pick a template, click any field to edit, and export your PDF.
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                            style={{ background: "#1a1a1a", color: "#ffffff" }}
                        >
                            <Zap className="w-3 h-3" />
                            100% Free
                        </span>
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                            style={{ background: "#ffffff", color: "#1a1a1a", border: "1px solid #e5e1dc" }}
                        >
                            <UserX className="w-3 h-3" />
                            No Sign-In
                        </span>
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                            style={{ background: "#ffffff", color: "#1a1a1a", border: "1px solid #e5e1dc" }}
                        >
                            <CreditCard className="w-3 h-3" />
                            No Credit Card
                        </span>
                    </div>

                    {/* Template previews */}
                    <div className="grid grid-cols-2 gap-5">
                        <button
                            onClick={() => setSelectedTemplate(1)}
                            className="group cursor-pointer rounded-xl border-2 p-3 transition-all hover:shadow-md"
                            style={{
                                background: "#ffffff",
                                borderColor: selectedTemplate === 1 ? "#22c55e" : "#e5e1dc",
                                boxShadow: selectedTemplate === 1 ? "0 0 0 1px #22c55e" : "none",
                            }}
                        >
                            <Template1Preview />
                            <div className="mt-3 flex items-center justify-between px-1">
                                <div className="text-left">
                                    <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Standard</h3>
                                    <p className="text-xs" style={{ color: "#9ca3af" }}>Green accent, remittance block</p>
                                </div>
                                {selectedTemplate === 1 && (
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#22c55e" }}>
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedTemplate(2)}
                            className="group cursor-pointer rounded-xl border-2 p-3 transition-all hover:shadow-md"
                            style={{
                                background: "#ffffff",
                                borderColor: selectedTemplate === 2 ? "#22c55e" : "#e5e1dc",
                                boxShadow: selectedTemplate === 2 ? "0 0 0 1px #22c55e" : "none",
                            }}
                        >
                            <Template2Preview />
                            <div className="mt-3 flex items-center justify-between px-1">
                                <div className="text-left">
                                    <h3 className="font-bold text-sm" style={{ color: "#1a1a1a" }}>Classic</h3>
                                    <p className="text-xs" style={{ color: "#9ca3af" }}>Clean, minimal layout</p>
                                </div>
                                {selectedTemplate === 2 && (
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#22c55e" }}>
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </div>
                        </button>
                    </div>

                    <button
                        onClick={() => setStep("edit")}
                        className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: "#22c55e" }}
                    >
                        Continue with {selectedTemplate === 1 ? "Standard" : "Classic"} Template
                    </button>

                    <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>
                        Your data is saved locally and never leaves your device.
                    </p>
                </div>

            </div>

            {/* ═══ AEO blurb + FAQ ═══ */}
            <section className="px-4 py-10">
                <div className="max-w-2xl mx-auto">
                    <p className="text-xs leading-relaxed text-center mb-8" style={{ color: "#9ca3af" }}>
                        InvoiceHaul is a free invoice generator built specifically for independent truckers and owner-operators.
                        Unlike FreshBooks, QuickBooks, or Wave, InvoiceHaul requires no account, no credit card, and no subscription — just open the site, fill in your carrier and broker details, and export a clean PDF with no watermarks.
                        Built for truckers who invoice freight brokers like RXO, Echo, Coyote, CH Robinson, and TQL.
                    </p>
                    <h2 className="text-sm font-bold text-center mb-4" style={{ color: "#9ca3af" }}>
                        FAQ
                    </h2>
                    <div className="space-y-1">
                        {[
                            {
                                q: "Is InvoiceHaul really free?",
                                a: "Yes, 100%. No credit card, no trial period, no hidden fees. Unlimited invoices at no cost.",
                            },
                            {
                                q: "Do I need to sign up?",
                                a: "No. No account, no email, no sign-up. Just open the site and start creating your invoice.",
                            },
                            {
                                q: "Can I add my MC and DOT number?",
                                a: "Yes. Built specifically for truckers — MC# and DOT# fields are right at the top of the invoice.",
                            },
                            {
                                q: "Where is my data stored?",
                                a: "Locally on your device. InvoiceHaul never sends your data to a server or shares it with anyone.",
                            },
                            {
                                q: "Are there watermarks on the PDF?",
                                a: "No. Unlike other \"free\" tools, your PDF has zero watermarks, zero branding, and zero \"created with\" badges.",
                            },
                        ].map((item, i) => (
                            <details
                                key={i}
                                className="group rounded-lg"
                                style={{ background: "#ffffff", border: "1px solid #e5e1dc" }}
                            >
                                <summary
                                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none list-none text-xs font-semibold"
                                    style={{ color: "#1a1a1a" }}
                                >
                                    {item.q}
                                    <ChevronRight className="w-3.5 h-3.5 shrink-0 transition-transform group-open:rotate-90" style={{ color: "#9ca3af" }} />
                                </summary>
                                <p className="px-4 pb-3 text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
