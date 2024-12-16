
// Skill.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaDatabase } from 'react-icons/fa';

export default function Skill() {
  return (
    <div className="skills-section p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex justify-center">
          <FaHtml5 className="text-orange-500 text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaCss3Alt className="text-blue-500 text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaJs className="text-yellow-500 text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaJava className="text-red-600 text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaPython className="text-blue-600 text-9xl" />
        </div>
        <div className="flex justify-center">
          <FaDatabase className="text-gray-700 text-9xl" />
        </div>
      </div>
    </div>
  );
}
