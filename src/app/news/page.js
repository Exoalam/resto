'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const News = () => {
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
    <div data-theme="light">
      {isMobile ? (
        // Mobile view
        <div className="grid grid-cols-1 gap-y-10 w-[80%] pt-10 pb-10 m-auto">
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (1).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 05, 2024</b>
              </div>
              <p>VD Company and Kwangwoon University establish an industry-academia cooperation platform to foster the robot industry.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (2).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 04, 2024</b>
              </div>
              <p>VD Company selected as Advanced Restaurant Industry Automation Solution Company by the Korean Food Promotion Agency's Overseas Korean Restaurant Council Workshop.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (3).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 03, 2024</b>
              </div>
              <p>VD Company holds the largest-ever promotion Robot Festival to celebrate reaching 10,000 VD members.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (4).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 02, 2024</b>
              </div>
              <p>Announcement of share certificate submission due to stock split.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (5).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 01, 2024</b>
              </div>
              <p>VD Company ranked first among Best Medium-sized and Small Businesses to Work for in the First Half of 2024.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%] w-full">
            <figure>
              <img src="Assets/images/Homepage Images/news (6).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>August 31, 2024</b>
              </div>
              <p>MBN's restaurant start-up survival program Birth of a CEO - Open War, an emerging entertainment powerhouse... Fierce mission war for 100 million won in start-up support.</p>
            </div>
          </div>
        </div>
      ) : (
        // Desktop view
        <div className="grid grid-cols-3 gap-y-10 w-[70%] m-auto pt-10 pb-10">
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (1).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 05, 2024</b>
              </div>
              <p>VD Company and Kwangwoon University establish an industry-academia cooperation platform to foster the robot industry.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (2).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 04, 2024</b>
              </div>
              <p>VD Company selected as Advanced Restaurant Industry Automation Solution Company by the Korean Food Promotion Agency's Overseas Korean Restaurant Council Workshop.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (3).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 03, 2024</b>
              </div>
              <p>VD Company holds the largest-ever promotion Robot Festival to celebrate reaching 10,000 VD members.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (4).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 02, 2024</b>
              </div>
              <p>Announcement of share certificate submission due to stock split.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (5).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>September 01, 2024</b>
              </div>
              <p>VD Company ranked first among Best Medium-sized and Small Businesses to Work for in the First Half of 2024.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl hover:scale-[101%]">
            <figure>
              <img src="Assets/images/Homepage Images/news (6).png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={faClock} className="h-5 mr-2"></FontAwesomeIcon>
                <b>August 31, 2024</b>
              </div>
              <p>MBN's restaurant start-up survival program Birth of a CEO - Open War, an emerging entertainment powerhouse... Fierce mission war for 100 million won in start-up support.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;