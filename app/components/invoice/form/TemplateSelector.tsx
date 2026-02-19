"use client";

import Image from "next/image";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Label } from "@/components/ui/label";

// Components
import {
    BaseButton,
    InvoiceTemplate1,
    InvoiceTemplate2,
} from "@/app/components";

// Template images
import template1 from "@/public/assets/img/invoice-1-example.png";
import template2 from "@/public/assets/img/invoice-2-example.png";

// Icons
import { Check } from "lucide-react";

// Types
import { InvoiceType } from "@/types";

const TemplateSelector = () => {
    const { watch, setValue } = useFormContext<InvoiceType>();
    const formValues = watch();
    const templates = [
        {
            id: 1,
            name: "Template 1",
            img: template1,
            component: <InvoiceTemplate1 {...formValues} />,
        },
        {
            id: 2,
            name: "Template 2",
            img: template2,
            component: <InvoiceTemplate2 {...formValues} />,
        },
    ];
    return (
        <div>
            <Label>Choose Invoice Template:</Label>

            <div className="grid grid-cols-2 gap-4 mt-2">
                {templates.map((template) => {
                    const isSelected = formValues.details.pdfTemplate === template.id;
                    return (
                        <div
                            key={template.id}
                            className="flex flex-col gap-2 cursor-pointer"
                            onClick={() => setValue("details.pdfTemplate", template.id)}
                        >
                            <p className="text-xs font-medium" style={{ color: "#6b7280" }}>
                                {template.name}
                            </p>

                            <div className="relative">
                                {isSelected && (
                                    <div
                                        className="absolute right-2 top-2 rounded-full p-0.5 z-10"
                                        style={{ background: "#22c55e" }}
                                    >
                                        <Check className="w-3.5 h-3.5 text-white" />
                                    </div>
                                )}
                                <Image
                                    src={template.img}
                                    alt={template.name}
                                    width={250}
                                    height={350}
                                    placeholder="blur"
                                    className="w-full h-auto rounded-lg transition-all"
                                    style={{
                                        border: isSelected ? "2px solid #22c55e" : "2px solid #e5e1dc",
                                    }}
                                />
                            </div>

                            <BaseButton
                                size="sm"
                                variant={isSelected ? "default" : "outline"}
                                className="w-full text-xs"
                                onClick={() => setValue("details.pdfTemplate", template.id)}
                            >
                                {isSelected ? "Selected" : "Select"}
                            </BaseButton>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TemplateSelector;
