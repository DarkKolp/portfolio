import React from 'react'
import AboutList from './AboutList'

const AboutMe = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 md:px-40'
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-[27px] uppercase font-bold text-center'>
                Who am i?
            </h1>
            <p className='text-xl md:text-3xl font-medium md:leading-relaxed text-textColor'>
                I'm{" "}
                <span className='font-bold tracking-wider text-white'>
                    Nuno Silva
                </span>{" "}
                and I'm a self-taught Blockchain and Web3{" "}
                <span className='font-bold tracking-wider text-white'>
                    Developer and Researcher
                </span>. I have a strong scientific background, which provided me with, 
                among other things, the drive to acquire new and current knowledge, as 
                well as critical thinking and the ability to seek reliable information. 
                I have devoted thousands of hours to studying and researching Blockchain 
                technologies over the course of my nearly three-year independent research career,
                 particularly its infrastructure, DeFi, Multichain, NFTs, and Metaverse.
            </p>
            <div className='w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8'>
                <AboutList title="Web Design" />
                <AboutList title="Solidity" />
                <AboutList title="Web3.js" />
            </div>
        </div>
    
    </section>
  )
}

export default AboutMe
