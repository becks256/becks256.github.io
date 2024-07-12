import React, { useState, useEffect } from 'react';

export const HoverEffect = ({ children, maxSpikes = 10, maxLength = 50 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [spikes, setSpikes] = useState([]);

  useEffect(() => {
    if (isHovered) {
      const newSpikes = Array.from({ length: maxSpikes }, () => ({
        angle: Math.random() * 360,
        length: 0,
        maxLength: Math.random() * maxLength + 10,
        growthRate: Math.random() * 10 + 0.5,
        delay: Math.random() * 500,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      }));
      setSpikes(newSpikes);

      const growthInterval = setInterval(() => {
        setSpikes(currentSpikes =>
          currentSpikes.map(spike => ({
            ...spike,
            length: spike.length < spike.maxLength ? spike.length + spike.growthRate : spike.length,
          }))
        );
      }, 50);

      return () => clearInterval(growthInterval);
    } else {
      setSpikes([]);
    }
  }, [isHovered, maxSpikes, maxLength]);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ 
        transition: 'box-shadow 0.3s ease-in-out', 
        //boxShadow: isHovered ? '0 5px 15px rgba(0,0,0,0.3)' : 'none' 
      }}>
        {children}
      </div>
      <svg
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: 'calc(100% + 20px)',
          height: 'calc(100% + 20px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      >
        {spikes.map((spike, index) => (
          <line
            key={index}
            x1="50%"
            y1="50%"
            x2={`${50 + Math.cos(spike.angle * Math.PI / 180) * spike.length}%`}
            y2={`${50 + Math.sin(spike.angle * Math.PI / 180) * spike.length}%`}
            stroke={spike.color}
            strokeWidth="2"
            style={{
              transition: `all ${spike.growthRate}s ease-out`,
              transitionDelay: `${spike.delay}ms`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
