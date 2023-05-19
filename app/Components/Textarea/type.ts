import { ChangeEvent, FocusEvent } from "react";

export interface TextareaProps {
    id?: string;
    name?: string;
    value?: string;
    label?: string;
    rows?: number;
    cols?: number;
    autoFocus?: boolean;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    noValidate?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};