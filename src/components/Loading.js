import React, { useEffect } from 'react';
import '../styles/Loading.css';

const LoadingScreen = ({ fadeOut }) => {
  useEffect(() => {
    const path = document.querySelectorAll('.path');
    path.forEach((p) => {
      const length = p.getTotalLength();
      p.style.strokeDasharray = length;
      p.style.strokeDashoffset = length;
      p.getBoundingClientRect(); // Trigger layout to apply the animation
      p.style.transition = 'stroke-dashoffset 2s ease';
      p.style.strokeDashoffset = '0';
    });
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="initials-container">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* D Path */}
          <path
            className="path"
            d="M 50 50 Q 150 150 50 250 L 50 50" // "D" shape
            stroke="white"
            strokeWidth="8"
          />
          {/* M Path */}
          <path
            className="path"
            d="M 150 250 L 150 50 L 200 150 L 250 50 L 250 250" // "M" shape
            stroke="white"
            strokeWidth="8"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
