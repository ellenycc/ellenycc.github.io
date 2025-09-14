import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header
      className="intro flex flex-col h-screen pt-56"
    >
      <div className="about-bio">
        <div 
          className="header-text"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <p className="text-md pb-4">Hello! I'm</p>
          <h1 className="text-5xl md:text-6xl font-semibold pb-6">
            Ellen Chan
          </h1>
          <h2 className="text-5xl font-semibold text-indigo-500 md:text-5xl pb-5">
            Full Stack Web Developer
          </h2>
          <p className="lg:text-2xl pb-6 w-full">
            Blending art and technology to
            build engaging and impactful apps
          </p>
          <div className="flex flex-row items-center justify-start gap-6 mt-3 w-full">
            <a
              href="#projects"
              className="rounded-2xl px-6 py-4 text-md bg-indigo-500 text-white hover:bg-indigo-600 transition-all duration-300"
            >
              My projects
            </a>
            <a
              className="border-2 rounded-full px-3 py-3 text-2xl hover:text-indigo-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ellen-chan-01656731/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="border-2 rounded-full px-3 py-3 text-2xl hover:text-indigo-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ellenycc"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex justify-center pt-[30vh] text-center text-3xl text-indigo-500 -z-10">
            <FaAngleDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
