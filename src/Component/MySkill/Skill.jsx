
// src/SkillsDashboard.js

import React from 'react';
import { FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVite, SiNextdotjs, SiDaisyui } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', level: 'Expert', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React.js', level: 'Expert', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Node.js', level: 'Intermediate', icon: <FaNode className="text-green-500" /> },
  { name: 'Firebase', level: 'Intermediate', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Figma', level: 'Advanced', icon: <FaFigma className="text-pink-500" /> },
  { name: 'HTML', level: 'Expert', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', level: 'Expert', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Vite', level: 'Intermediate', icon: <SiVite className="text-purple-500" /> },
  { name: 'Next.js', level: 'Intermediate', icon: <SiNextdotjs className="text-white" /> },
  { name: 'DaisyUI', level: 'Expert', icon: <SiDaisyui className="" /> },
];

const Skill= () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 pt-8">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="card lg:w-52 bg-gray-800 hover:bg-purple-700 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-6xl lg:mb-4">{skill.icon}</div>
              <h2 className="card-title">{skill.name}</h2>
              <p className="text-sm">Level: {skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
