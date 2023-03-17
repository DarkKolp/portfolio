import Image from 'next/image';
import React from 'react'
import { MaqCafe, wimg2, wimg3, wimg4 } from "../../public/assets/labexp/index.js";

const ExperienceLab = () => {
  return (
    <section id='portfolio' className='w-full h-full bg-black text-white py-28'>
      <h1 className='text-[25px] uppercase tracking-[10px] font-semibold text-center'>
        Featured works.
      </h1>
      {/* Images display */}
      <div className='w-full h-[1700px] grid grid-cols-1 
      md:grid-cols-2 md:h-[970px]
      lg:grid-cols-4 lg:gap-2 lg:h-[480px]
      mt-16 px-6 gap-4'>
        
        {/* Image 1 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-100'
          src={MaqCafe} 
          alt="wimg1" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Particles Synthesis</h1>
            </div>
          </div>
        </div>
        {/* Image 2 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-100'
          src={wimg2} 
          alt="wimg2" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Small Gold Nanoparticles (~10nm)</h1>
            </div>
          </div>
        </div>
        {/* Image 3 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-100'
          src={wimg3} 
          alt="wimg3" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Large Gold Nanoparticles ({'>'}50nm)</h1>
            </div>
          </div>
        </div>
        {/* Image 4 */}
        <div className='w-full h-full relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-125'
          src={wimg4} 
          alt="wimg4"
        />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Transmission Electron Microscopy Image</h1>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ExperienceLab
