import React from 'react';

const HomePage = () => {
  return (
    <div data-theme="light" className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute left-1/2 top-1/2 min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
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