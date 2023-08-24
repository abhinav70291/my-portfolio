import React from 'react'
import Image from 'next/image'
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Portfolio = () => {
  return (
    <div>
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
              <ul className="  lg:flex flex-col w-80 pl-5 mt-2 gap-2 lg:justify-center mx-auto">
                <button data-aos="fade-up" className="shadow-teal-300 shadow-sm text-black dark:text-white font-bold px-4 py-2  border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500 ">WEB APPLICATIONS</button>
                <button data-aos="fade-up" className="shadow-teal-300 shadow-sm text-black dark:text-white font-bold px-4 py-2  border-none rounded-md ml-8 hover:bg-gradient-to-r hover:font-bold hover:from-cyan-500 hover:to-teal-500 "> AI / ML PROJECTS </button>
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
    </div>
  )
}

export default Portfolio
