'use client';
import React, { useState } from 'react';

const Product = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardData = [
    {
      image: 'Assets/images/Homepage Images/robot1.png',
      title: 'PuduBot',
      description: 'Practical and convenient standard serving robot with the largest load capacity.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      image: 'Assets/images/Homepage Images/robot2.png',
      title: 'BellaBot',
      description: 'Premium serving robot capable of exchanging emotions through voice, facial expressions, etc.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    {
      image: 'Assets/images/Homepage Images/robot3.png',
      title: 'HolaBot',
      description: 'A high-efficiency, high-capacity unloading robot that supports a call function and increases table turnover.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    },
    {
      image: 'Assets/images/Homepage Images/robot4.png',
      title: 'KettyBot',
      description: 'A smart guidance robot with a large display on the front that is minimal in size and has no problems even in narrow passages.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
    },
    {
      image: 'Assets/images/Homepage Images/robot 5.jpg',
      title: 'Flippy',
      description: 'Flippy is a ground-breaking, smart commercial kitchen robot that fries items from french fries to chicken nuggets, and works alongside humans to enhance quality and consistency, while creating substantial, measurable cost savings for restaurants.',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5',
    }
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div data-theme="light" className="min-h-screen min-w-screen bg-white">
      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-2 gap-4 w-full pt-20 -mx-[20%]">
        <div className="flex flex-col space-y-4 relative">
          {cardData.map((card, index) => (
            <button
              key={index}
              className={`ml-auto w-[30%] btn btn-outline ${
                selectedButton === index ? 'bg-black text-white' : 'btn-gray-400'
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {card.title}
            </button>
          ))}
          <div
            className="absolute left-full top-0 w-1 bg-primary transition-all duration-300 ease-in-out"
            style={{ transform: `translateY(${selectedButton * 100}%)` }}
          ></div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl w-full">
          <figure>
            <img src={cardData[selectedButton].image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cardData[selectedButton].title}</h2>
            <p>{cardData[selectedButton].description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-black text-white hover:bg-white hover:text-black hover:border-black" onClick={openModal}>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-4 m-auto w-[90%] pt-20">
        <div className="grid grid-cols-2 gap-5 m-auto">
          {cardData.map((card, index) => (
            <button
              key={index}
              className={`btn btn-outline w-[90%] ${
                selectedButton === index ? 'bg-black text-white' : 'btn-gray-400'
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {card.title}
            </button>
          ))}
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={cardData[selectedButton].image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cardData[selectedButton].title}</h2>
            <p>{cardData[selectedButton].description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-black text-white hover:bg-white hover:text-black hover:border-black" onClick={openModal}>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className='flex flex-row'>
            <h2 className="text-2xl font-bold mb-4">{cardData[selectedButton].title}</h2>
            <button className="btn btn-outline bg-black text-white hover:bg-white hover:text-black hover:border-black ml-auto" onClick={closeModal}> X </button>
            </div>
            <div className="relative" style={{paddingBottom: '56.25%'}}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={cardData[selectedButton].videoUrl} 
                title={`${cardData[selectedButton].title} video`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Product;