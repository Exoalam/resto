import React from 'react'
const About = () => {
  return (
    <div data-theme='light' className='flex flex-row w-full min-h-screen'>
      <div className="grid grid-cols-2 gap-10 m-auto">
        <div className='w-1/2 ml-auto'>
          <h1 className="text-5xl font-bold ml-10">We are Resto Robotics</h1>
          <div className="relative">
            <img
              src="Assets/images/miso-robotics-team-2048x1536.jpeg"
              alt="Your Image"
              className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale m-10"
            />
          </div>
        </div>
        <div className='w-1/2 mr-auto'>
          <div className="relative">
            <img
              src="Assets/images/Miso-Robotics-Team-at-Work-qimlt6uv7bxdf7l37nhas6h8ipeb47fwjfpbjvdoqw.jpeg"
              alt="Your Image"
              className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg filter grayscale m-10"
            />
          </div>
          <h1 className="text-md ml-10">Resto was founded on the idea of creating robots that eliminate dull, dirty, and dangerous tasks in restaurant kitchens. Our logo was inspired by the one task that makes people cry the most: slicing onions.</h1>
        </div>
      </div>
    </div>
  )
}

export default About