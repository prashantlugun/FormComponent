"use client"


import React from 'react';
import { RadioProps } from './type';

const Radio = (props: RadioProps) => {
    // onClick: any;

    const { id, name, value, label, checked, disabled, onClick, sx } = props;

    return (
        <div>
            <label>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled ? true : false}
                    // onClick={e => console.log(value)}
                    style={sx}
                />
                {label}
            </label>
        </div>
    );
}

export default Radio;

