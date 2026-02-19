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
];

export const JSONLD = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "InvoiceHaul",
    description:
        "Free invoice generator for truckers and owner-operators. Create professional freight invoices for brokers — no credit card, no sign-up required.",
    keywords: ROOTKEYWORDS,
    url: BASE_URL,
    applicationCategory: "BusinessApplication",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#website`,
    },
};
