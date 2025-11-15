import React, { useEffect, useState, useRef } from 'react';

const AnimatedViewer = ({ photos = [], interval = 4000, height = '520px' }) => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!playing || photos.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [playing, photos.length, interval]);

  const handleMouseEnter = () => setPlaying(false);
  const handleMouseLeave = () => setPlaying(true);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100"
      style={{ height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="animated image viewer"
    >
      {photos.map((p, i) => {
        const src = p?.src || p?.thumbnail || p?.fullSize || '';
        return (
          <img
            key={p.id || i}
            src={src}
            alt={p.title || `Image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-in-out ${
              i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          />
        );
      })}

      <div className="absolute left-4 bottom-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 text-sm font-medium text-black shadow">
        {photos[index]?.title || ''}
      </div>
    </div>
  );
};

export default AnimatedViewer;
