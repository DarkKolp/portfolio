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
      <div className='w-full h-[400px] flex flex-col 
      md:flex md:flex-col  md:px-40
      lg:flex lg:flex-col 
      xl:flex xl:flex-col  
      2xl:flex 2xl:flex-row 
      mt-20 gap-10'>

      <p className='text-3xl pt-[00px] px-10 lg:px-0 lg:pt-0 font-medium md:leading-relaxed text-textColor'>
        A set of smart contracts developed during on Solidity 201 course, those included an ERC20 mock token, to be able to interact with the DEX.
        The enchange contract, enabling the swaps between Ether and the mock ERC20 token and a contract wallet to bridge those swaps.
        This was a good project where I learn a lot about professional smart contract test and development, using tools like Truffle, Ganache, etc...
      </p>
        

      </div>



    </section>
  )
}

export default OrderbookDEX
