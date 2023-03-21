import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { wimg1 } from "../../public/assets/Projects/index.js";

const OrderbookDEX = () => {
  return (
    <section id='certificates' className='w-full h-full bg-[#0c0e0f] text-white py-10'>
      <h1 className='text-2xl md:text-2xl lg:text-3xl uppercase tracking-[10px] font-semibold text-center'>
        Orderbook Decentralized Exchange
      </h1>

      {/* VER O QUE SE PASSA COM O 2XL */}
      {/* Images display (only 2 per div)*/}
      <div className='w-full h-[650px] flex flex-col 
      md:flex md:flex-col  md:px-40
      lg:flex lg:flex-col 
      xl:flex xl:flex-col  
      2xl:flex 2xl:flex-row 
      mt-20 gap-10'>

      <p className='text-3xl pt-[00px] px-10 lg:px-0 lg:pt-0 font-medium md:leading-relaxed text-textColor'>
      This decentralized orderbook DEX project was developed as part of a training course on Ethereum programming. The project 
      is built on the Ethereum blockchain and uses smart contracts to facilitate 
      peer-to-peer trading of ERC20 tokens. The DEX consists of a simple mock token contract (ERC20) that users can interact 
      with, a DEX wallet contract to handle swaps between token pairs, and a DEX contract that uses an orderbook model to enable 
      trading using market or limit orders. It's worth noting that this project does not include a frontend, rather, it focuses 
      solely on the smart contract functionality. The trading pairs in this project are "Link"/ETH, but the DEX can be extended 
      to support other pairs as well. The project also includes Javascript tests that ensure the contracts are working as intended. <br />
      <Link
      href='https://github.com/DarkKolp/SolidityDEX'><span className='underline'>To view the code, visit my Github.</span></Link>
      </p>
        

      </div>



    </section>
  )
}

export default OrderbookDEX
