import React from 'react';

const HomePage = () => {
  return (
    <div data-theme="light" className="relative h-full">
      <video
        className="w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="Assets/file.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;