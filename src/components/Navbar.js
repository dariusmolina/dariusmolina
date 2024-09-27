import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-on-scroll');
      const scrollPosition = window.scrollY;

      elements.forEach((element) => {
        const opacity = Math.max(1 - scrollPosition / 300, 0);
        element.style.opacity = opacity;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>DM</Link>
      </div>
      <div className={`nav-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links fade-on-scroll ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
