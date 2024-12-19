
import { useMemo } from 'react';

export const useRandomHighlight = () => {
  return useMemo(() => {
    const randomize = (base, variance) => base + (Math.random() * variance - variance/2);
    
    return {
      topLeft: randomize(15, 10),
      topRight: randomize(0, 5),
      bottomRight: randomize(95, 50),
      bottomLeft: randomize(100, 5)
    };
  }, []); // Empty deps array means this only calculates once per instance
};