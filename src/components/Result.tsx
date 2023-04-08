import React from 'react';
//import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import '../assets/styles/Result.scss';

interface ResultProps {
  word: string;
  definitions: {
    definition: string;
    example?: string;
    pronunciation?: string;
    audioUrl?: string;
  }[];
}

const Result: React.FC<ResultProps> = ({ word, definitions=[] }) => {
  return (
    <div className="result">
      <div>
      <h1>{word}</h1>

      </div>
      
      {definitions.map((def, index) => (
        <div key={index} className="definition">
          <p>{def.definition}</p>
          {def.example && <p className="example">{def.example}</p>}
          {def.pronunciation && <p className="pronunciation">{def.pronunciation}</p>}
          {def.audioUrl && (
            <AudioPlayer audioUrl={def.audioUrl} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Result;
