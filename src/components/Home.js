import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Hi! I'm Darius Molina.", "I'm a Software Engineer.", "I love to build cool things.", "I love to learn.^5000"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    };

    const typed = new Typed('.typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="typed-section">
        <h1 className="typed-element">typed</h1>
      </div>
    </div>
  );
};

export default Home;
