import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../assets/styles/ThemeButton.scss';
import moonIcon from '../assets/images/icon-moon.svg'
import moonIconDark from '../assets/images/icon-moon-purple.svg'

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-button" onClick={handleThemeChange}>
      {theme === 'light' ? (
        <img src= {moonIconDark} alt="light mode" />
      ) : (
        <img src={moonIcon} alt="dark mode" />
      )}
    </button>
  );
};

export default ThemeButton;
