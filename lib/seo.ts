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
                    text: "Yes, InvoiceHaul is 100% free. There is no credit card required, no trial period, no hidden fees, and no premium tier. You can create and export unlimited invoices at no cost.",
                },
            },
            {
                "@type": "Question",
                name: "Do I need to create an account or sign up?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. InvoiceHaul requires no account, no sign-up, and no email address. Just open the site and start creating your invoice immediately.",
                },
            },
            {
                "@type": "Question",
                name: "Can I add my MC number and DOT number to the invoice?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. InvoiceHaul was built specifically for truckers and includes dedicated fields for your MC number (Motor Carrier number) and DOT number (Department of Transportation number) right at the top of the invoice.",
                },
            },
            {
                "@type": "Question",
                name: "Where is my data stored?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your invoice data is stored locally on your device using your browser's local storage. InvoiceHaul never sends your data to a server, never stores it in a database, and never shares it with anyone. Your information stays on your device.",
                },
            },
            {
                "@type": "Question",
                name: "What format does the invoice export in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "InvoiceHaul exports your invoice as a professional PDF file. The PDF has no watermarks, no branding, and no 'created with' badges. It looks like you made it yourself.",
                },
            },
            {
                "@type": "Question",
                name: "Can I use InvoiceHaul to invoice freight brokers?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. InvoiceHaul is designed specifically for independent truckers and owner-operators who need to invoice freight brokers like RXO, Echo, Coyote, CH Robinson, TQL, and others. It includes fields for load numbers, remittance information, and payment terms that brokers expect to see.",
                },
            },
            {
                "@type": "Question",
                name: "Does InvoiceHaul work on my phone?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. InvoiceHaul is fully responsive and works on phones, tablets, and desktop computers. You can create and export invoices from any device with a web browser.",
                },
            },
            {
                "@type": "Question",
                name: "Are there watermarks on the exported PDF?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Unlike many 'free' invoice tools, InvoiceHaul never adds watermarks, logos, or branding to your exported PDFs. The invoice is clean and professional.",
                },
            },
        ],
    },
];
