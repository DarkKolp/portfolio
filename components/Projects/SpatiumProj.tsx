import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { wimg1 } from "../../public/assets/Projects/index.js";

const Spatium = () => {
  return (
    <section id='certificates' className='w-full h-full bg-[#0c0e0f] text-white py-28'>
      <h1 className='text-xl md:text-2xl lg:text-3xl uppercase tracking-[10px] font-semibold text-center'>
        Spatium
      </h1>
      
      {/* VER O QUE SE PASSA COM O 2XL */}
      {/* Images display (only 2 per div)*/}
      <div className='w-full h-[500px] flex flex-col items-center justify-center
      md:flex md:flex-col md:h-[850px] md:px-40
      lg:flex lg:flex-col lg:h-[850px] lg:pl-80 
      xl:flex xl:flex-col xl:h-[850px] 
      2xl:flex 2xl:flex-row 2xl:h-[800px] 
      mt-16 gap-10'>
        
        {/* Image 1 */}
        <Link href='https://ipfs.io/ipfs/Qmbx7kmzmToNBwkt77pMzkfDU29dMMhEtB99haohqQEEAY?filename=Certificate_EthereumProg101.JPG'>
          <div className='w-[300px] h-[423px] md:w-[560px] md:h-[793px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={wimg1} 
            alt="cimg1" 
            />
          </div>
        </Link>

      </div>
      
      <p className='text-xl px-5 mt-16 font-medium text-textColor
      md:px-20 md:text-2xl md:leading-relaxed
      lg:px-20 lg:text-2xl
      xl:px-20 xl:text-3xl
      2xl:px-40 2xl:text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus fuga fugit doloremque totam,
        nesciunt, quo molestiae ut quis excepturi tempora, aspernatur commodi praesentium accusantium perferendis.
        Voluptatibus corporis, explicabo sed sunt sit in voluptatem quidem est magnam provident atque quia vel,
        pariatur quod, iusto dolorum iste maiores quasi expedita aliquam fugiat asperiores. Reiciendis commodi
        hic delectus eum voluptas laborum tenetur soluta modi inventore accusantium.
      </p>
      


    </section>
  )
}

export default Spatium
