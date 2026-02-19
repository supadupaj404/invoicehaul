"use client";

import { useState } from "react";
import QuickEditor from "./QuickEditor";
import { Check, CreditCard, UserX, Zap, FileText, Smartphone, Shield, PenLine, Download, ChevronDown } from "lucide-react";

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

                {/* Scroll hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-5 h-5" style={{ color: "#9ca3af" }} />
                </div>
            </div>

            {/* ═══ HOW IT WORKS ═══ */}
            <section className="px-4 py-16 sm:py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                        Three steps. That&apos;s it.
                    </h2>
                    <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
                        No account setup, no tutorials, no learning curve.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            {
                                step: "1",
                                icon: <PenLine className="w-5 h-5" />,
                                title: "Fill in your details",
                                desc: "Click any field on the invoice to type. Add your carrier info, broker details, load number, and freight charges.",
                            },
                            {
                                step: "2",
                                icon: <Download className="w-5 h-5" />,
                                title: "Export your PDF",
                                desc: "Hit the green Export button. Your invoice downloads as a clean, professional PDF with no watermarks.",
                            },
                            {
                                step: "3",
                                icon: <FileText className="w-5 h-5" />,
                                title: "Send it to your broker",
                                desc: "Upload the PDF to your broker's portal or email it directly. RXO, Echo, Coyote, CH Robinson — they all accept standard invoices.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="rounded-xl p-5 text-left"
                                style={{ background: "#ffffff", border: "1px solid #e5e1dc" }}
                            >
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                                    style={{ background: "#f0fdf4", color: "#22c55e" }}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-sm mb-1" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FEATURES ═══ */}
            <section className="px-4 py-16 sm:py-20" style={{ background: "#ffffff" }}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                        Built for truckers. Not accountants.
                    </h2>
                    <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
                        Unlike generic invoice tools, InvoiceHaul was designed specifically for independent truckers and owner-operators who need to invoice freight brokers.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <FileText className="w-4 h-4" />,
                                title: "MC# and DOT# fields",
                                desc: "Your Motor Carrier number and DOT number are right at the top of every invoice — exactly where brokers expect them.",
                            },
                            {
                                icon: <Smartphone className="w-4 h-4" />,
                                title: "Works on your phone",
                                desc: "Create invoices from your truck, the loading dock, or anywhere. Fully responsive on phones, tablets, and desktop.",
                            },
                            {
                                icon: <Shield className="w-4 h-4" />,
                                title: "Your data stays on your device",
                                desc: "Nothing is sent to a server. Your carrier info, broker details, and bank information never leave your browser.",
                            },
                            {
                                icon: <Download className="w-4 h-4" />,
                                title: "Clean PDF, no watermarks",
                                desc: "Unlike other \"free\" tools, your exported PDF has zero watermarks, zero branding, and zero \"created with\" badges.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-5 text-left"
                                style={{ background: "#f5f0eb", border: "1px solid #e5e1dc" }}
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: "#ffffff", color: "#22c55e", border: "1px solid #e5e1dc" }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1" style={{ color: "#1a1a1a" }}>{item.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ COMPARISON / STATEMENT ═══ */}
            <section className="px-4 py-16 sm:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="rounded-2xl p-8 sm:p-10" style={{ background: "#1a1a1a" }}>
                        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-4">
                            Every other &ldquo;free&rdquo; invoice tool is a bait-and-switch.
                        </h2>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
                            They let you fill out the form, then hit you with a paywall when you try to download.
                            Or they slap their logo on your PDF. Or they require a credit card for a &ldquo;free trial.&rdquo;
                        </p>
                        <p className="text-sm font-semibold text-white">
                            InvoiceHaul is different. No account. No credit card. No trial period. No watermarks. Free means free.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="px-4 py-16 sm:py-20" style={{ background: "#ffffff" }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-10" style={{ color: "#1a1a1a" }}>
                        Frequently asked questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Is InvoiceHaul really free?",
                                a: "Yes, 100%. There is no credit card required, no trial period, no hidden fees, and no premium tier. You can create and export unlimited invoices at no cost. We make money through our sibling product, FuelTax.app — not through invoice generation.",
                            },
                            {
                                q: "Do I need to create an account or sign up?",
                                a: "No. InvoiceHaul requires no account, no sign-up, and no email address. Just open the site and start creating your invoice immediately. Your data is saved in your browser so it's there when you come back.",
                            },
                            {
                                q: "Can I add my MC number and DOT number?",
                                a: "Yes. InvoiceHaul was built specifically for truckers and includes dedicated fields for your MC number (Motor Carrier number) and DOT number (Department of Transportation number) right at the top of the invoice.",
                            },
                            {
                                q: "Where is my data stored?",
                                a: "Your invoice data is stored locally on your device using your browser's local storage. InvoiceHaul never sends your data to a server, never stores it in a database, and never shares it with anyone.",
                            },
                            {
                                q: "Are there watermarks on the PDF?",
                                a: "No. Unlike many \"free\" invoice tools, InvoiceHaul never adds watermarks, logos, or branding to your exported PDFs. The invoice is clean and professional — it looks like you made it yourself.",
                            },
                            {
                                q: "Can I use this to invoice freight brokers?",
                                a: "Absolutely. InvoiceHaul is designed specifically for independent truckers and owner-operators who need to invoice freight brokers like RXO, Echo, Coyote, CH Robinson, TQL, and others. It includes fields for load numbers, remittance information, and payment terms that brokers expect to see.",
                            },
                            {
                                q: "Does it work on my phone?",
                                a: "Yes. InvoiceHaul is fully responsive and works on phones, tablets, and desktop computers. You can create and export invoices from any device with a web browser — even from the cab of your truck.",
                            },
                            {
                                q: "What makes this different from FreshBooks, QuickBooks, or Wave?",
                                a: "Those tools are full accounting platforms that require accounts, subscriptions, and setup. InvoiceHaul is just an invoice generator — nothing more, nothing less. Open it, fill in your details, download your PDF. No learning curve, no monthly fee, no commitment.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-5"
                                style={{ background: "#f5f0eb", border: "1px solid #e5e1dc" }}
                            >
                                <h3 className="font-bold text-sm mb-2" style={{ color: "#1a1a1a" }}>{item.q}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="px-4 py-16 sm:py-20">
                <div className="max-w-lg mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
                        You hauled the load. Now get paid.
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                        Create your first invoice in under two minutes.
                    </p>
                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: "#22c55e" }}
                    >
                        Create Your Invoice
                    </button>
                </div>
            </section>
        </div>
    );
}
