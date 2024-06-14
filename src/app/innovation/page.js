import React from 'react'

const Innovation = () => {
  return (
    <div data-theme='light'>
      <div className="hero py-[10%]">
        <div className="hero-content text-center">
          <div className="max-w-screen">
            <h1 className="text-6xl sm:text-8xl font-bold mx-auto">The Resto Innovation Lab</h1>
            <p className="py-8 w-1/2 mx-auto"> the heart of Pasadena, CA, near our roots at Kent State, we’ve built a space for Resto to imagine and innovate. It’s more than a lab — it’s a our sandbox of possibilities where we’re defining the future of restaurant AI and robotics.</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(Assets/images/Miso-Robotics-Innovation-Lab-Team-Town-Hall.jpeg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-screen">
            <h1 className="mb-5 text-5xl font-bold">Here, ideas take root and flourish.</h1>
            <div className="divider divider-secondary mx-[40%]"></div>
            <p className="mb-5">We nurture them with relentless curiosity and our signature Miso creativity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovation