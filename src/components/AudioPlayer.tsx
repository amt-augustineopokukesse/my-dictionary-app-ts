import React from 'react';
import playIcon from '../assets/images/icon-play.svg'
import '../assets/styles/AudioPlayer.scss';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const handleClick = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <button onClick={handleClick} className='audioPlayButton'>
      <img src={playIcon} alt="Play icon" />
      {/* <i className="fas fa-volume-up"></i> Play Audio */}
      <audio src={audioUrl} />
    </button>
  );
};

export default AudioPlayer;
