import React from 'react';
import './video.css';

const Video: React.FC = () => {
  return (
    <div className='container-movie'>
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/cheery-dolls.mp4" type="video/mp4" />
        <source src="/video/cheery-dolls.webm" type="video/webm" />
        {/* Fallback message si aucun des formats n'est supporté */}
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default Video;