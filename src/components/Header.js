import React from 'react';


export default function Header({ scrollToSection }) {
  return (
    <header className="fixed top-0 left-0 w-full p-6 bg-white shadow-md z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-300 w-20 h-20 overflow-hidden rounded-full">
          <img
  src="https://via.placeholder.com/150"
  alt="Profile"
  className="object-cover w-20 h-20 rounded-full"
/>

          </div>
        </div>

        <nav className="flex space-x-6">
          <button onClick={() => scrollToSection('about')} className="text-black hover:text-indigo-500">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-black hover:text-indigo-500">
            About Us
          </button>
          <button onClick={() => scrollToSection('skill')} className="text-black hover:text-indigo-500">
            Services
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-black hover:text-indigo-500">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-black hover:text-indigo-500">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
