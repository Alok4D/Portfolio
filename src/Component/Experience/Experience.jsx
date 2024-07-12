// src/components/Experience.js
import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-10">
      <div className="container mx-auto lg:px-6">
        <div className="text-center"><h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="mb-8">I have experience Learn on a Programing Hero</p></div>
        <div className="px-6">
          <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center">
                <img
                  className="rounded-full"
                  src="https://avatars.githubusercontent.com/u/53802153?v=4"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Learn to Programing Hero</h3>
                <p className="text-gray-400">January 2024 - july 2024</p>
              </div>
            </div>
            <p className="mb-4">
              I am passionate about learning programming and building innovative
              solutions. My journey into programming Hero began with a
              fascination for technology's ability to solve complex problems and
              enhance everyday experiences. I am eager to explore various
              domains within programming and contribute meaningfully to the tech
              community.
            </p>
            <div className="mb-4">
              <h4 className="font-bold">Technology:</h4>
              <p>
                Html • Tailwind CSS • React JS • DaisyUI • Firebase • MongoDB •
                Node JS • JWT • Axios • AOS • sslcommerz-lts • React Hook Form •
                Swiper • Next.Js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;