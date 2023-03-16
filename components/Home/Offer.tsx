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
            <h1 className='text-[25px] uppercase tracking-[6px] font-bodyFont font-bold text-center text-white'>
                What I can offer.
            </h1>
            <div className='w-full py-20 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <OfferCard 
                    title="Branding"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    Icon={RxCopy}
                />
                <OfferCard 
                    title="Branding"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    Icon={SiAntdesign}
                />
                <OfferCard 
                    title="Branding"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    Icon={HiAcademicCap}
                />
                <OfferCard 
                    title="Branding"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    Icon={FaConnectdevelop}
                />
            </div>
        </div>
    </section>
  )
}

export default Offer
