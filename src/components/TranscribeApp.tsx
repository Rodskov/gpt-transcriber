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
  const [outputData, setOutputData] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    setTextValue(e.target.value)
  }

  const handleVoiceOptionClick = (voiceValue) => {
    setVoiceValue(voiceValue)
  }

  const handleLanguageOptionClick = (languageValue) => {
    setLanguageValue(languageValue)
  }

  const handleButtonClick = async () => {
    const requestBody = {
      message: textValue,
      language: languageValue,
      character: voiceValue,
    };
    console.log(requestBody)
    
    try {
      const response = await fetch('pages/api/generate', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const generatedText = await response.json();
        setOutputData(generatedText);
      } else {
        // Handle error here
        console.error('Error generating text');
      }
    } catch (error) {
      // Handle fetch error here
      console.error('Fetch error:', error);
    }
  };

  return (
    <div>
      <InputText value={textValue} onChange={handleInputChange}/>
      <VoiceOptions onClick={handleVoiceOptionClick}/>
      <LanguageOptions onClick={handleLanguageOptionClick}/>
      <Button onClick={handleButtonClick}/>
      <Result output={outputData}/>
    </div>
  );
}

export default TranscribeApp