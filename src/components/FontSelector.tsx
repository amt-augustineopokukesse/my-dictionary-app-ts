import React, { useState } from 'react';
import '../assets/styles/FontSelector.scss';

const FontSelector: React.FC = () => {
  const [font, setFont] = useState('sans-serif');

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target.value);
    document.body.style.fontFamily = event.target.value;
  };

  return (
    <div>
      {/* <label htmlFor="font-selector">Choose a font:</label> */}
      <select id="font-selector" value={font} onChange={handleFontChange}>
        <option value="sans-serif">Sans-Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
  );
};

export default FontSelector;
