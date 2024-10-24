import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.topStrip}></div>
                <div className={styles.logo}>
                    <img src="/path/to/your-logo.png" alt="Logo" />
                </div>
                <div className={styles.burger} onClick={toggleMenu}>
                    <div className={`${styles.line} ${menuOpen ? styles.line1 : ''}`}></div>
                    <div className={`${styles.line} ${menuOpen ? styles.line2 : ''}`}></div>
                    <div className={`${styles.line} ${menuOpen ? styles.line3 : ''}`}></div>
                </div>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Photo</a></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
                <div className={styles.bottomStrip}></div>
            </nav>
        </>
    );
};

export default NavBar;

