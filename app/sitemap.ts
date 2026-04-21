import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return [
        {
            url: "https://invoicehaul.com",
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://invoicehaul.com/invoice/quick",
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://invoicehaul.com/invoice",
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];
}
