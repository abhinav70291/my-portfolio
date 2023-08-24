import React from 'react'
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import robot from "../../public/robot.png"
import design from "../../public/design.png";
import Image from 'next/image';

const Services = () => {
  return (
        <>
        <div className='mt-20'>
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
          <div className="lg:flex md:flex flex:1 gap-10 mt-10 dark:text-white ">
            <div data-aos="fade-right" className="text-center dark:shadow-teal-300 shadow-lg border-t-2 border-teal-300 ring-5 p-10 rounded-2xl my-10 dark:bg-opacity-60 dark:text-white flex-1">
            
                <Image src={design} width={100} height={100} alt="img2" />
                <h1 className="text-lg font-bold pt-8 pb-2 text-teal-300 ">
                    Beautiful Designs
                </h1>
                <p className="py-2 text-basic text-lg">
                    Creating elegant designs suited for your needs following core
                    design theory.
                </p>
        
              <div className="text-base font-bold pt-8 mt-12 dark:text-white">
                <h5 className="text-teal-300 pb-5 font-bold">Design Tools I Use</h5>
              
                <p className="text-gray-800 py-1 dark:text-white ">Figma</p>
                <p className="text-gray-800 py-1 dark:text-white">Dribble</p>
                <p className="text-gray-800 py-1 dark:text-white">LandingFolio</p>
                <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
              </div>
            </div>
            <div data-aos="fade-up-right" className="text-center dark:shadow-teal-300 shadow-lg border-t-2 border-teal-300 ring-5 p-10 rounded-2xl my-10 dark:bg-opacity-60 dark:text-white flex-1">
              <Image src={robot} width={100} height={100} alt="img3" />
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
              <div className="mt-14  text-base font-bold dark:text-white">
                <h5 className="text-teal-300  pb-5 font-bold">Programming Tools I Use</h5>
              
                <p className="text-gray-800 py-1  dark:text-white">Next JS</p>
                <p className="text-gray-800 py-1 dark:text-white">React JS</p>
                <p className="text-gray-800 py-1 dark:text-white">Tailwind CSS</p>
                <p className="text-gray-800 py-1 dark:text-white">Framer-Motion</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Services
