import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import NotFound from './components/NotFound';
import { getDefinition, Definition } from './utils/api';
import './App.scss';

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
      )}
    </div>
  );
};

export default App;
