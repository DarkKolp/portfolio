import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { wimg1, wimg2, wimg3, wimg4 } from "../../public/assets/index.js";

const Experience = () => {
  return (
    <section id='portfolio' className='w-full h-full bg-black text-white py-28'>
      <h1 className='text-[25px] uppercase tracking-[10px] font-semibold text-center'>
        Featured works.
      </h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
      lg:gap-2 h-[1000px] md:h-[480px] mt-16 px-6'>
        

        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg1} 
          alt="wimg1" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20'>College lab research</h1>
              <button 
              className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'
              type='button'
              ><Link href="/labexp">More Information</Link></button>
            </div>
          </div>
        </div>

        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg2} 
          alt="wimg2" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'>College lab research</h1>
            </div>
          </div>
        </div>

        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg3} 
          alt="wimg3" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'>College lab research</h1>
            </div>
          </div>
        </div>

        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg4} 
          alt="wimg4"
        />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'>College lab research</h1>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience
