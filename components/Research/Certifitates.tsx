import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { cimg1 } from "../../public/assets/Certificates/index.js";

const Certificates = () => {
  return (
    <section id='certificates' className='w-full h-full bg-gray-900 text-white py-28'>
      <h1 className='text-[25px] uppercase tracking-[10px] font-semibold text-center'>
        Certificates
      </h1>
      <p className='text-xl md:text-3xl px-40 mt-16 font-medium md:leading-relaxed text-textColor'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo mollitia ut numquam eligendi 
                corporis a tempora laudantium explicabo. 
      </p>

      {/* Images display (only 2 per div)*/}
      <div className='w-full h-[1700px] flex flex-col 
      md:flex md:flex-col md:h-[1600px] md:px-40
      lg:flex lg:flex-col lg:h-[1600px] lg:pl-80 
      xl:flex xl:flex-col xl:h-[1600px] items-center
      2xl:flex 2xl:flex-row 2xl:justify-between 2xl:h-[800px]
      mt-16 2xl:px-60 gap-10'>
        
        {/* Image 1 */}
        <Link href='https://ipfs.io/ipfs/Qmbx7kmzmToNBwkt77pMzkfDU29dMMhEtB99haohqQEEAY?filename=Certificate_EthereumProg101.JPG'>
          <div className='w-[300px] h-[386px] md:w-[614px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg1} 
            alt="cimg1" 
            />
          </div>
        </Link>

        {/* Image 2 */}
        <Link href='https://ipfs.io/ipfs/Qmbx7kmzmToNBwkt77pMzkfDU29dMMhEtB99haohqQEEAY?filename=Certificate_EthereumProg101.JPG'>
          <div className='w-[300px] h-[386px] md:w-[614px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg1} 
            alt="cimg1" 
            />
          </div>
        </Link>
      </div>

      <div className='w-full h-[1700px] flex flex-col 
      md:flex md:flex-col md:h-[1600px] md:px-40
      lg:flex lg:flex-col lg:h-[1600px] lg:pl-80 
      xl:flex xl:flex-col xl:h-[1600px] items-center
      2xl:flex 2xl:flex-row 2xl:justify-between 2xl:h-[800px]
      mt-16 2xl:px-60 gap-10'>
        
        {/* Image 3 */}
        <div className='w-[300px] h-[386px] md:w-[614px] md:h-[789px] relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-100'
          src={cimg1} 
          alt="cimg1" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Particles Synthesis</h1>
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className='w-[300px] h-[386px] md:w-[614px] md:h-[789px] relative overflow-hidden group'>
          <Image className='w-full h-full object-cover scale-100'
          src={cimg1} 
          alt="cimg1" 
          />
          <div className='absolute w-full h-[480px] left-0 top-0'>
            <div className='w-full h-full relative bg-black bg-opacity-70 hidden
            group-hover:inline-block transition-opacity duration-500'>
              <h1 className='text-xl text-center font-bold px-6 py-2 w-full 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-20'>Particles Synthesis</h1>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Certificates
