import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../assets/styles/ThemeButton.scss';
import moonIcon from '../assets/images/icon-moon.svg'
import moonIconDark from '../assets/images/icon-moon-purple.svg'

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

    const toggle = document.querySelector(".toggle") as HTMLElement;
    if (theme === 'light'){
      toggle.style.backgroundColor = '#A445ED';
    }else {
      toggle.style.backgroundColor = '';
    }

  };

  return (
    <button className="theme-button" onClick={handleThemeChange}>
      <div className="toggle">
        <div className={`toggle-indicator ${theme === 'light' ? 'off' : 'on'}`}></div>
      </div>
      {theme === 'light' ? (
        <img src= {moonIcon} alt="dark mode" />
      ) : (
        <img src={moonIconDark} alt="light mode" />
      )}
    </button>
  );
};

export default ThemeButton;
