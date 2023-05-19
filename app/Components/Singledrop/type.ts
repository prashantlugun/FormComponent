export interface DropdownOption {
    value?: string;
    label?: string;
}

export interface DropdownProps {
    options: DropdownOption[] //Important
    label?: string
    // onSelect?: (selectedOptions: string[]) => void //Important
    onSelect: ((selectedOptions: string[]) => any) | undefined
    autofocus?: boolean
    disabled?: boolean
    name?: string
    required?: boolean
}

export interface Option {
    value?: string;
    label?: string;
}
