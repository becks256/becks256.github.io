
import React from 'react';
import { useRandomHighlight } from '../../hooks/useRandomHighlight';

export const Highlight = ({ children }) => {
  const clipValues = useRandomHighlight();
  
  const style = {
    '--clip-top-left': `${clipValues.topLeft}%`,
    '--clip-top-right': `${clipValues.topRight}%`,
    '--clip-bottom-right': `${clipValues.bottomRight}%`,
    '--clip-bottom-left': `${clipValues.bottomLeft}%`
  };

  return (
    <span className="ResumeBullet-highlight marker-animation" style={style}>
      {children}
    </span>
  );
};