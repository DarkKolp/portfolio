import React from 'react'
import AboutList from './AboutList'

const AboutMe = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 px-20 2xl:px-40'
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-4xl uppercase font-bold text-center'>
                Who am i?
            </h1>
            <p className='text-3xl px-0 font-medium text-textColor
            md:text-2xl md:leading-relaxed
            lg:text-2xl
            2xl:text-3xl'>
                Hi! My name is {" "}
                <span className='font-bold tracking-wider text-white'>
                    Nuno Silva
                </span> {" "}
                and I am self-driven{" "}
                <span className='font-bold tracking-wider text-white'>
                Blockchain Developer and "Explorer"
                </span> with a solid scientific background. Acknowledging the perks of the blockchain and its underlying 
                technologies, such as smart-contracts and web3, to overcome, circumvent and even boost many limitations of 
                contemporary technologies and propel our capabilities, I’ve decided to focus and pursue researching within 
                this framework. For the past three years I’ve been researching and exploring its infrastructure – from Defi, 
                Multichain NFTs and the Metaverse. Besides the obvious hardskills that I’ve acquired throughout this quest, 
                such as …. I also acquired several softskills as I was searching to learn for new projects and concepts which 
                provided me the opportunity to interact and learn along my peers from all over the world about this exciting field.




            </p>
            <div className='pt-[50px] flex flex-col items-center justify-around 2xl:flex-row'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl uppercase font-bold text-center 2xl:mr-[175px]'>Technical skills</h1>

                    <div className='w-[700px] place-items-left grid grid-cols-2 gap-8 pt-[40px]'>
                        <AboutList title="Solidity" />
                        <AboutList title="Truffle/Hardhat" />
                        <AboutList title="Web3.js/Ether.js" />
                        <AboutList title="Javascript" />
                        <AboutList title="React" />
                        <AboutList title="Tailwind" />
                        <AboutList title="Typescript" />
                        <AboutList title="VBA" />
                    </div>
                </div>

                <div className='pt-[70px] flex flex-col 2xl:pt-0 2xl:mb-[64px]'>
                    <h1 className='text-2xl uppercase font-bold text-center 2xl:mr-[175px]'>Soft skills</h1>

                    <div className='w-[700px] place-items-left grid grid-cols-2 gap-8 pt-[40px]'>
                        <AboutList title="Adaptability" />
                        <AboutList title="Communication" />
                        <AboutList title="Curiosity" />
                        <AboutList title="Willingness to learn" />
                        <AboutList title="Ambition" />
                        <AboutList title="Focus" />
                    </div>
                </div>

            </div>
            
        </div>
    
    </section>
  )
}

export default AboutMe
