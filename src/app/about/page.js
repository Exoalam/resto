import React from 'react'

const About = () => {
  return (
    <div data-theme='light' className='flex flex-row w-full min-h-screen'>
      <div class="grid grid-cols-2 gap-4 mx-auto">
        <div className='m-[20%]'>
          <h1 class="text-5xl font-bold">We are Resto Robotics</h1>
          <div className="relative">
            <img
              src="Assets/images/miso-robotics-team-2048x1536.jpeg"
              alt="Your Image"
              className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg"
            />
          </div>
        </div>
        <div>09</div>
      </div>
    </div>
  )
}

export default About