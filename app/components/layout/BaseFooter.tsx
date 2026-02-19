const BaseFooter = () => {
    return (
        <footer
            className="mt-16"
            style={{ background: "#1a1a1a" }}
        >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 py-12 sm:py-16">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
                    {/* Left column — brand + description */}
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <span className="font-extrabold text-lg tracking-tight text-white">
                                InvoiceHaul
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                            Free invoice generator built for truckers and owner-operators.
                            No credit card. No sign-up. No catch.
                        </p>
                    </div>

                    {/* Right columns */}
                    <div className="flex gap-16 sm:gap-20">
                        {/* Product column */}
                        <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#6b7280" }}>
                                Product
                            </p>
                            <ul className="space-y-2.5">
                                <li>
                                    <a href="/" className="text-sm transition-colors hover:text-white" style={{ color: "#9ca3af" }}>
                                        Invoice Generator
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://fueltax.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm transition-colors hover:text-[#22c55e] inline-flex items-center gap-1.5"
                                        style={{ color: "#9ca3af" }}
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                                        </svg>
                                        FuelTax.app
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company column */}
                        <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#6b7280" }}>
                                Company
                            </p>
                            <ul className="space-y-2.5">
                                <li>
                                    <a
                                        href="https://whetstonedigital.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm transition-colors hover:text-white"
                                        style={{ color: "#9ca3af" }}
                                    >
                                        Whetstone Digital
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 pt-6" style={{ borderTop: "1px solid #2a2a2a" }}>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                        <p className="text-xs" style={{ color: "#6b7280" }}>
                            &copy; {new Date().getFullYear()} InvoiceHaul. All rights reserved.
                        </p>
                        <p className="text-xs" style={{ color: "#4b5563" }}>
                            A{" "}
                            <a
                                href="https://whetstonedigital.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-white"
                                style={{ color: "#9ca3af", fontWeight: 600 }}
                            >
                                Whetstone Digital
                            </a>
                            {" "}product
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BaseFooter;
