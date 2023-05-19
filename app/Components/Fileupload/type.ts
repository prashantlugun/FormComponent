export interface FileuploadProps {
    id?: string;
    name?: string;
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    required?: boolean;
    maxSize?: number | undefined;
    onClick?: () => any;
    sx?: object;
};
