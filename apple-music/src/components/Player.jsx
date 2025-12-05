import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="song-info">
        <div>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => console.log('Previous song')}>
          <FaBackward />
        </button>
        <button onClick={handlePlayPause}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => console.log('Next song')}>
          <FaForward />
        </button>
      </div>
      <div className="volume-control">
        <FaVolumeDown />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
        <FaVolumeUp />
      </div>
    </div>
  );
};

export default Player;