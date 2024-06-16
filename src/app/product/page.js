'use client'
import React, {useState} from 'react'

const Product = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const cardData = [
    {
      image: 'Assets/images/Homepage Images/robot1.png',
      title: 'PuduBot',
      description: 'Practical and convenient standard serving robot with the largest load capacity.',
    },
    {
      image: 'Assets/images/Homepage Images/robot2.png',
      title: 'BellaBot',
      description: 'Premium serving robot capable of exchanging emotions through voice, facial expressions, etc.',
    },
    {
      image: 'Assets/images/Homepage Images/robot3.png',
      title: 'HolaBot',
      description: 'A high-efficiency, high-capacity unloading robot that supports a call function and increases table turnover.',
    },
    {
      image: 'Assets/images/Homepage Images/robot4.png',
      title: 'KettyBot',
      description: 'A smart guidance robot with a large display on the front that is minimal in size and has no problems even in narrow passages.',
    },
    
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div data-theme='light' className='min-h-screen'>
          <div className="grid grid-cols-2 gap-4 m-auto w-[70%] pt-40">
      <div className="flex flex-col space-y-4 relative">
        {cardData.map((card, index) => (
          <button
            key={index}
            className={`ml-auto w-1/2 btn btn-outline ${
              selectedButton === index ? 'btn-primary' : 'btn-gray-400'
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={cardData[selectedButton].image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardData[selectedButton].title}</h2>
          <p>{cardData[selectedButton].description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product