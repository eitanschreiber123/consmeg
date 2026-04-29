"use client";

import { createContext, useContext, useState } from "react";

const DisplayContext = createContext();

export function DisplayProvider({ children }) {
  const [display, setDisplay] = useState(1);

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
}

export function useDisplay() {
  return useContext(DisplayContext);
}