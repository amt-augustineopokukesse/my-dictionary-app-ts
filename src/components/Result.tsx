import React from 'react';
import AudioPlayer from './AudioPlayer';
import '../assets/styles/Result.scss';

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
  const firstWordData = wordData;
  return (
    <div className="result">
      <div className='wordNAudio'>
        <div className='word'>
          <h1>{firstWordData.word}</h1>
          <p>{firstWordData.phonetic}</p>
        </div>
        <div className='audio'>
          <AudioPlayer audioUrl={firstWordData.phonetics?.find((phonetic) => phonetic.audio !== '')?.audio || ''} />
        </div>
      </div>
      {firstWordData.meanings.map((meaning, index) => (
        <div key={index}>
          <h2>{meaning.partOfSpeech}</h2>
          {meaning.definitions.map((definition, index) => (
            <div key={index} className="definition">
              <p>{definition.definition}</p>
              {definition.example && (
                <p className="example">{definition.example}</p>
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
          {meaning.synonyms.length > 0 && (
            <p>
              Synonyms:{' '}
              {meaning.synonyms.map((synonym, index) => (
                <span key={index}>{synonym}, </span>
              ))}
            </p>
          )}
          {meaning.antonyms.length > 0 && (
            <p>
              Antonyms:{' '}
              {meaning.antonyms.map((antonym, index) => (
                <span key={index}>{antonym}, </span>
              ))}
            </p>
          )}
        </div>
      ))}
      <p>
        License: {firstWordData.license.name}{' '}
        <a href={firstWordData.license.url}>{firstWordData.license.url}</a>
      </p>
      {firstWordData.sourceUrls.length > 0 && (
        <p>
          Source(s):{' '}
          {firstWordData.sourceUrls.map((sourceUrl, index) => (
            <a key={index} href={sourceUrl}>
              {sourceUrl}{' '}
            </a>
          ))}
        </p>
      )}
    </div>
  );
};

export default Result;
