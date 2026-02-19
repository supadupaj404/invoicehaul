"use client";

// ShadCn
import {
    Card,
    CardContent,
} from "@/components/ui/card";

// React Wizard
import { Wizard } from "react-use-wizard";

// Components
import {
    WizardStep,
    BillFromSection,
    BillToSection,
    InvoiceDetails,
    Items,
    PaymentInformation,
    InvoiceSummary,
    BaseButton,
    NewInvoiceAlert,
    InvoiceLoaderModal,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Icons
import { FolderUp, Plus, RotateCcw } from "lucide-react";

const InvoiceForm = () => {
    const { _t } = useTranslationContext();
    const { invoicePdfLoading, newInvoice } = useInvoiceContext();

    return (
        <div className="w-full xl:w-[55%]">
            <Card>
                {/* Header row: title left, action buttons right */}
                <div className="flex items-center justify-between p-4 sm:p-6 pb-3">
                    <div className="flex items-center gap-2.5">
                        <h2 className="text-lg font-bold tracking-tight" style={{ color: "#1a1a1a" }}>
                            Actions
                        </h2>
                    </div>

                    {/* Management buttons — top right */}
                    <div className="flex items-center gap-1">
                        <InvoiceLoaderModal>
                            <BaseButton
                                variant="ghost"
                                size="sm"
                                tooltipLabel="Load a saved invoice"
                                disabled={invoicePdfLoading}
                                className="h-8 px-2.5 text-xs"
                                style={{ color: "#6b7280" }}
                            >
                                <FolderUp className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Load</span>
                            </BaseButton>
                        </InvoiceLoaderModal>

                        <NewInvoiceAlert>
                            <BaseButton
                                variant="ghost"
                                size="sm"
                                tooltipLabel="Start a new invoice"
                                disabled={invoicePdfLoading}
                                className="h-8 px-2.5 text-xs"
                                style={{ color: "#6b7280" }}
                            >
                                <Plus className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">New</span>
                            </BaseButton>
                        </NewInvoiceAlert>

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
                                className="h-8 px-2 text-xs text-red-400 hover:text-red-600 hover:bg-red-50"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                            </BaseButton>
                        </NewInvoiceAlert>
                    </div>
                </div>

                <CardContent>
                    <div className="space-y-6">
                        <Wizard>
                            <WizardStep>
                                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                    <div className="flex-1 min-w-0">
                                        <BillFromSection />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <BillToSection />
                                    </div>
                                </div>
                            </WizardStep>
                            <WizardStep>
                                <div className="flex flex-wrap gap-y-10">
                                    <InvoiceDetails />
                                </div>
                            </WizardStep>

                            <WizardStep>
                                <Items />
                            </WizardStep>

                            <WizardStep>
                                <PaymentInformation />
                            </WizardStep>

                            <WizardStep>
                                <InvoiceSummary />
                            </WizardStep>
                        </Wizard>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InvoiceForm;
