import React from 'react';
import playIcon from '../assets/images/icon-play.svg'

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const handleClick = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <button onClick={handleClick}>
      <img src={playIcon} alt="Play icon" />
      {/* <i className="fas fa-volume-up"></i> Play Audio */}
      <audio src={audioUrl} controls controlsList="nodownload" />
    </button>
  );
};

export default AudioPlayer;
