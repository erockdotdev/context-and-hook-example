import React from 'react';
import { useOverlayWithContext } from '../hooks/useOverlayWithContext';

export default function Footer() {
  const style = {
    backgroundColor: 'ghostwhite',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: '200px',
    width: '100vw',
  };
  const { toggleIsOpen } = useOverlayWithContext();
  return (
    <div style={style}>
      <h3>I am a footer</h3>
      <button onClick={toggleIsOpen}>Toggle Overlay</button>
    </div>
  );
}
