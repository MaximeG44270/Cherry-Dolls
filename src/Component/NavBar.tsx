import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/path/to/your-logo.png" alt="Logo" />
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery Photo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.line1 : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.line2 : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.line3 : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
