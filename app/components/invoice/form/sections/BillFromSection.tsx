"use client";

// RHF
import { useFieldArray, useFormContext } from "react-hook-form";

// Components
import {
    BaseButton,
    FormCustomInput,
    FormInput,
    Subheading,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

// Icons
import { Plus } from "lucide-react";

const BillFromSection = () => {
    const { control } = useFormContext();

    const { _t } = useTranslationContext();

    const CUSTOM_INPUT_NAME = "sender.customInputs";
    const { fields, append, remove } = useFieldArray({
        control: control,
        name: CUSTOM_INPUT_NAME,
    });

    const addNewCustomInput = () => {
        append({
            key: "",
            value: "",
        });
    };

    const removeCustomInput = (index: number) => {
        remove(index);
    };

    return (
        <section className="flex flex-col gap-3">
            <Subheading>Carrier (You):</Subheading>
            <FormInput
                name="sender.name"
                label="Carrier Name"
                placeholder="e.g. Nate's Transportation LLC"
            />
            <FormInput
                name="sender.mcNumber"
                label="MC #"
                placeholder="MC-123456"
            />
            <FormInput
                name="sender.dotNumber"
                label="DOT #"
                placeholder="1234567"
            />
            <FormInput
                name="sender.address"
                label={_t("form.steps.fromAndTo.address")}
                placeholder="Your address"
            />
            <FormInput
                name="sender.zipCode"
                label={_t("form.steps.fromAndTo.zipCode")}
                placeholder="Your zip code"
            />
            <FormInput
                name="sender.city"
                label={_t("form.steps.fromAndTo.city")}
                placeholder="Your city"
            />
            <FormInput
                name="sender.country"
                label="State"
                placeholder="Your state"
            />
            <FormInput
                name="sender.email"
                label={_t("form.steps.fromAndTo.email")}
                placeholder="Your email"
            />
            <FormInput
                name="sender.phone"
                label={_t("form.steps.fromAndTo.phone")}
                placeholder="Your phone number"
                type="text"
                inputMode="tel"
                pattern="[0-9+\-\(\)\s]*"
                aria-describedby="phone-format"
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/[^\d\+\-\(\)\s]/g, "");
                }}
            />
            {/* //? key = field.id fixes a bug where wrong field gets deleted  */}
            {fields?.map((field, index) => (
                <FormCustomInput
                    key={field.id}
                    index={index}
                    location={CUSTOM_INPUT_NAME}
                    removeField={removeCustomInput}
                />
            ))}
            <BaseButton
                tooltipLabel="Add custom input to sender"
                size="sm"
                variant="link"
                className="w-fit"
                onClick={addNewCustomInput}
            >
                <Plus />
                {_t("form.steps.fromAndTo.addCustomInput")}
            </BaseButton>
        </section>
    );
};

export default BillFromSection;
