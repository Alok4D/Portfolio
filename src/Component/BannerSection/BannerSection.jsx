import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Type from "./Type";

const BannerSection = () => {
  return (
    <div className="lg:py-24 flex flex-col lg:flex-row items-center pt-8 mt-8 justify-center lg:justify-between bg-gradient-to-r from-indigo-900 to-purple-900 px-10 shadow-lg">
      <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl font-bold text-white mb-4">
          Hi, I am Uttpol Roy
        </h1>
        <h2 className="text-2xl text-green-400 mb-4 font-extrabold">
          I am a <span className="text-green-500">Web Developer</span>
        </h2>
        <div className="font-extrabold text-4xl pb-8 text-white">
          <Type />
        </div>
        <div className="flex justify-center lg:justify-start">
          <a
            href="/path-to-resume.pdf"
            download
            className="btn btn-primary mr-4"
          >
            Download Resume
          </a>
          <a href="/resume" className="btn btn-secondary">
            Check Resume
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center gap-5 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/99748784?v=4"
          alt="Profile"
          className="rounded-lg shadow-lg bg-purple-850 h-64 w-64 lg:h-auto lg:w-auto hover:bg-purple-800"
        />
        <div className="">
          <div className="justify-center lg:justify-start mt-5 grid gap-6">
            <a
              href="https://www.facebook.com/utpolrinki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl mr-4"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/utpol-ray-3052671bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl mr-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/utpolra1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl mr-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+8801568011579"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
