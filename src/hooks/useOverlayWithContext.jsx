import { useContext } from 'react';
import { OverlayContext } from '../contexts/OverlayContext';

export const useOverlayWithContext = () => {
  const { isOpen, setIsOpen } = useContext(OverlayContext);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleIsOpen };
};
