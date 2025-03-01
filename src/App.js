// import React, { useRef, useState } from 'react';
// import About from './components/About';
// import Project from './components/project';
// import Header from './components/Header';
// import Contact from './components/Contact';
// import './App.css';
// import Skill from './components/Skills';
// import Footer from './components/Footer';

// export default function App() {
//   const aboutRef = useRef(null);
//   const projectRef = useRef(null);
//   const contactRef = useRef(null);
//  const skillRef=useRef(null);
//   const scrollToSection = (section) => {
//     if (section === 'about' && aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (section === 'projects' && projectRef.current) {
//       projectRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (section === 'contact' && contactRef.current) {
//       contactRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (section === 'skill' && skillRef.current) {
//       skillRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       <Header scrollToSection={scrollToSection} />
//       <div className="sections overflow-y-auto pt-24 flex-grow">
//         {/* <div ref={aboutRef} className="content mt-8">
//           <About />
//         </div> */}
//         <div ref={aboutRef} className="content mt-8">
//   <About scrollToSection={scrollToSection} />
// </div>
// <script> window.chtlConfig = { chatbotId: "1666676368" } </script>
// <script async data-id="1666676368" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>

//         <div ref={projectRef} className="content -mt-5">
//           <Project />
//         </div>
//         <div ref={skillRef} className="content mt-8">
//           <Skill />
//         </div>
//         <div ref={contactRef} className="content mt-8">
//           <Contact />
//         </div>
//         <div ref={contactRef} className="content mt-8">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useRef, useState,useEffect } from 'react';
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
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null); // Separate ref for Footer

  // Function to scroll to a section
  // const scrollToSection = (ref) => {
  //   if (ref?.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const scrollToSection = (section) => {
    const sectionRefs = {
      about: aboutRef,
      project: projectRef,
      skill: skillRef,
      contact: contactRef,
      footer: footerRef,
    };
  
    const targetRef = sectionRefs[section];
  
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section "${section}" not found`);
    }
  };
  

  // Load Chatbot script dynamically
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `window.chtlConfig = { chatbotId: "1666676368" };`;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://chatling.ai/js/embed.js";
    script2.async = true;
    script2.dataset.id = "1666676368";
    script2.id = "chatling-embed-script";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />

      {/* Main content sections */}
      <div className="sections overflow-y-auto pt-24 flex-grow">
      <div ref={aboutRef} id="about" className="content mt-8">
  <About scrollToSection={scrollToSection} />
</div>

<div ref={projectRef} id="project" className="content -mt-5">
  <Project />
</div>

<div ref={skillRef} id="skill" className="content mt-8">
  <Skill />
</div>

<div ref={contactRef} id="contact" className="content mt-8">
  <Contact />
</div>

<div ref={footerRef} id="footer" className="content mt-8">
  <Footer />
</div>

      </div>
    </div>
  );
}
