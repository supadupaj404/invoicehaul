import { BASE_URL } from "@/lib/variables";

export const ROOTKEYWORDS = [
    "trucker invoice",
    "freight invoice generator",
    "free trucking invoice",
    "owner operator invoice",
    "carrier invoice",
    "load invoice template",
    "broker invoice",
    "free invoice generator",
    "trucking invoice no sign up",
    "freight invoice PDF free",
    "independent trucker invoice",
    "MC number invoice",
    "DOT number invoice",
];

export const JSONLD = [
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "InvoiceHaul",
        description:
            "InvoiceHaul is a free invoice generator built specifically for independent truckers and owner-operators. Create professional freight invoices for brokers — no account, no credit card, no trial period.",
        keywords: ROOTKEYWORDS,
        url: BASE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires a modern web browser",
        softwareVersion: "1.0",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free forever — no credit card, no sign-up, no hidden fees",
        },
        featureList: [
            "MC# and DOT# fields for carrier identification",
            "Click-to-edit inline invoice editor",
            "Professional PDF export",
            "Works on phones and tablets",
            "Saves data locally — never leaves your device",
            "No watermarks on exported invoices",
            "No account or sign-up required",
            "Multiple invoice templates",
            "Load number tracking",
            "Remittance information section",
        ],
        screenshot: `${BASE_URL}/opengraph-image`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/#website`,
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Is InvoiceHaul really free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, InvoiceHaul is 100% free. No credit card, no trial period, no hidden fees. You can create and export unlimited invoices at no cost.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need to sign up?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. No account, no email, no sign-up. Just open the site and start creating your invoice.",
                },
            },
            {
                "@type": "Question",
                name: "Can I add my MC and DOT number?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Built specifically for truckers — MC# and DOT# fields are right at the top of the invoice.",
                },
            },
            {
                "@type": "Question",
                name: "Where is my data stored?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Locally on your device. InvoiceHaul never sends your data to a server or shares it with anyone.",
                },
            },
            {
                "@type": "Question",
                name: "Are there watermarks on the PDF?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Unlike other 'free' tools, your PDF has zero watermarks, zero branding, and zero 'created with' badges.",
                },
            },
        ],
    },
];
