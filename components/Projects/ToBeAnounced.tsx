import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { wimg1 } from "../../public/assets/Projects/index.js";

const ToBeAnounced = () => {
  return (
    <section id='certificates' className='w-full h-full bg-[#0c0e0f] text-white py-28'>
      <h1 className='text-xl md:text-2xl lg:text-3xl uppercase tracking-[10px] font-semibold text-center'>
        Orderbook Decentralized Exchange
      </h1>

      {/* VER O QUE SE PASSA COM O 2XL */}
      {/* Images display (only 2 per div)*/}
      <div className='w-full h-[500px] flex flex-col items-center justify-center
      md:flex md:flex-col md:h-[850px] md:px-40
      lg:flex lg:flex-col lg:h-[850px] lg:pl-80 
      xl:flex xl:flex-col xl:h-[850px] 
      2xl:flex 2xl:flex-row 2xl:h-[800px] 
      mt-16 gap-10'>
        

      </div>



    </section>
  )
}

export default ToBeAnounced
