import React, { useState } from 'react';

const FontSelector: React.FC = () => {
  const [font, setFont] = useState('serif');

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(event.target.value);
    document.body.style.fontFamily = event.target.value;
  };

  return (
    <div>
      {/* <label htmlFor="font-selector">Choose a font:</label> */}
      <select id="font-selector" value={font} onChange={handleFontChange}>
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans-serif</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
  );
};

export default FontSelector;
