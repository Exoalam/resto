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
      <footer className="absolute bottom-0 left-0 right-0 bg-base-100 bg-opacity-70 text-gray-400">
        <div className="container mx-auto text-center mt-2 mb-2">
          <p className="text-sm">800 E Summit St, Kent, OH 44240</p>
          <p className="text-sm">
            <a href="mailto:support@restobostics.com" className="text-sm">
              support@restobostics.com
            </a>
          </p>
          <p className="text-sm">COPYRIGHT©2024 RestoBotics. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;