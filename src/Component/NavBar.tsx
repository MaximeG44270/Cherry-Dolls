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
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={`${styles.line} ${menuOpen ? styles.line1 : ''}`}></div>
                <div className={`${styles.line} ${menuOpen ? styles.line2 : ''}`}></div>
                <div className={`${styles.line} ${menuOpen ? styles.line3 : ''}`}></div>
            </div>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery Photo</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;