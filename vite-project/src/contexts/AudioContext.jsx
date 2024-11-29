import React, { createContext, useState } from "react";

// Create the context
export const AudioContext = createContext();

// Create a provider component
export const AudioProvider = ({ children }) => {
  const [audioSrc, setAudioSrc] = useState("");
  
  return (
    <AudioContext.Provider value={{ audioSrc, setAudioSrc }}>
      {children}
    </AudioContext.Provider>
  );
};
