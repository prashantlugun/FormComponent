// import React from 'react'

// interface rangeProps {
//     id?: string,
//     name?: string,
//     min?: string | number,
//     max?: string | number,
//     defaultValue?: string | number
// }

// const Range = ({
//     id,
//     name,
//     min = 0,
//     max = 100,
//     defaultValue = 21
// }: rangeProps) => {
//     return (
//         <>
//             <input type="range" id={id} name={name} min={min} max={max} step={defaultValue}/>
//         </>
//     )
// }

// export default Range

import React, { useState } from 'react';


interface rangeProps {
    id?: string,
    name?: string,
    min?: string | number,
    max?: string | number,
    defaultValue?: string | number
    step?: string | number
    range: string | number,
    updateRange: (e: any)=> void
}

const Range = ({ 
    id,
    name,
    min,
    max,
    defaultValue,
    step,
    range, 
    updateRange 
}: rangeProps) => {
    const updateRangeValue = (e: any) => {
        updateRange(e.target.value);
    };

    return (
        <div>
            <input
                id={id}
                type="range"
                value={range}
                min={min}
                max={max}
                step={step}
                onChange={updateRangeValue}
            />
            <span id="output">{range}</span>
        </div>
    );
};

export default Range;

