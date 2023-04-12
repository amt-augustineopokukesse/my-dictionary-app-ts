import React, { useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import '../assets/styles/Result.scss';
import newWindowIcon from '../assets/images/icon-new-window.svg';
import { useTheme } from '../context/ThemeContext';

interface ResultProps {
  wordData: {
    word: string;
    phonetic: string;
    meanings: {
      partOfSpeech: string;
      definitions: {
        definition: string;
        synonyms: string[];
        antonyms: string[];
        example?: string;
      }[];
      synonyms: string[];
      antonyms: string[];
    }[];
    phonetics: {
      text: string;
      audio: string;
      sourceUrl?: string;
      license?: {
        name: string;
        url: string;
      };
    }[];
    license: {
      name: string;
      url: string;
    };
    sourceUrls: string[];
  };
}


const Result: React.FC<ResultProps> = ({ wordData }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const titles = document.querySelectorAll('.meanings_title') as NodeListOf<HTMLElement>;
    titles.forEach((title) => {
      if (theme === 'dark') {
        title.classList.add('dark');
      } else {
        title.classList.remove('dark');
      }
    })

    const sourceSection = document.querySelector('.source-section') as HTMLElement;
    const sourceLink = document.querySelector('.source-link') as HTMLElement;
    if (theme === 'dark') {
      sourceSection.classList.add('dark');
      sourceLink.style.color = '#FFFFFF';
    } else {
      sourceSection.classList.remove('dark');
      sourceLink.style.color = '';
    }
  });

  return (
    <div className="result">
      <div className='wordNAudio'>
        <div className='word'>
          <h1>{wordData.word}</h1>
          <p className='wordPhonetic'>{wordData.phonetic}</p>
        </div>
        <div className='audio'>
          {/* <AudioPlayer audioUrl={wordData.phonetics?.find((phonetic) => phonetic.audio !== '')?.audio || ''} /> */}
          {wordData.phonetics.find((phonetic) => phonetic.audio !== '') && (
            <AudioPlayer audioUrl={wordData.phonetics.find((phonetic) => phonetic.audio !== '')?.audio || ''} />
          )}
        </div>
      </div>
      {wordData.meanings.map((meaning, index) => (
        <div key={index} className='meanings'>
          <h2 className='meanings_title'>{meaning.partOfSpeech}</h2>
          <h3>Meaning</h3>
          <ul> 
            {meaning.definitions.map((definition, index) => (
              <div key={index} className="definition-section">
                {/* Each definition object for both noun and verb */}
                <li><p>{definition.definition}</p></li>
                {definition.example && (
                  <p className="example">{`"${definition.example}"`}</p>
                )}
                {definition.synonyms.length > 0 && (
                  <p>
                    Synonyms:{' '}
                    {definition.synonyms.map((synonym, index) => (
                      <span key={index}>{synonym}, </span>
                    ))}
                  </p>
                )}
                {definition.antonyms.length > 0 && (
                  <p>
                    Antonyms:{' '}
                    {definition.antonyms.map((antonym, index) => (
                      <span key={index}>{antonym}, </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (
            <p className='synonym-section'>
              <span className='synonym-text'>Synonyms:{' '}</span> 
              {meaning.synonyms.map((synonym, index) => (
                <span key={index} className='synonym'>{synonym}, </span>
              ))}
            </p>
          )}
          {meaning.antonyms.length > 0 && (
            <p className='antonym-section'>
              <span className='antonym-text'>Antonyms:{' '}</span>
              {meaning.antonyms.map((antonym, index) => (
                <span key={index} className='antonym'>{antonym}, </span>
              ))}
            </p>
          )}
        </div>
      ))}
      {/* <p>
        License: {wordData.license.name}{' '}
        <a href={wordData.license.url}>{wordData.license.url}</a>
      </p> */}
      {wordData.sourceUrls.length > 0 && (
        <p className='source-section'>
          <span className='source-text'>Source:{' '}</span>
          {wordData.sourceUrls.map((sourceUrl, index) => (
            <a key={index} href={sourceUrl} target='_blank' rel="noreferrer" className='source-link'>
              {sourceUrl}{' '}
              <img src={newWindowIcon} alt="external link" />
            </a>
          ))}
        </p>
      )}
    </div>
  );
};

export default Result;
