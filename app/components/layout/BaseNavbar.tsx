"use client";

import { useMemo } from "react";
import Link from "next/link";

// Components
import { DevDebug } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="sticky top-0 z-[99] border-b border-[hsl(var(--border))] bg-white/80 backdrop-blur-xl">
            <nav className="max-w-[1600px] mx-auto px-4 h-14 flex items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <div className="w-8 h-8 bg-[#22c55e] rounded-lg flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                    <span className="font-extrabold text-lg tracking-tight hidden sm:inline" style={{ color: "#1a1a1a" }}>
                        InvoiceHaul
                    </span>
                </Link>

                {/* Center: Tagline */}
                <div className="hidden md:flex items-center gap-1.5">
                    <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        100% Free
                    </span>
                    <span className="text-xs" style={{ color: "#9ca3af" }}>
                        No credit card. No catch. Ever.
                    </span>
                </div>

                {/* Right: FuelTax.app CTA */}
                <div className="flex items-center gap-3 shrink-0">
                    {/* DEV Only */}
                    {devEnv && <DevDebug />}

                    <span className="hidden lg:inline text-xs" style={{ color: "#9ca3af" }}>
                        From the makers of
                    </span>
                    <a
                        href="https://fueltax.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold transition-all hover:scale-[1.02]"
                        style={{
                            background: "#f0fdf4",
                            color: "#16a34a",
                            border: "1px solid #bbf7d0",
                        }}
                    >
                        {/* FuelTax truck logo */}
                        <svg className="w-4 h-4" fill="#16a34a" viewBox="0 0 24 24">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                        FuelTax.app
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default BaseNavbar;
