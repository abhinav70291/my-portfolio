"use client"
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsColumns, BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";







export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    history.scrollRestoration = "manual";
    window.onload = scrollToTop;
    }, []);

  
  
  

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Abhinav Anurag </title>
        <meta name="viewport" content="width=1200" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className=" bg-white px-10 md:w-full md:mx-auto dark:bg-gradient-to-br dark:from-red-900 dark:via-blue-900 dark:to-yellow-700 md:px-10 lg:px-40">

        <section className="pb-20">
          <nav className=" container py-10 ml-90 mb-12 flex justify-between flex-wrap display-flex dark:text-white">
            <h1 className="font-burtons text-xl font-bold mb-4">developedbyabhinav</h1>
            <ul className="flex flex-wrap md:flex-no-wrap items-center">
              
              
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
          <div className="text-center pt-10">
            <h2 data-aos="zoom-in"  data-aos-duration="3000" className="text-5xl py-2 font-bold  dark:text-teal-300 md:text-6xl">
              Abhinav Anurag
            </h2>
            <h3  data-aos="zoom-in"  data-aos-duration="3000" className="font-bold text-2xl py-2 text:5xl dark:text-white md:text-3xl">
              ML Engineer and Web developer
            </h3>
            <p data-aos="zoom-in"  data-aos-duration="1000" className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for <span className="font-bold text-teal-400">Website Development</span> and <span className="font-bold text-teal-400">AI Integration</span> needs. Join me below and let&apos;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a data-aos="zoom-in" >
                <AiFillTwitterCircle />
              </a>
              <a ddata-aos="zoom-in" href="https://www.linkedin.com/in/abhinavanurag00/">
                <AiFillLinkedin />
              </a>
              <a data-aos="zoom-in" href="https://github.com/abhinav70291">
                <AiFillGithub />
              </a>

                            
            </div>
            <div   className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-59 md:w-34">
              <Image data-aos="zoom-in" data-aos-duration="1000" src={deved} layout="fill" alt="img1" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 id="skills" data-aos="fade-up" className="text-3xl text-center dark:text-white font-extrabold font-serif text-centerrounded-lg ">Services I offer</h1>
            <p data-aos="fade-up" className="text-xl text-center font-poppins py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="dark:text-teal-200 font-bold"> Agencies </span>
              consulted for <span className="dark:text-teal-200 font-bold text-xl">Startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            {/* <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              and programming.
            </p> */}
          </div>
          <div className="lg:flex md:flex flex:1 gap-5 mt-10 dark:text-white ">
            <div data-aos="fade-right" className="text-center dark:shadow-teal-300 shadow-lg border-t-2 border-teal-300 ring-5 p-10 rounded-2xl my-10 dark:bg-opacity-60 dark:text-white flex-1">
              <Image src={design} width={100} height={100} alt="img2" />
              <h1 className="text-lg font-bold pt-8 pb-2 text-teal-300 ">
                Beautiful Designs
              </h1>
              <p className="py-2 text-basic text-lg">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <div className="text-base font-bold pt-3 mt-10 dark:text-white">
                <h5 className="text-teal-300 pb-5 font-bold">Design Tools I Use</h5>
              
                <p className="text-gray-800 py-1 dark:text-white ">Figma</p>
                <p className="text-gray-800 py-1 dark:text-white">Dribble</p>
                <p className="text-gray-800 py-1 dark:text-white">LandingFolio</p>
                <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
              </div>
            </div>
            <div data-aos="fade-up-right" className="text-center dark:shadow-teal-300 shadow-lg border-t-2 border-teal-300 ring-5 p-10 rounded-2xl my-10 dark:bg-opacity-60 dark:text-white flex-1">
              <Image src={design} width={100} height={100} alt="img3" />
              <h1 className="text-lg font-bold pt-8 pb-2 text-teal-300 ">
                ChatBots and LLMs
              </h1>
              <p className="py-2 text-basic text-lg">
                Creating highly efficient LLM models and chatbots for your business and individual needs
              </p>
              <div className="text-base pt-6 font-bold dark:text-white">
                <h5 className="text-teal-300 pb-5 font-bold">AI Tools I Use</h5>
              
                <p className="text-gray-800 py-1 dark:text-white ">Python</p>
                <p className="text-gray-800 py-1 dark:text-white">Flask & Django </p>
                <p className="text-gray-800 py-1 dark:text-white">OpenAI & HuggingFace</p>
                <p className="text-gray-800 py-1 dark:text-white">Keras & Pytorch</p>
              </div>
            </div>  
            <div data-aos="fade-up-left"  className="text-center dark:shadow-teal-300 shadow-lg p-10 border-t-2 border-teal-300 rounded-2xl my-10 dark:bg-opacity-60 dark:text-white flex-1">
              <Image src={code} width={100} height={100} alt="img4" />
              <h1 className="text-lg font-bold pt-8 pb-2 text-teal-300 ">
                Code your dream project
              </h1>
              <p className="py-2 mb-18 text-lg">
                Do you have an idea for your next great website? Let us make it a
                reality.
              </p>
              <div className="mt-7  text-base font-bold dark:text-white">
                <h5 className="text-teal-300  pb-5 font-bold">Programming Tools I Use</h5>
              
                <p className="text-gray-800 py-1  dark:text-white">Next JS</p>
                <p className="text-gray-800 py-1 dark:text-white">React JS</p>
                <p className="text-gray-800 py-1 dark:text-white">Tailwind CSS</p>
                <p className="text-gray-800 py-1 dark:text-white">Framer-Motion</p>
              </div>
            </div>
            <div data-aos="fade-left" className="text-center dark:shadow-teal-300 shadow-lg p-10 border-t-2 border-teal-300 rounded-2xl my-10 outline-white dark:bg-opacity-60 dark:text-white flex-1">
              <Image src={consulting} width={100} height={100} alt="img5" />
              <h1 className="text-lg font-bold pt-8 pb-2 text-teal-300 ">Consulting</h1>
              <p className="pb-0 pt-0 text-lg">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <div className="mt-10 text-base font-bold dark:text-white">
                <h5 className="text-teal-300  pb-5 font-bold ">Consulting Tools I Use</h5>
              
                <p className="text-gray-800 py-1 dark:text-white ">Zoom</p>
                <p className="text-gray-800 py-1 dark:text-white">Google</p>
                <p className="text-gray-800 py-1 dark:text-white">Microsoft Teams</p>
                <p className="text-gray-800 py-1 dark:text-white">Slack</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h1 id="portfolio" data-aos="fade-up" className="text-3xl py-1 dark:text-white font-extrabold font-serif ui-sans-serif text-center  rounded-lg ">Portfolio</h1>
            <p data-aos="fade-up" className="text-md text-center py-2 text-lg leading-8 text-gray-800 dark:text-gray-200">
            As an experienced AI/ML engineer and web developer, I specialize in creating full-stack ML applications for businesses using tools such as Next.js, TensorFlow, PyTorch, and Scikit-Learn. My strong background in both fields allows me to deliver high-quality solutions to my clients
            </p>
            <p data-aos="fade-up" className="text-center py-2 text-lg leading-8 dark:text-white">
              I offer from a wide range of services, including <span className="font-bold text-teal-200">Brand design and Websites</span> and 
              <span className="font-bold text-teal-200"> AI Integrated Web Applications</span>
            </p>
          </div>

          
          <><nav >
              <ul className="  lg:flex mt-2 justify-evenly">
                <button data-aos="fade-right" className="shadow-teal-300 shadow-sm text-black dark:text-white font-bold px-4 py-2  border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500 ">WEB APPLICATIONS</button>
                <button data-aos="fade-left" className="shadow-teal-300 shadow-sm text-black dark:text-white font-bold px-4 py-2  border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500 ">AI / ML PROJECTS</button>
              </ul>
            </nav></>


          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image data-aos="fade-right"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="img6"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image data-aos="fade-left"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="img7"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image data-aos="fade-right"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="img8"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image data-aos="fade-left"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="img9"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image data-aos="fade-right"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt="img10"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image data-aos="fade-left"  data-aos-duration="1000"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                alt="img11"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 justify-center md:flex lg:flex " >
        
            <div data-aos="fade-up" className="flex flex-col items-center w-96">
              <h1 id="skills" data-aos="fade-up" className="text-3xl py-1 dark:text-white font-extrabold font-serif ui-sans-serif rounded-lg">Contact Me</h1>
              <form className="text-black dark:text-white text-sm py-4 max-w-6xl w-120">
                <label for="name">Name:</label><br />
                <input className="w-96 h-8 rounded-lg bg-transparent opacity-70 dark:opacity-40 hover:border-teal-300 shadow-md border-2 focus:outline-none focus:ring-2 focus:ring-teal-300" type="text" id="name" name="name" /><br />
                <label for="company">Company / Institute:</label><br />
                <input className="w-96 h-8 rounded-lg bg-transparent opacity-70 dark:opacity-40 hover:border-teal-300 shadow-md border-2 focus:outline-none focus:ring-2 focus:ring-teal-300" type="text" id="company" name="company" /><br />
                <label for="email">Email:</label><br />
                <input className="w-96 h-8 rounded-lg bg-transparent opacity-70 dark:opacity-40 hover:border-teal-300 shadow-md border-2 focus:outline-none focus:ring-2 focus:ring-teal-300" type="email" id="email" name="email" /><br />
                <label for="message">Message / Query:</label><br />
                <textarea className="w-96 rounded-lg bg-transparent opacity-70 dark:opacity-40 hover:border-teal-300 shadow-md border-2 focus:outline-none focus:ring-2 focus:ring-teal-300" id="message" name="message" rows={5} BsColumns={5}></textarea><br />
                
                <button className="text-black p-3 dark:text-white font-bold border-none rounded-md hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500">Submit</button>
              </form>
            </div>
    


        </section>
      </main>
    </div>
  );
}
