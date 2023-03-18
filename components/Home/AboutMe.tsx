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
                Hi, I'm {" "}
                <span className='font-bold tracking-wider text-white'>
                    Nuno Silva
                </span>{" "} {"–"} {" "}
                a self-taught{" "}
                <span className='font-bold tracking-wider text-white'>
                Blockchain, Web3 Developer and Researcher
                </span> with a strong scientific background. Over the past three years, 
                I've devoted thousands of hours to studying and researching Blockchain technologies,
                 particularly their infrastructure, DeFi, Multichain, NFTs, and Metaverse. With my habilities to 
                 acquire new knowledge and critical thinking skills, I bring a unique 
                 perspective to Blockchain development and I am keen to tackle complex challenges in this exciting field.




            </p>
            <div className='w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 pt-[20px]'>
                <AboutList title="Web Design" />
                <AboutList title="Solidity" />
                <AboutList title="Web3.js" />
            </div>
        </div>
    
    </section>
  )
}

export default AboutMe
