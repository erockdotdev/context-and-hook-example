import { createContext, useState } from 'react';

export const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OverlayContext.Provider>
  );
};
