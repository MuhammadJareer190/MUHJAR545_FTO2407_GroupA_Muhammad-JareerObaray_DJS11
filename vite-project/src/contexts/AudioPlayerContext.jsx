import React, { createContext, useState, useContext } from "react";

export const AudioPlayerContext = createContext();

export const useAudioPlayer = () => {
  return useContext(AudioPlayerContext);
};

export const AudioPlayerProvider = ({ children }) => {
  const [audioDetails, setAudioDetails] = useState({
    isVisible: false,
    title: "",
    audioSrc: "",
  });

  const playAudio = (title, audioSrc) => {
    setAudioDetails({
      isVisible: true,
      title,
      audioSrc,
    });
  };

  const stopAudio = () => {
    setAudioDetails({
      isVisible: false,
      title: "",
      audioSrc: "",
    });
  };

  return (
    <AudioPlayerContext.Provider value={{ audioDetails, playAudio, stopAudio }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
