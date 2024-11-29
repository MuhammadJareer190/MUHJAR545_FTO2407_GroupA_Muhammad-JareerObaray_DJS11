/* This code snippet is creating a React context for managing audio-related data in a React
application. */
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
