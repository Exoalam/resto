import React from 'react';

const HomePage = () => {
  return (
    <div data-theme="light" className="relative h-full">
      {/* Mobile video */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="Assets/mobile.mp4" type="video/mp4" />
      </video>

      {/* Desktop video */}
      <video
        className="hidden md:block w-full h-full object-contain"
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