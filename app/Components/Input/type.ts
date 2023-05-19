import { ChangeEvent, FocusEvent } from "react"

export interface inputProps {
    label?: string,
    sx?: object,
    type?: string
    title?: string
    name?: string
    id?: string
    value?: string | number
    placeholder?: string
    size?: number
    maxLength?: number
    min?: string | number
    max?: string | number
    step?: string | number
    alt?: string
    height?: string | number
    width?: string | number
    list?: string
    autoComplete?: string
    errorText?: string
    error?: boolean
    targetId?: string
    readOnly?: boolean
    disabled?: boolean
    multiple?: boolean
    required?: boolean
    autoFocus?: boolean
    passwordVisibility?: boolean
    validate?: string | number | null
    noValidate?: boolean 
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void | any
    onValidate?: any
}

export interface validateProps {
    e: ChangeEvent<HTMLInputElement>
}