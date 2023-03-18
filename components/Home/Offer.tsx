import React from 'react'
import OfferCard from './OfferCard'
import { RxCopy } from "react-icons/rx"
import { SiAntdesign } from "react-icons/si"
import { FaChartPie, FaConnectdevelop } from "react-icons/fa"
import { HiAcademicCap } from "react-icons/hi"

const Offer = () => {
  return (
    <section id='offers' className='bg-[#0c0e0f] text-white py-28'>
        <div>
            <h1 className='text-3xl uppercase tracking-[6px] font-bodyFont font-bold text-center text-white'>
                What I can offer.
            </h1>
            <div className='w-full text-l py-20 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <OfferCard 
                    title="Web3 Development"
                    subtitle="Build dApps and work with blockchain-based protocols. Specialize in Ethereum development.
                    "
                    Icon={FaConnectdevelop}
                />
                <OfferCard 
                    title="Strategist"
                    subtitle="Develop Blockchain strategies for businesses. Analyze market trends and provide innovative solutions.
                    "
                    Icon={SiAntdesign}
                />
                <OfferCard 
                    title="Blockchain Research"
                    subtitle="Independent researcher with a focus on Blockchain infrastructure, NFTs, DeFi and more.
                    "
                    Icon={HiAcademicCap}
                />
                <OfferCard 
                    title="Advisory"
                    subtitle="Provide guidance and advice on Blockchain projects. Analyze complex systems and propose solutions.
                    "
                    Icon={RxCopy}
                />
            </div>
        </div>
    </section>
  )
}

export default Offer
