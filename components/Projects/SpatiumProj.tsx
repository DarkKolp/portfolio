import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { wimg1 } from "../../public/assets/Projects/index.js";

const Spatium = () => {
  return (
    <section id='certificates' className='w-full h-full bg-[#0c0e0f] text-white py-28'>
      <h1 className='text-3xl md:text-2xl lg:text-3xl uppercase tracking-[10px] font-semibold text-center'>
        Spatium
      </h1>
      
      {/* VER O QUE SE PASSA COM O 2XL */}
      {/* Images display (only 2 per div)*/}
      <div className='w-full h-[850px] flex flex-col items-center justify-center
      md:flex md:flex-col md:h-[850px] md:px-40
      lg:flex lg:flex-col lg:h-[850px]
      xl:flex xl:flex-col xl:h-[850px] 
      2xl:flex 2xl:flex-row 2xl:h-[800px] 
      mt-16 gap-10'>
        
        {/* Image 1 */}
          <div className='w-[560px] h-[793px] md:w-[560px] md:h-[793px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={wimg1} 
            alt="cimg1" 
            />
          </div>

      </div>
      
      <p className='text-3xl pt-5 px-10 lg:px-40 lg:pt-20 md:text-3xl font-medium md:leading-relaxed text-textColor'>
        Spatium is a concept for a decentralized autonomous organization (DAO) built on top of Chromia, a relational blockchain 
        designed for developing decentralized applications. Chromia provides Spatium with the scalability and security 
        needed to support its Sci-fi multiplayer Role-Playing Game (RPG) and Decentralized Finance (DeFi) concept - Automated Market Maker (AMM). 
        With Chromia's relational database structure, Spatium can efficiently manage complex data and transactions, such as player ownership 
        of in-game assets, voting rights in the platform, and rewards distribution for liquidity providers. Chromia's relational model allows for 
        optimized storage, querying, and indexing of data, enabling Spatium to offer a seamless and immersive user experience. Additionally, Chromia's 
        unique features, such as smart contract-level access control and cross-chain communication, allow Spatium to provide advanced functionalities and 
        interoperability with other blockchains. By leveraging the benefits of Chromia's technology, Spatium aims to create a democratic governed game with 
        engaging lore and community building at its core, while also providing a reliable and secure platform for DeFi transactions.
      </p>
      <Link
      href='https://drive.google.com/file/d/1p11QkWyxTrhNk2lts2LTNtqDksftJ7Xa/view?usp=sharing'>
        <p className='text-3xl pt-5 px-10 lg:px-40 lg:pt-10 md:text-3xl font-medium underline md:leading-relaxed text-textColor'>
          Read the full whitepaper of this idea (unfinished)
        </p>
      </Link>
      


    </section>
  )
}

export default Spatium
