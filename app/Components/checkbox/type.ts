import React, { ChangeEvent } from 'react'

export interface CheckboxProps {
    id?: string | undefined;
    name?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    multiple?: boolean | undefined;
    required?: boolean | undefined;
    errorText?: string | undefined;
    error?: string | undefined;
    onChange?: string | undefined;
    onClick?: (e: ChangeEvent<HTMLElement>) => any;
    sx?: object | undefined;
};
