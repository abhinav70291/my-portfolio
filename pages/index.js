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
import robot from "../public/robot.png"
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Form from "./components/form"
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";







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
        <meta name="viewport" content="width=900" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className=" bg-white px-10 md:w-full md:mx-auto dark:bg-gradient-to-br dark:from-red-900 dark:via-blue-900 dark:to-yellow-700 md:px-10 lg:px-40">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Services />
          <Portfolio />
          <Form />
      </main>
      
    </div>
  );
}
