import React from 'react';
import NavBar from '../../Component/NavBar/NavBar';
import HomeGallery from '../../Component/home-gallery/home-galery';
import Footer from '../../Component/Footer/footer';

const Photo: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HomeGallery />
      <Footer />
    </div>
  );
};

export default Photo;