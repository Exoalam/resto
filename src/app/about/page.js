'use client'
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div data-theme="light" className="flex flex-col w-full min-h-screen">
      {isMobile ? (
        // Mobile view
        <div className="grid grid-cols-1 gap-5 m-auto">
          <div className="w-full">
            <h1 className="text-3xl font-bold ml-4">
              Serve Up Success: Total Restaurant Solution
            </h1>
            <div className="relative">
              <img
                src="Assets/images/miso-robotics-team-2048x1536.jpeg"
                alt="Your Image"
                className="w-[80%] h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale mt-10 mx-auto"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative">
              <img
                src="Assets/images/Miso-Robotics-Team-at-Work-qimlt6uv7bxdf7l37nhas6h8ipeb47fwjfpbjvdoqw.jpeg"
                alt="Your Image"
                className="w-[80%] h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale m-10 mx-auto"
              />
            </div>
            <h1 className="text-md ml-4 mb-10">
              Restobotics was born from a passion to transform restaurant
              kitchens, freeing people from the drudgery of dull, dirty and
              dangerous tasks. Our mission is to bring innovation and relief to
              every chef's life, making their work safer and more enjoyable.
            </h1>
          </div>
        </div>
      ) : (
        // Desktop view
        <div className="grid grid-cols-2 gap-10 m-auto">
          <div className="w-2/3 ml-auto">
            <h1 className="text-5xl font-bold ml-10">
              Serve Up Success: Total Restaurant Solution
            </h1>
            <div className="relative">
              <img
                src="Assets/images/miso-robotics-team-2048x1536.jpeg"
                alt="Your Image"
                className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale m-10"
              />
            </div>
          </div>
          <div className="w-2/3 mr-auto">
            <div className="relative">
              <img
                src="Assets/images/Miso-Robotics-Team-at-Work-qimlt6uv7bxdf7l37nhas6h8ipeb47fwjfpbjvdoqw.jpeg"
                alt="Your Image"
                className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale m-10"
              />
            </div>
            <h1 className="text-md ml-10">
              Restobotics was born from a passion to transform restaurant
              kitchens, freeing people from the drudgery of dull, dirty and
              dangerous tasks. Our mission is to bring innovation and relief to
              every chef's life, making their work safer and more enjoyable.
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;