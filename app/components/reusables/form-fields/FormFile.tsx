"use client";

import { ChangeEvent, useRef, useState } from "react";

// RHF
import { useFormContext, useWatch } from "react-hook-form";

// ShadCn components
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";

// Components
import { BaseButton } from "@/app/components";

// Icons
import { ImageMinus, Image, X } from "lucide-react";

// Types
import { NameType } from "@/types";

type FormFileProps = {
    name: NameType;
    label?: string;
    placeholder?: string;
};

const FormFile = ({ name, label, placeholder }: FormFileProps) => {
    const { control, setValue } = useFormContext();

    const logoImage = useWatch({
        name: name,
        control,
    });

    const [base64Image, setBase64Image] = useState<string>(logoImage ?? "");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target!.result as string;
                setBase64Image(base64String);
                setValue(name, base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        setBase64Image("");
        setValue(name, "");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex w-full gap-5 items-center text-sm">
                        <FormLabel className="flex-1">{label}:</FormLabel>
                        <div className="flex-1">
                            {base64Image ? (
                                <div className="relative w-[13rem]">
                                    <img
                                        src={base64Image}
                                        className="w-[13rem] h-[2.5rem] object-contain rounded-md border"
                                        style={{ borderColor: "#e5e1dc" }}
                                    />
                                    <button
                                        type="button"
                                        onClick={removeLogo}
                                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                                        style={{ background: "#ef4444", color: "#fff" }}
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ) : (
                                <label
                                    htmlFor={name}
                                    className="flex items-center gap-2 h-10 w-[13rem] px-3 cursor-pointer rounded-md border border-dashed text-sm transition-colors hover:border-green-500"
                                    style={{ borderColor: "#d1cdc7", background: "#f7f5f2", color: "#9ca3af" }}
                                >
                                    <Image className="w-4 h-4 shrink-0" />
                                    <span className="truncate">{placeholder}</span>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        id={name}
                                        className="hidden"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                </label>
                            )}
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
            )}
        />
    );
};

export default FormFile;
