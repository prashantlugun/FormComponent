"use client"

import React, { useState } from 'react';
import { TextareaProps } from './type';
import styles from './textarea.module.css';

const Textarea = (props: TextareaProps) => {
    const [isValid, setIsValid] = useState<boolean>(true);
    const [errorText, setErrorText] = useState<string>("");

    const {
        id,
        name,
        value,
        label,
        rows,
        cols,
        autoFocus,
        disabled,
        maxLength,
        placeholder,
        required,
        readOnly,
        noValidate,
        onChange
    } = props;

    const validate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        let isValid = true;
        let errorMessage = '';

        if (value === '') {
            isValid = false;
            errorMessage = 'This field is required';
        }

        setIsValid(isValid);
        setErrorText(errorMessage);
    };

    return (
        <div className={styles.textAreaField}>
            {label && <label
                style={
                    !isValid ? {
                        color: 'red'
                    } : {}
                }
            >{label}</label>}
            <textarea
                className={styles.textArea}
                id={id}
                name={name}
                value={value}
                rows={rows}
                cols={cols}
                autoFocus={autoFocus ? true : false}
                disabled={disabled ? true : false}
                maxLength={maxLength}
                placeholder={placeholder}
                required={required ? true : false}
                readOnly={readOnly ? true : false}
                onChange={noValidate ? (e) => onChange : validate}
                onBlur={noValidate ? (e) => onblur : validate}
                style={{
                    border: isValid ? '1px solid #000' : '1px solid red'
                }}
            ></textarea>
            {errorText && (
                <div className={styles.errorInfo}>{errorText}</div>
            )}
        </div>
    );
};

export default Textarea;
