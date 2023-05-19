"use client"


import React from 'react';
import { LabelProps } from "./type";

const Label = (props: LabelProps) => {

    const {
        id,
        htmlfor,
        variant,
        sx,
        children,
        size,
    } = props;

    return (
        <div>
            <label
                id={id}
                htmlFor={htmlfor}
                className={variant}
                style={sx}
            >
                {children}
            </label>
        </div>
    );
}

export default Label;