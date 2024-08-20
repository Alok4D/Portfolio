import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BannerSection from "./Component/BannerSection/BannerSection";
import Skill from "./Component/MySkill/Skill";
import Projects from "./Component/Projects/Projects";
import Experience from "./Component/Experience/Experience";
import Education from "./Component/Education/Education";
import ContactForm from "./Component/ContactForm/ContactForm";
import Footer from "./Component/Footer/Footer";
import { AiOutlineException, AiOutlineExperiment, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { SiHyperskill } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { GiContract } from "react-icons/gi";
import { FcContacts } from "react-icons/fc";
import { LuContact } from "react-icons/lu";

const App = () => {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experieceRef = useRef(null);
  const educationRef = useRef(null);
  const contractRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="scrollbar-hide">
        <div className="navbar font-bold bg-purple-950 fixed top-0 text-white z-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-purple-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/" onClick={() => handleScroll(homeRef)}>
                    <AiOutlineHome className="text-white"></AiOutlineHome>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => handleScroll(skillRef)}>
                    Skill
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => handleScroll(projectRef)}>
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => handleScroll(experieceRef)}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => handleScroll(educationRef)}>
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/99748784?v=4"
              className="h-10 mr-2"
              alt="brand"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" onClick={() => handleScroll(homeRef)}>
                  <AiOutlineHome></AiOutlineHome>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleScroll(skillRef)}>
                  <SiHyperskill /> Skill
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleScroll(projectRef)}>
                <AiOutlineProject></AiOutlineProject>
                  Project
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleScroll(experieceRef)}>
                <AiOutlineException/>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleScroll(educationRef)}>
                <MdCastForEducation />
                  Education
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleScroll(contractRef)}>
                <LuContact/>
                  Contract
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div ref={homeRef} id="home">
          <BannerSection></BannerSection>
        </div>
        <div ref={skillRef} id="about">
          <Skill></Skill>
        </div>
        <div ref={projectRef} id="project">
          <Projects></Projects>
        </div>
        <div ref={experieceRef} id="experience">
          <Experience></Experience>
        </div>
        <div ref={educationRef}>
          <Education></Education>
        </div>
        <div ref={contractRef}>
          <ContactForm></ContactForm>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
