// Components
import { BaseFooter, BaseNavbar } from "@/app/components";
// ShadCn
import { Toaster } from "@/components/ui/toaster";
// Contexts
import Providers from "@/contexts/Providers";
// Fonts
import {
    alexBrush,
    dancingScript,
    greatVibes,
    outfit,
    parisienne,
} from "@/lib/fonts";
// SEO
import { JSONLD } from "@/lib/seo";
// Variables
import { BASE_URL, GOOGLE_SC_VERIFICATION } from "@/lib/variables";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "InvoiceHaul | Free Trucker Invoice Generator",
    description:
        "Create professional freight invoices in minutes. Free forever — no credit card, no bait-and-switch. Built for independent truckers and owner-operators.",
    icons: [
        { rel: "icon", url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", url: "/assets/favicon/favicon.ico", sizes: "32x32" },
        { rel: "apple-touch-icon", url: "/assets/favicon/apple-touch-icon.png" },
    ],
    openGraph: {
        title: "InvoiceHaul | Free Trucker Invoice Generator",
        description: "Create professional freight invoices in minutes. 100% free — no sign-in, no credit card.",
        url: "https://invoicehaul.com",
        siteName: "InvoiceHaul",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "InvoiceHaul | Free Trucker Invoice Generator",
        description: "Create professional freight invoices in minutes. 100% free — no sign-in, no credit card.",
    },
    keywords: [
        "trucker invoice",
        "freight invoice generator",
        "owner operator invoice",
        "free trucking invoice",
        "load invoice template",
        "carrier invoice",
        "broker invoice",
        "trucking invoice free",
    ],
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: BASE_URL,
    },
    verification: {
        google: GOOGLE_SC_VERIFICATION,
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // JSONLD is a static constant defined in lib/seo.ts — safe to serialize
    const jsonLdString = JSON.stringify(JSONLD);

    return (
        <html lang="en" suppressHydrationWarning>
            <head suppressHydrationWarning>
                <script
                    type="application/ld+json"
                    id="json-ld"
                    dangerouslySetInnerHTML={{ __html: jsonLdString }}
                />
            </head>
            <body
                className={`${outfit.className} ${dancingScript.variable} ${parisienne.variable} ${greatVibes.variable} ${alexBrush.variable} antialiased`}
                suppressHydrationWarning
            >
                <Providers>
                    <BaseNavbar />

                    <div className="flex flex-col">{children}</div>

                    <BaseFooter />

                    {/* Toast component */}
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
