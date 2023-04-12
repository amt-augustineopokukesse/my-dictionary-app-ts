import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import NotFound from './components/NotFound';
import { getDefinition, Definition } from './utils/api';
import './App.scss';
import ThemeProvider from './context/ThemeContext';

const App: React.FC = () => {
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [error, setError] = useState<boolean>(false);
  console.log(definitions);
  
  const search = async (searchTerm: string) => {
    try {
      const definitions = await getDefinition(searchTerm);
      setDefinitions(definitions);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    if(definitions.length === 0) {
      search('keyboard');
    }
  });

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <SearchBar onSubmit={search} />
        {error ? (
          <NotFound />
        ) : (
          definitions.map((definition) => (
            <Result
              key={definition.word}
              // word={definition.word}
              wordData={definition}
            />
          ))
          //<Result wordData={definitions[0]} />
  
        )}
      </div>
    </ThemeProvider>
  ) as React.ReactElement;
};

export default App;
