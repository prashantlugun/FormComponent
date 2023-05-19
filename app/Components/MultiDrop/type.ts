export interface DropdownOption {
  value?: string;
  label?: string;
}

export interface MultiSelectDropdownProps {
  options: DropdownOption[];
  label?: any;
  onSelect: (selectedOptions: string[]) => void;
}

export interface Option {
  value?: string;
  label?: string;
}
