import React, { useContext, useRef, useState, useEffect } from "react";
import { AudioContext } from "../contexts/AudioContext"; // Correct path
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";

export const AudioPlayer = () => {
  const { audioSrc } = useContext(AudioContext); // Use context to get the audio source
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioPlayer} src={audioSrc}></audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AudioPlayer;