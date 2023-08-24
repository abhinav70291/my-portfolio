import React from 'react'
import { BsColumns, BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
    
  return (
    
    <>
        <section className="pb-20">
          <nav className=" container py-10 ml-90 mb-12 flex justify-between flex-wrap dark:text-white">
            <h1 className="font-burtons text-xl font-bold mb-4">developedbyabhinav</h1>
            <ul className="flex flex-wrap md:flex-no-wrap  items-center">
              
              
              <li className="mb-4">
                <a
                  className="bg-gradient-to-r font-bold from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./docs/RESUME_ABHINAV.pdf" download={true}
                >
                  Resume
                </a>
              </li>
              
              <li className="mb-4">
                <a
                  className="text-black dark:text-white font-bold px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500 "
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              
              <li className="mb-4">
                <a
                  className="text-black dark:text-white font-bold px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500"
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="text-black dark:text-white font-bold px-4 py-2 border-none rounded-md text-base ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li className="mb-4 justify-between align-middle">
                <button
                  aria-label="Toggle dark mode"
                  onClick={() => setDarkMode(!darkMode)}
                  className="ml-10 cursor-pointer text-2xl px-4 py-2 border-none rounded-md hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500"
                >
                  <BsFillMoonStarsFill />
                </button>

              </li>
              

            </ul>
          </nav>
        </section>
    </>
  )
}

export default Navbar
