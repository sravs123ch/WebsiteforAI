
// About.js
import React from 'react';
import bgImage from '../assets/bg-img.jpg';

function About({ scrollToSection }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-6 md:p-2 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
        {/* Welcome Text */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to M2C Solutions
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">
          Transforming Ideas into Innovation
        </h2>

        {/* Buttons Section */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition"
          >
            Let's Talk
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition"
          >
            Explore Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
