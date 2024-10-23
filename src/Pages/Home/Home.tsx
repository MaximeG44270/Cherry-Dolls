import React from 'react';
import Header from './Header/header';
import ContainerPresentation from './Container-presentation/container-presentation';
import CarouselCherry from './Carousel/carousel-cherry';
import Video from './Video/video';
import Footer from './Footer/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ContainerPresentation />
      <CarouselCherry />
      <Video />
      <Footer />
    </div>
  );
};

export default Home;