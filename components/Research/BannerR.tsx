import React, { useState, useRef, useEffect } from 'react';
import Design from "./DesignR";
import Link from 'next/link';
import { ImHome } from "react-icons/im";

const BannerR = () => {
    
    const ref = useRef<string | any>("");
    
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
    id="homeLab" 
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
                    className='w-8 h-6 flex flex-col items-center cursor-pointer'
                >
                    <Link href="/">
                        <ImHome className='top-2 text-3xl md:text-4xl text-white' />
                    </Link>
                </div>
            </nav>
            <div className='w-full h-full flex flex-col justify-center items-center px-4 bg-black bg-opacity-40'>
                <h1 className='text-[60px] md:text-[60px] lg:text-[100px] font-black'>Blockchain & Web3 Education</h1>
                <h3 className='text-[30px] md:text-[24px] lg:text-[40px] font-black'>Unlocking potential through neuron connections</h3>
            </div>
        </div>       
    </section>
    )
}

export default BannerR
