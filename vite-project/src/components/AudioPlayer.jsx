import React, { useState, useRef } from "react";

const AudioPlayer = ({ audioSrc, title, isVisible, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio
    }
    setIsPlaying(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">Now Playing</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={handleClose}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          X
        </button>
      </div>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioPlayer;