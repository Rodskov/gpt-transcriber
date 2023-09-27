'use client';
import React from 'react'


function Button({ onClick }) {
    return (
        <div className='button'>
            <div className='button-container'>
                <button onClick={onClick}>Change Voice</button>
            </div>
        </div>
    )
}

export default Button