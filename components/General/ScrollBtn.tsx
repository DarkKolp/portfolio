import React, { useEffect } from 'react'
import { TbChevronRight } from "react-icons/tb"

const ScrollBtn = () => {

    useEffect (()=>{
        const scrollBtn = document.querySelector(".scrollBtn") as HTMLElement;
        window.onscroll = () => {
            scrollFunction();
        }
        const scrollFunction = () => {
            if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
                scrollBtn!.style.display="block";
            }
            else{
                scrollBtn!.style.display="none";
            }
        };
        const scrollToTop = () => {
            window.scrollTo({top:0,behavior:"smooth"})
        };
        scrollBtn?.addEventListener("click",()=>{
            scrollToTop();
        });
    }, []);
    {/* Changed the w, h, text size and position (bottom) for small screens. Fixed the bad positioning */}
  return (
    <div className='w-20 h-20 md:w-14 md:h-14 z-50 text-5xl md:text-3xl fixed bottom-[15vh] md:top-[85vh] right-10 bg-black text-gray-200
    hover:text-white rounded-full border-[1px] border-yellow-600 shadow-cardShadow scrollBtn 
    hover:border-designColor hidden duration-200'>
        <button className='w-full h-full flex items-center justify-center relative -rotate-90'>
            <TbChevronRight />
        </button>
    </div>
  )
}

export default ScrollBtn
