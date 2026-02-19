const BaseFooter = () => {
    return (
        <footer
            className="border-t py-10 mt-16"
            style={{ borderColor: "#e5e1dc", background: "#ffffff" }}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm" style={{ color: "#6b7280" }}>
                <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 bg-[#22c55e] rounded flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                    </div>
                    <span style={{ color: "#1a1a1a", fontWeight: 700 }}>InvoiceHaul</span>
                    <span>&middot;</span>
                    <span>&copy; {new Date().getFullYear()}</span>
                </div>
                <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider" style={{ letterSpacing: "0.06em" }}>
                    <a
                        href="https://fueltax.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                        style={{ color: "#9ca3af" }}
                    >
                        IFTA Tool
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default BaseFooter;
