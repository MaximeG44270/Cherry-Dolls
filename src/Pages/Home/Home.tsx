import React from 'react';
import Header from '../../Component/Header/header';
import ContainerPresentation from '../../Component/Container-presentation/container-presentation';
import CarouselCherry from '../../Component/Carousel/carousel-cherry';
import Video from '../../Component/Video/video';
import Footer from '../../Component/Footer/footer';
import NavBar from '../../Component/NavBar/NavBar';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ContainerPresentation />
      <CarouselCherry />
      <Video />
      <Footer />
    </div>
  );
};

export default Home;