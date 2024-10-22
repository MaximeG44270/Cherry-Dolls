import React from 'react';
import Header from './Header/header';
import ContainerPresentation from './Container-presentation/container-presentation';
import CarouselCherry from './Carousel/carousel-cherry';
import Video from './Video/video';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ContainerPresentation />
      <CarouselCherry />
      <Video />
    </div>
  );
};

export default Home;