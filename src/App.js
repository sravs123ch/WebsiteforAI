import React, { useRef, useState } from 'react';
import About from './components/About';
import Project from './components/project';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';
import Skill from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
 const skillRef=useRef(null);
  const scrollToSection = (section) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'projects' && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'skill' && skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />
      <div className="sections overflow-y-auto pt-24 flex-grow">
        {/* <div ref={aboutRef} className="content mt-8">
          <About />
        </div> */}
        <div ref={aboutRef} className="content mt-8">
  <About scrollToSection={scrollToSection} />
</div>

        <div ref={projectRef} className="content -mt-5">
          <Project />
        </div>
        <div ref={skillRef} className="content mt-8">
          <Skill />
        </div>
        <div ref={contactRef} className="content mt-8">
          <Contact />
        </div>
        <div ref={contactRef} className="content mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
