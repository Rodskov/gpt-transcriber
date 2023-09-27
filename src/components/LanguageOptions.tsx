'use client';

import React, { useState } from 'react'

const LanguageOptions = ({ onClick }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (languageName) => {
        if (activeButton === languageName) {
        setActiveButton(null);
        } else {
        setActiveButton(languageName);
        }

    console.log(languageName);
    onClick(languageName);
  };

  return (
    <div className='language-options'>
        Choose a language:
        <br></br>
        <div className='button-container'>
            <button onClick={() => handleButtonClick('English')} className="option-button">
                English
            </button>

            <button onClick={() => handleButtonClick('Filipino')} className="option-button">
                Filipino
            </button>

            <button onClick={() => handleButtonClick('Pirate Speak')} className="option-button">
                Pirate Speak
            </button>

            <button onClick={() => handleButtonClick('Haiku')} className="option-button">
                Haiku
            </button>

            <button onClick={() => handleButtonClick('Inspirational Quote')} className="option-button">
                Inspirational Quote
            </button>
        </div>
    </div>
  )
}

export default LanguageOptions