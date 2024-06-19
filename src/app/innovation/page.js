import React from 'react'

const Innovation = () => {
  return (
    <div data-theme='light'>
      <div className="hero py-[10%]">
        <div className="hero-content text-center">
          <div className="max-w-screen">
            <h1 className="text-6xl sm:text-8xl font-bold mx-auto">ATR Lab</h1>
            <p className="py-8 w-1/2 mx-auto">The intersection of trends in the restaurant industry and artifical intelligence is revolutionizing how we dine with AI-driven innovations enhancing everything from kitchen operations to personalized customer experiences.</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: "url(Assets/images/Miso-Robotics-Innovation-Lab-Team-Town-Hall.jpeg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-screen">
            <h1 className="mb-5 text-5xl font-bold">Our Technology.</h1>
            <div className="divider divider-info mx-[40%]"></div>
            <p className="mb-5">Restaurant owners should be ready for AI-based restaurant automation because it can significantly enhance efficiency, reduce operational costs, improve customer service and provide valuable data insights. Automation can steamline tasks such as order processing, invertory management and kitchen operations allowing staff to focus on more complex and creative aspects of the business. Additionally, AI can help persinalize customer experiences, leading to increased satisfaction and loyalty. Embracing these technologies will not only keep restaurants completitive but also future-proof their operations in an envolving industry.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Innovation