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
      {/* Images display */}
      <div className='w-full h-[1350px] grid grid-cols-1 gap-4
      lg:flex lg:justify-between lg:gap-30 lg:h-[480px] 
      md:h-[1350px] mt-16 px-6'>
        
        {/* Image 1 */}
        {/* Image 1 */}
        <div className='w-full h-full relative overflow-hidden group'>
          
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg1} 
          alt="wimg1" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 lg:hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20'>College Lab Research</h1>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10'>2017 - 2018</h1>
              <Link href="/labexp">
              <button 
              className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'
              type='button'
              ><h1>More Information</h1>
              </button> 
              </Link>
            </div>
          </div>
        </div>
        {/* Image 2 */}
        {/* Image 2 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg2} 
          alt="wimg2" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 lg:hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20'>Blockchain Research & Certificates</h1>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10'>2020 - Present</h1>
              {/* Link to the maintenance page */}
              <Link href="/maintenance">
              <button 
              className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'
              type='button'
              ><h1>More Information</h1>
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Image 3 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125 group-hover:scale-100 duration-500'
          src={wimg3} 
          alt="wimg3" 
          />
          {/* The opacity of the blackground needs to be less do to the darker image */}
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-40 lg:hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20'>Blockchain Projects</h1>
              <h1 className='text-2xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10'>2020 - Present</h1>
              {/* Link to the maintenance page */}
              <Link href="/maintenance">
              <button 
              className='text-xl text-center font-bold bg-designColor px-6 py-2 w-60 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10'
              type='button'
              ><h1>More Information</h1> 
              </button>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience
