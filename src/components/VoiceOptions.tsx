'use client';

import React, { useState } from 'react'

const VoiceOptions = ({ onClick }) => {
  const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (voiceName) => {
        if (activeButton === voiceName) {
        setActiveButton(null);
        } else {
        setActiveButton(voiceName);
        }

    console.log(voiceName);
    onClick(voiceName);
  };

  return (
    <div className='voice-options'>
        Choose a character:
        <br></br>
        <div className='button-container'>
            <button onClick={() => handleButtonClick('School Girl')} className="option-button">
                School Girl
            </button>

            <button onClick={() => handleButtonClick('Soldier')} className="option-button">
                Soldier
            </button>

            <button onClick={() => handleButtonClick('Sarcastic Teenager')} className="option-button">
                Sarcastic Teenager
            </button>

            <button onClick={() => handleButtonClick('Professional Writer')} className="option-button">
                Professional Writer
            </button>

            <button onClick={() => handleButtonClick('Philosopher')} className="option-button">
                Philosopher
            </button>
        </div>
    </div>
  )
}

export default VoiceOptions