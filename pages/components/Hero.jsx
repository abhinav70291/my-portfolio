import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub
  } from "react-icons/ai";
  import Image from 'next/image';
  import deved from "../../public/dev-ed-wave.png";

const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero
