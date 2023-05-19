"use client"

import React, { lazy, Suspense } from 'react';
import { CheckboxProps } from './type';

const Checkbox = (props: CheckboxProps) => {

  // console.log(`Checkbox :: `, props)

  const {
    id,
    name,
    value,
    label,
    checked,
    disabled,
    required,
    onClick,
    sx
  } = props;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled ? true : false}
          onChange={onClick}
          style={sx}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
