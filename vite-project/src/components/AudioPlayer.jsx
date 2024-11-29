/**
 * The `AudioPlayer` component in React uses context to play and pause an audio source with play and
 * pause icons.
 * @returns The `AudioPlayer` component is being returned. It consists of an audio player with
 * play/pause functionality using the `FaPlay` and `FaPause` icons from `react-icons/fa`. The audio
 * source is obtained from the `AudioContext` using `useContext`. The component toggles between play
 * and pause when the button is clicked.
 */
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