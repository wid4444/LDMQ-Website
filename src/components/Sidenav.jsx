import { useState, useEffect  } from "react";
import {
  // AiOutlineMenu,
  // AiOutlineHome,
  // AiOutlineProject,
  // AiOutlineMail,
  // AiFillHome,
} from "react-icons/ai";
// import { TiThMenu } from "react-icons/ti";
// import { BsPerson } from "react-icons/bs";
// import { GrProjects } from "react-icons/gr";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";
import {
  // IoAppsSharp,
  IoMenu,
  // IoHomeOutline,
  // IoMailOutline,
  // IoPersonOutline,
  IoHome,
  // IoCodeWorking,
  IoApps
} from "react-icons/io5";
import { IoMdMail, IoIosCloseCircle } from "react-icons/io";
// import TechStack, { GitHub, LinkedIn } from "./TechStack";
// import { CgMenuHotdog } from "react-icons/cg";
// import { MdWorkOutline } from "react-icons/md";
// import { AiOutlineAppstore } from "react-icons/ai";

import "./Styles.css";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state change");
  };

  const [activeLink, setActiveLink] = useState(true);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  // const [activeLink, setActiveLink] = useState('');

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setActiveLink(window.location.hash);
  //   };

  //   // Set initial active link based on current hash
  //   handleHashChange();

  //   // Listen for hash changes
  //   window.addEventListener('hashchange', handleHashChange);

  //   // Cleanup listener
  //   return () => window.removeEventListener('hashchange', handleHashChange);
  // }, []);

  // const getHighlightClass = (href) => {
  //   return activeLink === href ? 'border-2 border-[#2EA1E5] dark:border-[#49DBAF]' : '';
  // };

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const sections = [
      { id: 'main', ref: document.getElementById('main') },
      { id: 'bio', ref: document.getElementById('bio') },
      { id: 'experience', ref: document.getElementById('experience') },
      { id: 'projects', ref: document.getElementById('projects') },
      { id: 'resume', ref: document.getElementById('resume') },
      { id: 'contact', ref: document.getElementById('contact') },
    ];

    const handleScroll = () => {
      const currentOffset = window.pageYOffset + window.innerHeight / 2; // Adjust as needed

      const current = sections.find(section => 
        section.ref && // Check if section.ref is not null
        section.ref.offsetTop <= currentOffset &&
        section.ref.offsetTop + section.ref.offsetHeight > currentOffset
      );

      if (current) {
        setCurrentSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is not at the top when loaded
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHighlightClass = (id) => {
    return currentSection === id ? 'text-[#ff6700] dark:text-[#ff3cc7]' : '';
  };

  // const [currentSection, setCurrentSection] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const home = document.getElementById("home");
  //     const bio = document.getElementById("bio");
  //     const experience = document.getElementById("experience");
  //     const projects = document.getElementById("projects");
  //     const resume = document.getElementById("resume");
  //     const contact = document.getElementById("contact");

  //     if (
  //       window.scrollY >= home.offsetTop &&
  //       window.scrollY < home.offsetTop + home.offsetHeight
  //     ) {
  //       setCurrentSection("home");
  //     } else if (
  //       window.scrollY >= bio.offsetTop &&
  //       window.scrollY < bio.offsetTop + bio.offsetHeight
  //     ) {
  //       setCurrentSection("bio");
  //     } else if (
  //       window.scrollY >= experience.offsetTop &&
  //       window.scrollY < experience.offsetTop + experience.offsetHeight
  //     ) {
  //       setCurrentSection("experience");
  //     } else if (
  //       window.scrollY >= projects.offsetTop &&
  //       window.scrollY < projects.offsetTop + projects.offsetHeight
  //     ) {
  //       setCurrentSection("projects");
  //     } else if (
  //       window.scrollY >= resume.offsetTop &&
  //       window.scrollY < resume.offsetTop + resume.offsetHeight
  //     ) {
  //       setCurrentSection("resume");
  //     } else if (
  //       window.scrollY >= contact.offsetTop &&
  //       window.scrollY < contact.offsetTop + contact.offsetHeight
  //     ) {
  //       setCurrentSection("contact");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [selectedSection, setSelectedSection] = useState('');

 // Function to update the selected section
 const handleSectionClick = (sectionId) => {
   setSelectedSection(sectionId);
 };
 
 // Function to determine the className based on selection
 const getSectionClassName = (sectionId) => {
   return `section ${selectedSection === sectionId ? 'selected' : ''}`;
 };

  return (
    <div>
      {/* fixed will keep the icon in a place Absolute will leave it at the top */}
      {/* <CgMenuHotdog  onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden text-gray-800 dark:text-white font-bold' size={40}/>  */}
      {nav ? (
        <IoIosCloseCircle
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden text-gray-700 dark:text-white font-bold"
          size={40}
        />
      ) : (
        <IoMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden text-gray-800 dark:text-white font-bold"
          size={45}
        />
      )}

      {/* This is saying if our Navbar is true to show the content other wise don't show  */}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 dark:bg-slate-800 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoHome size={20} green-600 />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#bio"
            className="paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaUserTie size={20} />
            <span className="pl-4">About Me</span>
          </a>
          <a
            onClick={handleNav}
            href="#experience"
            className="paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BiSolidBriefcaseAlt2 size={20} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoApps size={20} />
            <span className="pl-4">Projects</span>
          </a>
          {/* <a onClick={handleNav} href="#resume" className='paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaFileAlt size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a> */}
          <a
            onClick={handleNav}
            href="#contact"
            className="paths w-[35%] flex justify-center items-center rounded-full shadow-inner text-gray-100 bg-[#001b5e] dark:bg-green-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <IoMdMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[35%] z-10 ml-4 md:ml-0">
        <div className="flex flex-col">
        <a
        href="#main"
        title="Home"
        className={`rounded-2xl m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5]   dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('main')}`}

        // className={`rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5] dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('home')}`}
      >
        {activeLink === "#main" ? "Home" : <IoHome size={25}/>}
      </a>

          <a
            href="#bio"
            title="Bio"
            // onMouseEnter={() => handleMouseEnter("Bio")}
            // onMouseLeave={handleMouseLeave}
            className={`rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5]   dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('bio')}`}
            // className="rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5]   dark:text-[#49DBAF] ease-in duration-300"
          >
            {/* <IoPersonOutline size={25} className="text-lg text-bold"/> */}
            {activeLink === "Bio" ? "Bio" : <FaUserTie size={25} />}
          </a>
          <a
            href="#experience"
            title="Experience"
            // onMouseEnter={() => handleMouseEnter("Experience")}
            // onMouseLeave={handleMouseLeave}
            className={`rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5]   dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('experience')}`}

            // className="rounded-full m-2 p-4 cursor-pointer hover:scale-110  text-[#ff6700]   dark:text-[#ff3cc7] ease-in duration-300"
          >
            {/* <MdWorkOutline size={25} /> */}
            {activeLink === 'Experience' ? 'Experience' :<BiSolidBriefcaseAlt2 size={25} />}
          </a>
          {/* <a
              href="#resume"
              title="Resume"
              onMouseEnter={() => handleMouseEnter("Resume")}
              onMouseLeave={handleMouseLeave}
              className="rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300"
            >
              <FaFileAlt size={25} />
            
          </a> */}
          <a
            href="#projects"
            title="Projects"
            // onMouseEnter={() => handleMouseEnter("Projects")}
            // onMouseLeave={handleMouseLeave}
            className={`rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5] dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('projects')}`}

            // className="rounded-full m-2 p-4 cursor-pointer hover:scale-110  text-[#2EA1E5]   dark:text-[#49DBAF]  ease-in duration-300"
          >
            {/* <AiOutlineAppstore size={25} /> */}
            {activeLink === 'Projects' ? 'Projects' :<IoApps size={25}  />}
          </a>

          <a
            href="#contact"
            title="Contact"
            // onMouseEnter={() => handleMouseEnter("Contact")}
            // onMouseLeave={handleMouseLeave}
            className={`rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:text-extrabold text-[#2EA1E5] dark:text-[#49DBAF] ease-in duration-300 icon-class ${getHighlightClass('contact')}`}

            // className="rounded-full m-2 p-4 cursor-pointer hover:scale-110 text-extrabold text-[#2EA1E5]   dark:text-[#49DBAF]  ease-in duration-300"
          >
            {/* <IoMailOutline size={25} /> */}
            {activeLink === 'Contact' ? 'Contact' :<IoMdMail size={25} />}
          </a>
        </div>
        {/* <div className="flex flex-col"> 

        <a
            href="#contact"
            title="Contact"
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={handleMouseLeave}
            className="rounded-full m-2 p-4 cursor-pointer hover:scale-110 hover:shadow-inner text-blue-800 hover:shadow-gray-800  dark:hover:shadow-inner dark:text-green-600 dark:hover:shadow-gray-200 ease-in duration-300"
          >
            <FaGithub size={25} />
          </a>
          <TechStack 
          LinkedIn={LinkedIn}
          GitHub={GitHub}
          />

            </div> */}
      </div>
      {/* end of Navbar logic */}
    </div>
  );
};

export default Sidenav;
