import React, { useState } from 'react'
import {motion} from "framer-motion"
import { FaMap, FaLinkedinIn, FaGithub } from "react-icons/fa"

const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const handleSubmit=(e: any) => {
        e.preventDefault();

        if(username===""){
            setErrMsg("Please enter your name");
        }else if (email === ""){
            setErrMsg("Please provide your email");
        }else if (message === ""){
            setErrMsg("Please write a message");
        }else {
            setSuccessMsg(
                `Hello ${username}, thank you for reaching out. Shortly I'll replay with additional information via your email: ${email}`
            )
        }
        

    }
  return ( 
    <section id='contact' className='w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed 
    text-white px-4 relative'>
        <div className='w-full h-full bg-black bg-opacity-80 py-20'>
            <div className='max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12'>
                <h1 className='text-2xl font-thin tracking-widest uppercase text-center'>
                    Get in touch!
                </h1>
                {/* Icons */}
                <div className='flex flex-row px-3 justify-between items-center'>
                    {/* Location Icon */}
                    <div className='flex flex-col items-center gap-3'>
                        <FaMap className='text-6xl md:text-6xl text-designColor' />
                        <p className='text-l tracking-wide'>Braga, Portugal</p>
                    </div>
                    {/* LinkedIn Icon */}
                    <div className='flex flex-col items-center gap-3'>
                        <a href="https://www.linkedin.com/in/nuno-osilva/">
                            <FaLinkedinIn className='text-6xl md:text-7xl text-designColor' />
                        </a>
                    </div>
                    {/* Github Icon */}
                    <div className='flex flex-col items-center gap-3'>
                        <a href="https://github.com/DarkKolp">
                            <FaGithub className='text-6xl md:text-7xl text-designColor' />
                        </a>
                    </div>
                </div>
                {/* This part has a function to drop a success message that overlaps the form
                Also, as a motion animation on the paragraph that shows the success message */}
                {
                    successMsg? (<motion.p 
                    initial={{ y:50, opacity:0 }} 
                    animate={{ y:0, opacity:1 }}
                    transition={{ duration:1, type: "easeIn" }}
                    className='max-w-[600px] h-full flex justify-center items-center mx-auto
                    text-lg font-semibold px-4'>
                        {successMsg}
                    </motion.p>
                    ):(                
                    <form className='w-full flex flex-col items-center gap-4 md:gap-10'>
                    <div className='w-full flex flex-col md:flex-row items-center gap-4 md:gap-10'>
                        <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Name'
                        className='w-full md:w-1/2 py-2 px-4 text-lg text-black
                        placeholder:texxt-gray-600 font-bold placeholder:font-normal outline-none
                        border-transparent border-2 focus-within:border-designColor duration-200' 
                        type="text" />
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className='w-full md:w-1/2 py-2 px-4 text-lg text-black
                        placeholder:texxt-gray-600 font-bold placeholder:font-normal outline-none
                        border-transparent border-2 focus-within:border-designColor duration-200' 
                        type="email" />
                    </div>
                    {/* Message Area */}
                    <textarea 
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full text-lg h-36 p-4 text-black
                    placeholder:text-gray-600 font-bold placeholder:font-normal outline-none
                    border-transparent border-2 focus-within:border-designColor duration-200
                    resize-none'
                    placeholder='Write your message'>
                    </textarea>
                    {
                        errMsg && <p className='w-full bg-red-500 py-1 text-center text-base font-semibold
                        tracking-wider'>
                            {errMsg}
                        </p>
                    }
                    <button 
                    onClick={handleSubmit}
                    className='w-44 h-12 bg-designColor text-base uppercase font-bold
                    tracking-wide border-2 border-transparent hover:bg-black hover:border-designColor
                    duration-300'>
                        Submit Now
                    </button>
                    </form>
                )}
            </div>
        </div> 
    </section>
  ) 
}

export default Contact
