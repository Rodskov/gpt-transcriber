'use client';
import React, { useState } from 'react';


function InputText({ value, onChange }) {
    return(
        <div className='input'>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Text to convert"
            />
        </div>
        
    )
}

export default InputText