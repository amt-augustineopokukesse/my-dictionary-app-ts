import React from 'react';
import FontSelector from './FontSelector';
import ThemeButton from './ThemeButton';
import logo from '../assets/images/logo.svg';
import '../assets/styles/Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logo} alt="App logo" /> 
      <div className="headerRight">
        <FontSelector />
        <ThemeButton />   
      </div>  
    </div>
  );
};

export default Header;
