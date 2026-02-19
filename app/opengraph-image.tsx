import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InvoiceHaul — Free Trucker Invoice Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f0eb",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                {/* Logo + Brand */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                    <div
                        style={{
                            width: "56px",
                            height: "56px",
                            background: "#22c55e",
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                    </div>
                    <span style={{ fontSize: "36px", fontWeight: 800, color: "#1a1a1a", letterSpacing: "-0.5px" }}>
                        InvoiceHaul
                    </span>
                </div>

                {/* Headline */}
                <div
                    style={{
                        fontSize: "56px",
                        fontWeight: 800,
                        color: "#1a1a1a",
                        letterSpacing: "-1px",
                        marginBottom: "16px",
                    }}
                >
                    Create your invoice.
                </div>

                {/* Subtitle */}
                <div style={{ fontSize: "24px", color: "#6b7280", marginBottom: "32px" }}>
                    Pick a template, click any field to edit, and export your PDF.
                </div>

                {/* Trust badges */}
                <div style={{ display: "flex", gap: "12px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 20px",
                            borderRadius: "999px",
                            background: "#1a1a1a",
                            color: "#ffffff",
                            fontSize: "18px",
                            fontWeight: 700,
                        }}
                    >
                        100% Free
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 20px",
                            borderRadius: "999px",
                            background: "#ffffff",
                            color: "#1a1a1a",
                            fontSize: "18px",
                            fontWeight: 600,
                            border: "1px solid #e5e1dc",
                        }}
                    >
                        No Sign-In
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 20px",
                            borderRadius: "999px",
                            background: "#ffffff",
                            color: "#1a1a1a",
                            fontSize: "18px",
                            fontWeight: 600,
                            border: "1px solid #e5e1dc",
                        }}
                    >
                        No Credit Card
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
