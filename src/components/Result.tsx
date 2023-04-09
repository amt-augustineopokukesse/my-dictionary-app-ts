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
  return (
    <div className="result">
      <div className='wordNAudio'>
        <div className='word'>
          <h1>{wordData.word}</h1>
          <p>{wordData.phonetic}</p>
        </div>
        <div className='audio'>
          {/* <AudioPlayer audioUrl={wordData.phonetics?.find((phonetic) => phonetic.audio !== '')?.audio || ''} /> */}
          {wordData.phonetics.find((phonetic) => phonetic.audio !== '') && (
            <AudioPlayer audioUrl={wordData.phonetics.find((phonetic) => phonetic.audio !== '')?.audio || ''} />
          )}
        </div>
      </div>
      {wordData.meanings.map((meaning, index) => (
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
        License: {wordData.license.name}{' '}
        <a href={wordData.license.url}>{wordData.license.url}</a>
      </p>
      {wordData.sourceUrls.length > 0 && (
        <p>
          Source(s):{' '}
          {wordData.sourceUrls.map((sourceUrl, index) => (
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
