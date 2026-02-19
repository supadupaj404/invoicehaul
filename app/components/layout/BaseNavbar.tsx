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
        <header className="sticky top-0 z-[99] border-b border-[hsl(var(--border))] bg-white/80 backdrop-blur-sm">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                    <span className="font-extrabold text-lg tracking-tight text-gray-900">
                        InvoiceHaul
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* DEV Only */}
                    {devEnv && <DevDebug />}

                    <a
                        href="https://fueltax.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        IFTA Tool &rarr;
                    </a>
                    <Link
                        href="/invoice"
                        className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Create Invoice
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default BaseNavbar;
