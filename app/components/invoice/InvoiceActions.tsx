"use client";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import {
  PdfViewer,
  BaseButton,
  InvoiceExportModal,
} from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { FileInput, Import } from "lucide-react";

const InvoiceActions = () => {
  const { invoicePdfLoading } = useInvoiceContext();

  const { _t } = useTranslationContext();
  return (
    <div className="w-full xl:w-[45%]">
      <Card className="h-auto xl:sticky xl:top-4 p-3">
        {/* Top bar: Generate + Export */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <BaseButton
            type="submit"
            size="sm"
            tooltipLabel="Generate your invoice"
            loading={invoicePdfLoading}
            loadingText="Generating..."
          >
            <FileInput className="w-3.5 h-3.5" />
            {_t("actions.generatePdf")}
          </BaseButton>

          <InvoiceExportModal>
            <BaseButton
              variant="outline"
              size="sm"
              tooltipLabel="Export invoice"
              disabled={invoicePdfLoading}
            >
              <Import className="w-3.5 h-3.5" />
              {_t("actions.exportInvoice")}
            </BaseButton>
          </InvoiceExportModal>
        </div>

        {/* Live preview */}
        <div className="w-full">
          <PdfViewer />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceActions;
