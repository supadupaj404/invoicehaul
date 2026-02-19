"use client";

import { useState, useRef, useEffect } from "react";

type EditableFieldProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    multiline?: boolean;
    type?: "text" | "number" | "date";
};

const EditableField = ({
    value,
    onChange,
    placeholder = "Click to edit",
    className = "",
    style = {},
    multiline = false,
    type = "text",
}: EditableFieldProps) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editing]);

    const displayValue = value || "";
    const isEmpty = !value || value.trim() === "" || value === "0";

    if (editing) {
        const sharedProps = {
            ref: inputRef as any,
            value: displayValue,
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                onChange(e.target.value),
            onBlur: () => setEditing(false),
            onKeyDown: (e: React.KeyboardEvent) => {
                if (e.key === "Enter" && !multiline) setEditing(false);
                if (e.key === "Escape") setEditing(false);
            },
            className: `${className} outline-none bg-blue-50/60 border-b-2 border-blue-400 px-0.5 -mx-0.5 rounded-sm`,
            style: { ...style, minWidth: "3rem" },
            placeholder,
        };

        if (multiline) {
            return <textarea {...sharedProps} rows={2} />;
        }

        return <input type={type} {...sharedProps} />;
    }

    return (
        <span
            onClick={() => setEditing(true)}
            className={`${className} cursor-pointer transition-all hover:bg-blue-50/60 hover:border-b hover:border-blue-300 rounded-sm px-0.5 -mx-0.5 inline-block min-w-[2rem]`}
            style={style}
        >
            {isEmpty ? (
                <span className="text-gray-300 italic">{placeholder}</span>
            ) : (
                displayValue
            )}
        </span>
    );
};

export default EditableField;
