import React from 'react';

export default function Overlay() {
  const style = {
    border: 'solid red 5px',
    backgroundColor: 'blue',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100px',
    width: '100vw',
  };
  return (
    <div style={style}>
      <img
        src="https://media.architecturaldigest.com/photos/56abee7645b074d074914c38/16:9/w_2560%2Cc_limit/back-to-the-futures-delorean-dmc-12-set-back-production-01.jpg"
        alt="delorean"
        height="100px"
      />
    </div>
  );
}
