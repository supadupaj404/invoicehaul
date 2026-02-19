"use client";

// Components
import {
    Charges,
    FormTextarea,
    SignatureModal,
    Subheading,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";
import { SignatureContextProvider } from "@/contexts/SignatureContext";

const InvoiceSummary = () => {
    const { _t } = useTranslationContext();

    return (
        <section>
            <Subheading>{_t("form.steps.summary.heading")}:</Subheading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column — Signature, Notes, Terms */}
                <div className="flex flex-col gap-5">
                    <SignatureContextProvider>
                        <SignatureModal />
                    </SignatureContextProvider>

                    <FormTextarea
                        name="details.additionalNotes"
                        label={_t("form.steps.summary.additionalNotes")}
                        placeholder="Your additional notes"
                    />
                    <FormTextarea
                        name="details.paymentTerms"
                        label={_t("form.steps.summary.paymentTerms")}
                        placeholder="Ex: Net 30"
                    />
                </div>

                {/* Right column — Charges */}
                <Charges />
            </div>
        </section>
    );
};

export default InvoiceSummary;
