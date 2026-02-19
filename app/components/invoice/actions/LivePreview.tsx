// Components
import { DynamicInvoiceTemplate } from "@/app/components";

// Types
import { InvoiceType } from "@/types";

type LivePreviewProps = {
    data: InvoiceType;
};

export default function LivePreview({ data }: LivePreviewProps) {
    return (
        <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e5e1dc" }}>
            <div className="px-2 py-1 border-b text-[0.65rem] font-semibold uppercase tracking-wider" style={{ color: "#9ca3af", borderColor: "#e5e1dc", background: "#f7f5f2" }}>
                Live Preview
            </div>
            <DynamicInvoiceTemplate {...data} />
        </div>
    );
}
