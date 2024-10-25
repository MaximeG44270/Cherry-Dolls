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
                    <div className={styles.barre1}>
                        <div className={styles.logo}>
                            <img src="/image/logo-cercle-cheery.png" alt="Logo" />
                        </div>
                    </div>
                <div className={styles.burger} onClick={toggleMenu}>
                    <div className={`${styles.line} ${menuOpen ? styles.line1 : ''}`}></div>
                    <div className={`${styles.line} ${menuOpen ? styles.line2 : ''}`}></div>
                    <div className={`${styles.line} ${menuOpen ? styles.line3 : ''}`}></div>
                </div>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><a href="/photo" onClick={() => setMenuOpen(false)}>Photo</a></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;