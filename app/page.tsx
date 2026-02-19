import Link from "next/link";

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        title: "MC# & DOT# Fields",
        description: "Built-in carrier compliance fields that brokers expect to see on every invoice.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        title: "Works on Your Phone",
        description: "Fill it out in the cab, at the dock, or wherever you are. No desktop required.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
            </svg>
        ),
        title: "Saves Your Info",
        description: "Your carrier details stay in your browser. Never re-type your company info.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        ),
        title: "Clean PDF Download",
        description: "No watermarks, no ads, no branding. Just your invoice, ready to send.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: "Actually Free",
        description: "No credit card. No trial. No bait-and-switch. Free means free.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        title: "Built for Truckers",
        description: "Load numbers, freight charges, remittance info — fields that actually matter.",
    },
];

const faqs = [
    {
        q: "Is InvoiceHaul really free?",
        a: "Yes. No credit card, no trial period, no hidden fees. You can generate unlimited invoices for free.",
    },
    {
        q: "Do I need to create an account?",
        a: "No. There is no sign-up, no login, no email required. Just open the tool and start creating.",
    },
    {
        q: "Does my carrier info get saved?",
        a: "Your info is saved in your browser's local storage — it never leaves your device. When you come back, your carrier details are already filled in.",
    },
    {
        q: "Can I use this on my phone?",
        a: "Yes. InvoiceHaul works on any device with a web browser. Fill it out in the cab and download the PDF right to your phone.",
    },
    {
        q: "What format is the invoice?",
        a: "Your invoice downloads as a professional PDF — the standard format brokers accept. No watermarks, no ads.",
    },
    {
        q: "How is this different from other invoice generators?",
        a: "Most \"free\" generators require a credit card and charge you after a trial. InvoiceHaul has no trial because there's nothing to trial — it's free. It's also built specifically for truckers with fields like MC#, DOT#, and load numbers.",
    },
];

export default function LandingPage() {
    return (
        <main>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    100% Free &mdash; No Credit Card
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    Invoice generator
                    <br />
                    <span className="text-blue-600">for truckers.</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Brokers require invoices. Every &ldquo;free&rdquo; tool online wants a credit card.
                    InvoiceHaul is genuinely free &mdash; fill out the form, download your PDF, get paid.
                </p>

                <Link
                    href="/invoice"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                    Create Your Invoice &rarr;
                </Link>

                <p className="mt-4 text-sm text-gray-400">
                    No account. No email. Just your invoice.
                </p>
            </section>

            {/* Social proof strip */}
            <section className="border-y border-[hsl(var(--border))] py-6 mb-16">
                <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Built for owner-operators hauling loads across the lower 48
                </p>
            </section>

            {/* How It Works */}
            <section className="max-w-4xl mx-auto px-4 mb-20">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
                    Three steps. Every load. That&rsquo;s it.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "1",
                            title: "Fill in your load details",
                            desc: "Enter carrier info, broker info, load number, pickup/delivery, and rate.",
                        },
                        {
                            step: "2",
                            title: "Download the PDF",
                            desc: "Click Generate — your invoice renders as a professional PDF in seconds.",
                        },
                        {
                            step: "3",
                            title: "Send it to your broker",
                            desc: "Upload to the broker portal, text it, or email it. Get paid faster.",
                        },
                    ].map((item) => (
                        <div key={item.step} className="text-center">
                            <div className="w-10 h-10 bg-blue-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                                {item.step}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-4 mb-20">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
                    Everything a trucker needs. Nothing you don&rsquo;t.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white border border-[hsl(var(--border))] rounded-xl p-6 hover:border-blue-300 transition-colors"
                        >
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                                {f.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statement Card */}
            <section className="max-w-3xl mx-auto px-4 mb-20">
                <div className="relative bg-white border border-[hsl(var(--border))] rounded-2xl p-10 text-center overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
                    <blockquote className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug mb-4">
                        &ldquo;You hauled the load.
                        <br />
                        Now get paid for it.&rdquo;
                    </blockquote>
                    <p className="text-sm text-gray-400">
                        You don&rsquo;t work for a carrier. You <em>are</em> the carrier.
                        <br />
                        Your invoice should say that.
                    </p>
                </div>
            </section>

            {/* Cross-promotion: fueltax.app */}
            <section className="max-w-3xl mx-auto px-4 mb-20">
                <div className="bg-[#f5f0eb] border border-[#e5e1dc] rounded-2xl p-8 sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                        From the same team
                    </p>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                        Also need to file IFTA fuel taxes?
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        fueltax.app is a free IFTA fuel tax calculator for independent truckers.
                        Track mileage by state, log fuel receipts, and generate quarterly reports.
                    </p>
                    <a
                        href="https://fueltax.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                        Try fueltax.app &rarr;
                    </a>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-4 mb-20">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10 tracking-tight">
                    Frequently asked questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.q}
                            className="group bg-white border border-[hsl(var(--border))] rounded-xl overflow-hidden"
                        >
                            <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 flex items-center justify-between list-none">
                                {faq.q}
                                <svg
                                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="max-w-6xl mx-auto px-4 pb-20 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Ready to invoice your next load?
                </h2>
                <p className="text-gray-500 mb-8">
                    It takes about 2 minutes. Seriously.
                </p>
                <Link
                    href="/invoice"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                    Create Your Invoice &rarr;
                </Link>
            </section>
        </main>
    );
}
