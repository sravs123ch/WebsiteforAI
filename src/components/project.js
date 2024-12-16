import React from 'react';

const projects = [
  {
    title: "TuneHub",
    duration: "Oct 2023 to Apr 2024 (Full Time)",
    description: "A full-stack web application called TuneHub, aimed at providing users with a comprehensive music streaming experience. The application incorporates various features including user authentication, music exploration, playlist creation, premium membership, and seamless payment integration.",
  },
  {
    title: "Audify",
    duration: "Jan 2023 to Apr 2023 (Full Time)",
    description: "AUDIFY is a web application created using the Streamlit framework and Python, with Poetry as a dependency manager. It allows users to visualize the waveforms of audio signals and apply filters, designed to help faculty teach students about audio signals and their characteristics.",
  },
];

const Project = () => {
  return (
    <div className="projects-container p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="project-list space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="project-item p-4 rounded shadow-lg border border-gray-300">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">{project.duration}</p>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
