import React, { useState, useRef, useEffect } from 'react';
import Design from "./Design";
import {Link} from "react-scroll"
import { FaMinus } from "react-icons/fa";

const Banner = () => {
    
    const ref = useRef<string | any>("");
    {/* Funtion to close the nav Menu when click outside of it */}
    function handleClick(e:any){
        if(e.target.contains(ref.current)){
            setMenu(false);
        }
    }
    {/* Styling of the banner to get darker when scrolling */}
    const [navSize, setnavSize] = useState ("90px");
    const [navColor, setnavColor] = useState ("transparent");

    const listenScrollEvent =() => {
        window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
    };
    useEffect(()=>{
        window.addEventListener("scroll", listenScrollEvent)
        return ()=>{
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const [menu, setMenu] = useState(false);
    return (
    <section 
    id="home" 
    className="w-full h-[700px] relative text-white">
        <Design />
        <div className='absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10'>
            <nav 
            style={{
                backgroundColor: navColor,
                transition: "all 1s",
            }}
            className="w-full px-8 py-4 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25">
                <h1 className="font-bodyFont text-4x1 text-white font-extrabold border-2 w-12 text-center">NS</h1>
                <div 
                    onClick={() => setMenu(true)}
                    className='w-8 h-6 group flex flex-col items-center justify-between cursor-pointer'
                >
                    <span className='w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300'></span>
                    <span className='w-full h-[3px] bg-designColor inline-flex'></span>
                    <span className='w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300'></span>
                </div>
            </nav>
            <div className='w-full h-full flex flex-col justify-center items-center px-4'>
                <h1 className='text-[50px] md:text-[60px] lg:text-[100px] font-black'>Hello, I'm Nuno Silva</h1>
                <h3 className='text-[20px] md:text-[24px] lg:text-[40px] font-black'>Just a person trying to connect the Nodes</h3>
                <div className='flex items-center gap-2 md:gap-9 text-base md:text-xl font-bold bg-designColor px-6 py-3 uppercase'>
                    <h2 className='tracking-[4px]'>Reseacher</h2>
                    <FaMinus className='text-2x1 rotate-90' />
                    <h2 className='tracking-[4px]'>Developer</h2>
                    <FaMinus className='text-2x1 rotate-90' />
                    <h2 className='tracking-[4px]'>advisor</h2>
                </div>
            </div>
        </div>
        {
            menu && (
                <div 
                ref={(node)=>(ref.current = node)} 
                onClick={handleClick}
                className='w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex
                justify-end z-50'>
                    <div className='w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex
                    items-center justify-center'>
                        
                        <div className='w-4/5 px-12'>
                            <ul className='flex flex-col gap-5'>
                                {/* Link to the Home section of the website */}
                                <Link
                                to='home' 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                onClick={() => setMenu(false)}
                                >
                                    <li className='text-3xl font-semibold text-gray-300 hover:text-white
                                    duration-300 cursor-pointer'>
                                        Home
                                    </li>
                                </Link>
                                {/* Link to the About section of the website */}
                                <Link 
                                to='about' 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                onClick={() => setMenu(false)}
                                >
                                    <li className='text-3xl font-semibold text-gray-300 hover:text-white
                                    duration-300 cursor-pointer'>
                                        About
                                    </li>
                                </Link>
                                {/* Link to the Portfolio section of the website */}
                                <Link
                                to='portfolio' 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                onClick={() => setMenu(false)}
                                >
                                    <li className='text-3xl font-semibold text-gray-300 hover:text-white
                                    duration-300 cursor-pointer'>
                                        Portfolio
                                    </li>
                                </Link>
                                {/* Link to the Contact section of the website */}
                                <Link
                                to='contact' 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                onClick={() => setMenu(false)}
                                >
                                    <li className='text-3xl font-semibold text-gray-300 hover:text-white
                                    duration-300 cursor-pointer'>
                                        Contact
                                    </li>
                                </Link>
                            </ul>

                            <div className='text-xl gont-thin mt-32'>
                            <p>For more information</p>
                            <p>
                                or just say 'Hello' - {" "}
                                <span className='font-semibold text-designColor'>
                                    contact me.
                                </span>
                            </p>
                            </div>

                        </div>
        
                        <div className='w-1/5 h-full border-l-[1px] text-center flex items-center
                        justify-center'>
                            <button
                            onClick={() => setMenu(false)}
                            className='text-3xl font-black text-designColor'>
                            X</button>
                        </div>
                    </div>

                </div>
        )}       
    </section>
    )
}

export default Banner
