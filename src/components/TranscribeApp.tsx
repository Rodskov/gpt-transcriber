'use client';

import React, { useState } from 'react'
import Button from './Button';
import InputText from './InputText';
import VoiceOptions from './VoiceOptions';
import Result from './Result';
import LanguageOptions from './LanguageOptions';

function TranscribeApp() {
  const [textValue, setTextValue] = useState('');
  const [voiceValue, setVoiceValue] = useState('');
  const [languageValue, setLanguageValue] = useState('');

  const handleInputChange = (e: any) => {
    setTextValue(e.target.value)
  }

  const handleVoiceOptionClick = (voiceValue) => {
    setVoiceValue(voiceValue)
  }

  const handleLanguageOptionClick = (languageValue) => {
    setLanguageValue(languageValue)
  }

  const handleButtonClick = () => {
    const jsonString = `{"message": "${textValue}", "language": "${languageValue}", "character": "${voiceValue}"}`
    const jsonText = JSON.parse(jsonString);
    console.log(jsonText);
  }

  return (
    <div>
        <InputText value={textValue} onChange={handleInputChange}/>
        <VoiceOptions onClick={handleVoiceOptionClick}/>
        <LanguageOptions onClick={handleLanguageOptionClick}/>
        <Button onClick={handleButtonClick}/>
        <Result />
    </div>
  )
}

export default TranscribeApp