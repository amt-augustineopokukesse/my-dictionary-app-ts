import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import searchLogo from '../assets/images/icon-search.svg';
import '../assets/styles/SearchBar.scss';
import { useTheme } from '../context/ThemeContext';

interface SearchBarProps {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('keyboard');
  const [error, setError] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const search = document.querySelector('.searchBar') as HTMLElement;
    if (theme === 'dark'){
      search.style.backgroundColor = '#1F1F1F';
      search.style.color = 'white';
    }else {
      search.style.backgroundColor = '';
      search.style.color = '';
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      setError('Input field cannot be left blank');
      return;
    } else {
      try{
        onSubmit(searchTerm.trim());
        setSearchTerm('');
      } catch(Error) {
        console.log(Error)
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className='searchBar'>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit"><img src={searchLogo} alt="Search Logo" /></button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SearchBar;
