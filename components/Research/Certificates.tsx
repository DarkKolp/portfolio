import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { cimg1, cimg2, cimg3, cimg4, cimg5, cimg6 } from "../../public/assets/Certificates/index.js";

const Certificates = () => {
  return (
    <section id='certificates' className='w-full h-full bg-[#0c0e0f] text-white py-20 px-10 xl:px-40'>
      <h1 className='text-[27px] uppercase font-bold text-center'>
        Certificates
      </h1>
      <p className='text-3xl pt-10 lg:pt-0 md:text-3xl font-medium md:leading-relaxed text-textColor'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo mollitia ut numquam eligendi 
        corporis a tempora laudantium explicabo. 
      </p>

      {/* Images display (only 2 per div)*/}
      {/* Small screen 5100px (for 6 images displayed vertically with 865px height) */}
      <div className='w-full h-[1750px] flex flex-col items-center
      md:flex md:flex-col md:h-[1600px] md:px-40
      lg:flex lg:flex-col lg:h-[1600px] 
      xl:flex xl:flex-col xl:h-[1600px] 
      2xl:flex 2xl:flex-row 2xl:justify-around 2xl:h-[800px]
      mt-16 2xl:px-10 gap-10'>
        
        {/* Image 1 - BC and BTC 101*/}
        <Link href='https://ipfs.io/ipfs/QmdSx3fsD67vSsYHFoNE7dPSj2Uo2exNhGJNiZBFtVRQtM?filename=BCandBTC101.jpg'>
          <div className='w-[650px] h-[865px] md:w-[614px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg1} 
            alt="cimg1" 
            />
          </div>
        </Link>

        {/* Image 2 - ETHP 101*/}
        <Link href='https://ipfs.io/ipfs/QmcCSzE1SJmj5BMcuEbEAzQwadwx3K1LqNQbXNYkxFSmYJ?filename=ETHP101.jpg'>
          <div className='w-[613px] h-[865px] md:w-[559px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg2} 
            alt="cimg2" 
            />
          </div>
        </Link>
      </div>

      <div className='w-full h-[1750px] flex flex-col items-center
      md:flex md:flex-col md:h-[1600px] md:px-40
      lg:flex lg:flex-col lg:h-[1600px] 
      xl:flex xl:flex-col xl:h-[1600px] 
      2xl:flex 2xl:flex-row 2xl:justify-around 2xl:h-[800px]
      mt-16 2xl:px-10 gap-10'>
        {/* Image 3 - DeFi 101 */}
        <Link href='https://ipfs.io/ipfs/Qmf5pT9zSDqUwNvJqUv7tbA589BYpe1VBmKgECND9SvroW?filename=DeFi101.jpg'>
          <div className='w-[613px] h-[865px] md:w-[559px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg3} 
            alt="cimg3" 
            />
          </div>
        </Link>

        {/* Image 4 - Eth P 201 */}
        <Link href='https://ipfs.io/ipfs/QmTu76XcqhdYvBYG4Eb7Zoi7YTNiC2rhZXwgEQEmyTgw3k?filename=ETHP201.jpg'>
          <div className='w-[613px] h-[865px] md:w-[559px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg4} 
            alt="cimg4" 
            />
          </div>
        </Link>
      </div>

      <div className='w-full h-[1750px] flex flex-col items-center
      md:flex md:flex-col md:h-[1600px] md:px-40
      lg:flex lg:flex-col lg:h-[1600px] 
      xl:flex xl:flex-col xl:h-[1600px] 
      2xl:flex 2xl:flex-row 2xl:justify-around 2xl:h-[800px]
      mt-16 2xl:px-10 gap-10'>
        {/* Image 5 Chainlink 101 */}
        <Link href='https://ipfs.io/ipfs/Qmerv9Yz9uEKnaLLDqpEFpY3JAqccEMSD5jiHmY9ASwotG?filename=Chainlink101.jpg'>
          <div className='w-[613px] h-[865px] md:w-[559px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg5} 
            alt="cimg5" 
            />
          </div>
        </Link>

        {/* Image 6 - Dapp Progr */}
        <Link href='https://ipfs.io/ipfs/QmZotxZ7QT6Wsbo3ibyhxmpRSdGDCPUyvRhPcPtsSXHL4i?filename=DappProgr.jpg'>
          <div className='w-[613px] h-[865px] md:w-[559px] md:h-[789px] relative overflow-hidden group'>
            <Image className='w-full h-full object-cover scale-100'
            src={cimg6} 
            alt="cimg6" 
            />
          </div>
        </Link>
      </div>



    </section>
  )
}

export default Certificates
