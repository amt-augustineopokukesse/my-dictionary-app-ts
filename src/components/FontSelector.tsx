import React, { useState, useEffect } from 'react';
import '../assets/styles/FontSelector.scss';
import { useTheme } from '../context/ThemeContext';

const FontSelector: React.FC = () => {
  const [font, setFont] = useState('sans-serif');
  const { theme } = useTheme();

  useEffect(() => {
    const select = document.getElementById('font-selector') as HTMLElement;
    if (theme === 'dark'){
      select.style.backgroundColor = 'black';
    }else {
      select.style.backgroundColor = '';
    }
  });

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target.value);
    document.body.style.fontFamily = event.target.value;
  };

  // const handleSelectClick = () => {
  //   const select = document.getElementById('font-selector') as HTMLSelectElement;
  //   const options = select.querySelectorAll('option');
  //   const backgroundColor = window.getComputedStyle(select).getPropertyValue('background-color');

  //   options.forEach(option => {
  //     option.style.backgroundColor = backgroundColor;
  //   });
  // };

  return (
    <div className='container'>
      {/* <label htmlFor="font-selector">Choose a font:</label> */}
      <select id="font-selector" value={font} onChange={handleFontChange}>
        <option value="sans-serif">Sans-Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Mono</option>
      </select>
    </div>
  );
};

export default FontSelector;
