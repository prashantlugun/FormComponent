"use client"

import React, { useState } from 'react';
import { Component } from 'react';

import styles from './button.module.css';

import { ButtonProps } from "./type";

const Button = (props: ButtonProps) => {

    const {
        id,
        name,
        type = "button",
        value,
        variant = "primary",
        disabled,
        children,
        sx,
        onClick
    } = props;


    return (
        <div className={styles.button}>
            <button
                id={id}
                name={name}
                type={type}
                value={value}
                className={
                    disabled
                        ? styles.disabledClass
                        : variant === ""
                            ? styles.primary
                            : styles[variant]
                }
                disabled={disabled ? true : false}
                style={sx}
                onClick={onClick}
            >{children}</button>
        </div>
    );
}

export default Button;