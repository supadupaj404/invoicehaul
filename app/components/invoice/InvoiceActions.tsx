"use client";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import {
  PdfViewer,
  BaseButton,
  NewInvoiceAlert,
  InvoiceLoaderModal,
  InvoiceExportModal,
} from "@/app/components";

// Contexts
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { FileInput, FolderUp, Import, Plus, RotateCcw } from "lucide-react";

const InvoiceActions = () => {
  const { invoicePdfLoading, newInvoice } = useInvoiceContext();

  const { _t } = useTranslationContext();
  return (
    <div className="w-full xl:w-[45%]">
      <Card className="h-auto xl:sticky xl:top-4 p-3">
        {/* Compact toolbar — all buttons in one row */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          {/* Generate pdf button — primary action */}
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

          {/* Load modal button */}
          <InvoiceLoaderModal>
            <BaseButton
              variant="outline"
              size="sm"
              tooltipLabel="Open load invoice menu"
              disabled={invoicePdfLoading}
            >
              <FolderUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Load</span>
            </BaseButton>
          </InvoiceLoaderModal>

          {/* Export modal button */}
          <InvoiceExportModal>
            <BaseButton
              variant="outline"
              size="sm"
              tooltipLabel="Export invoice"
              disabled={invoicePdfLoading}
            >
              <Import className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </BaseButton>
          </InvoiceExportModal>

          {/* New invoice button */}
          <NewInvoiceAlert>
            <BaseButton
              variant="outline"
              size="sm"
              tooltipLabel="Get a new invoice form"
              disabled={invoicePdfLoading}
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New</span>
            </BaseButton>
          </NewInvoiceAlert>

          {/* Reset form button */}
          <NewInvoiceAlert
            title="Reset form?"
            description="This will clear all fields and the saved draft."
            confirmLabel="Reset"
            onConfirm={newInvoice}
          >
            <BaseButton
              variant="ghost"
              size="sm"
              tooltipLabel="Reset entire form"
              disabled={invoicePdfLoading}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </BaseButton>
          </NewInvoiceAlert>
        </div>

        {/* Live preview fills remaining space */}
        <div className="w-full">
          <PdfViewer />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceActions;
