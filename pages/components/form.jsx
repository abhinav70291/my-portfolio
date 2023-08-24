import React from 'react'

const Form= () => {
  return (
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
            
            <button className="text-black p-2 ml-40 dark:text-white font-bold border-none rounded-md bg-gradient-to-r  from-cyan-500 to-teal-500">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Form
