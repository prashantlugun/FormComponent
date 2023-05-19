"use client"

import React, { useState } from 'react';

// Types
import { inputProps } from './type';

// Style
import style from './input.module.css';

const _Alpha = (value: any) => { return new RegExp(/^[a-zA-Z\s]$/).test(value) };
const _Email = (value: any) => { return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(value) };
const _Number = (value: any) => { return new RegExp(/^[0-9]*$/).test(value) };
const _StrongPassword = (value: any) => { return new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(value) };
const _IndMobileNumber = (value: any) => { return new RegExp(/^[7-9][0-9]{9}$/).test(value) };
const _IndPhoneNumber = (value: any) => { return new RegExp(/^\d{5}([- ]*)\d{6}$/).test(value) };
const _ForeignerMobileNumber = (value: any) => { return new RegExp(/^[0-9]{0,14}$/).test(value) };
const _ForeignerPhoneNumber = (value: any) => { return new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/).test(value) };

const validateRegex = (value: string, regex: RegExp, errorText: string) => {
    const isValid = regex.test(value);
    return {
        isValid,
        errorText: isValid ? '' : errorText,
    };
};

const Input = ({
    type = 'text',
    label,
    title,
    id,
    name,
    value,
    placeholder,
    size,
    min,
    max,
    maxLength,
    step,
    alt,
    height,
    width,
    list,
    errorText,
    error,
    autoComplete,
    autoFocus,
    readOnly,
    disabled,
    multiple,
    required,
    passwordVisibility,
    noValidate,
    onChange,
    onFocus,
    sx,
}: inputProps) => {

    const [visibility, setVisibility] = useState<boolean>(false)
    const [showErrorInfo, setShowErrorInfo] = useState<boolean>(false)
    const [isValid, setIsValid] = useState<boolean>(true);
    const [erorrText, setErrorText] = useState<string>("");

    const defaultErrorText = 'This field contains error!';

    const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        let isValid = true;
        let errorMessage = '';

        if (type === 'text') {
            isValid = value !== '';
            errorMessage = isValid ? '' : errorText || "Text field can't be empty";
        } else if (type === 'password') {
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
            const isMatch = passRegex.test(value);
            isValid = value.length > 0 && isMatch;
            if (!isValid) {
                const missingRequirements = [];

                if (!/[a-z]/.test(value)) missingRequirements.push('lowercase');
                if (!/[A-Z]/.test(value)) missingRequirements.push('uppercase');
                if (!/[@$!%*?&]/.test(value)) missingRequirements.push('special character');
                if (!/\d/.test(value)) missingRequirements.push('number');
                if (value.length < 8 || value.length > 16) missingRequirements.push('between 8-16 characters');

                errorMessage = isValid ? '' : `Password must contain ${missingRequirements.join(', ')} and must be between 8-16 characters`;
            }
        } else if (type === 'email') {
            isValid = value.length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            errorMessage = isValid ? '' : errorText || 'Invalid email';
        } else if (type === 'url') {
            isValid = value.length > 0 && /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(\S*)?$/.test(value);
            errorMessage = isValid ? '' : 'Invalid URL';
        }

        if (!isValid && value.length === 0) {
            errorMessage = `${label? label: 'Field'} is required`;
        }

        setIsValid(isValid);
        setErrorText(errorMessage);
    };
    return (
        <>
            <div className={style.textField}>
                {<label
                    style={
                        erorrText ? {
                            color: 'red'
                        } : {}
                    }
                >{label}</label>
                }
                <div className={`${style.input}`}>
                    <input
                        className={`${style['mobile-Number']} ${style['paddingRight']}`}
                        title={title}
                        type={!type || type === '' || visibility ? 'text' : type}
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        size={size}
                        min={min}
                        max={max}
                        maxLength={maxLength}
                        step={step}
                        alt={alt}
                        height={height}
                        width={width}
                        list={list}
                        autoComplete={autoComplete}
                        autoFocus={autoFocus ? true : false}
                        disabled={disabled}
                        readOnly={readOnly ? true : false}
                        multiple={multiple ? true : false}
                        required={required ? true : false}
                        onChange={noValidate ? onChange : validate}
                        onFocus={onFocus}
                        onBlur={noValidate ? (e) => onblur : validate}
                        style={{
                            ...sx,
                            borderColor: isValid ? "" : "red"
                        }}
                    />

                    {type === 'password' && passwordVisibility && (
                        <img
                            className={style.password}
                            // className={classes.icons}
                            style={error ? { marginLeft: '-60px' } : {}}
                            src={
                                visibility
                                    ? 'https://img.icons8.com/ios-glyphs/30/visible--v1.png'
                                    : 'https://img.icons8.com/ios-glyphs/30/closed-eye--v1.png'
                            }
                            alt={visibility ? 'hide' : 'show'}
                            onClick={() => setVisibility(!visibility)}
                        />
                    )}
                    {/* {erorrText && (
                        <img
                            // error-data={errorText ? errorText : defaultErrorText}
                            className={style.infoImg}
                            // title={errorText ? errorText : defaultErrorText}
                            // className={classes.icons}
                            src='https://img.icons8.com/fluency/48/info.png'
                            alt='info'
                            onMouseEnter={() => {
                                setShowErrorInfo(!showErrorInfo)
                            }}
                            onMouseLeave={() => {
                                setShowErrorInfo(!showErrorInfo)
                            }}
                        />
                    )} */}
                </div>
                {erorrText && (
                    <div className={style.errorInfo}>
                        {erorrText}
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;


const openEye = () => {
    return (
        <>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1" />
        </>
    )
}
