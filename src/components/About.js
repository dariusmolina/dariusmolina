import React, { useState, useEffect } from 'react';
import myImage from '../assets/images/gradpic.jpg';
import friendshipGames from '../assets/images/slideshow/fg.jpg';
import pba from '../assets/images/slideshow/pba.jpg';
import pcn from '../assets/images/slideshow/pcn.jpg';
import '../styles/About.css';
import FadeInSection from './FadeInSection';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: friendshipGames, caption: 'Pilipinx American Alliance Social Chair: Friendship Games 38' },
    { img: pba, caption: 'Pilipinx Basketball Association: Executive Chair' },
    { img: pcn, caption: 'Pilipinx Cultural Night: Technical Director and Cultural Coordinator' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="about-container">
      <FadeInSection>
        <h1>About Me</h1>
      </FadeInSection>
      
      <FadeInSection>
        <div className="about-content">
          <div className="about-image">
            <img src={myImage} alt="Darius Molina" />
          </div>
          <div className="about-text">
            <p>
              I'm <strong>Darius Molina</strong>, a recent graduate from UC Berkeley with a Bachelor of Arts in Cognitive Science and a strong foundation in software engineering. I have hands-on experience with Python, Java, Ruby, C#, and JavaScript, and have worked on projects ranging from web development to game design.
            </p>
            <p>
              As an <strong>Open-Source Developer</strong> at <strong>Generellem AI</strong>, I contributed to improving <strong>.NET-based</strong> applications, optimized documentation workflows with <strong>DocFX</strong>, and worked with <strong>Azure</strong> services. I’ve built a <strong>React-based recipe blog</strong>, <strong>Kain Na!</strong>, incorporating user authentication, image uploads, and search functionality using <strong>Firebase</strong>.
            </p>
            <p>
              I’ve also developed a <strong>Blackjack game</strong> in <strong>C# and .NET</strong> and created a Ruby on Rails web app for <strong>Actionmap</strong>, using the Google Civic Information API. My leadership roles, including <strong>Executive Chair</strong> of the Pilipinx Basketball Association, have strengthened my team collaboration skills.
            </p>
            <p>
              I’m now seeking an entry-level software engineering role where I can apply my technical skills, solve complex problems, and contribute to impactful projects.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="community-involvement">
          <h2>Community Involvement</h2>
          <div className="slideshow-container">
            <div className="slide">
              <img src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} />
              <div className="caption">{slides[currentSlide].caption}</div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
