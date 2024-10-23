import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <h1>Cheery Dolls</h1>
      <p className='description-header'>Équipe Vendéenne de PomPom Girls</p>
      <div className='button-complet'>
        <div className='button-recrutement'>
            <p className='recrutement-dossier'>Recrutement</p>
        </div>
      </div>
      <div className='scroll-down'>
        <img className='image-scroll-down' src='/image/scroll-down.png' alt='scroll-down' />
      </div>
    </div>
  );
};

export default Header;