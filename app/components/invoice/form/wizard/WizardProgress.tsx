"use client";

// RHF
import { useFormContext } from "react-hook-form";

// React Wizard
import { WizardValues } from "react-use-wizard";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Types
import { InvoiceType, WizardStepType } from "@/types";

type WizardProgressProps = {
    wizard: WizardValues;
};

const WizardProgress = ({ wizard }: WizardProgressProps) => {
    const { activeStep } = wizard;

    const {
        formState: { errors },
    } = useFormContext<InvoiceType>();

    const { _t } = useTranslationContext();

    const step1Valid = !errors.sender && !errors.receiver;
    const step2Valid =
        !errors.details?.invoiceNumber &&
        !errors.details?.dueDate &&
        !errors.details?.invoiceDate &&
        !errors.details?.currency;

    const step3Valid = !errors.details?.items;
    const step4Valid = !errors.details?.paymentInformation;
    const step5Valid =
        !errors.details?.paymentTerms &&
        !errors.details?.subTotal &&
        !errors.details?.totalAmount &&
        !errors.details?.discountDetails?.amount &&
        !errors.details?.taxDetails?.amount &&
        !errors.details?.shippingDetails?.cost;

    const steps: WizardStepType[] = [
        { id: 0, label: _t("form.wizard.fromAndTo"), isValid: step1Valid },
        { id: 1, label: _t("form.wizard.invoiceDetails"), isValid: step2Valid },
        { id: 2, label: _t("form.wizard.lineItems"), isValid: step3Valid },
        { id: 3, label: _t("form.wizard.paymentInfo"), isValid: step4Valid },
        { id: 4, label: _t("form.wizard.summary"), isValid: step5Valid },
    ];

    return (
        <div className="flex gap-1 p-1 rounded-lg" style={{ background: "#f0ece7" }}>
            {steps.map((step) => {
                const isActive = step.id === activeStep;
                const hasError = !step.isValid;

                return (
                    <button
                        key={step.id}
                        type="button"
                        onClick={() => wizard.goToStep(step.id)}
                        className="flex-1 py-2 px-1 text-center text-xs sm:text-sm font-medium transition-all cursor-pointer rounded-md"
                        style={{
                            color: isActive ? "#1a1a1a" : hasError ? "#ef4444" : "#9ca3af",
                            fontWeight: isActive ? 600 : 500,
                            background: isActive ? "#ffffff" : "transparent",
                            boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                        }}
                    >
                        {step.label}
                    </button>
                );
            })}
        </div>
    );
};

export default WizardProgress;
