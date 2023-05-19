export interface DropdownOption {
  value?: string;
  label?: string;
}

export interface MultiCheck {
  options: DropdownOption[];
  label?: any;
  onSelect: (selectedOptions: string[]) => void;
}

export interface Option {
  value?: string;
  label?: string;
}
