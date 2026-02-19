import Link from "next/link";

const BaseFooter = () => {
    return (
        <footer className="border-t border-[hsl(var(--border))] py-10 mt-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} InvoiceHaul &mdash; Free invoice generator for truckers.</p>
                <div className="flex gap-6">
                    <Link href="/invoice" className="hover:text-gray-900 transition-colors">
                        Create Invoice
                    </Link>
                    <a
                        href="https://fueltax.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition-colors"
                    >
                        IFTA Fuel Tax Tool
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default BaseFooter;
