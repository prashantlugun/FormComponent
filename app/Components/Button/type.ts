export interface ButtonProps {
    id?: string;
    name?: string;
    type?: "button" | "submit" | "reset" | undefined;
    value?: string;
    variant?: string | undefined;
    disabled?: boolean;
    sx?: object
    children?: React.ReactNode;
    onClick?: () => any;
}