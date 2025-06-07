"use client";
import React from "react";

export const SoundContext = React.createContext();

const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <SoundContext value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext>
  );
};

export default SoundProvider;
