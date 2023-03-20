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
                </span> with a solid scientific background. I'm passionate about blockchain and its underlying technologies
                 like smart contracts and web3, which can overcome many limitations of contemporary technologies and propel 
                 our capabilities. Over the past three years, I've been researching and exploring the infrastructure of blockchain, 
                 including Defi, Multichain, NFTs and the Metaverse. Along the way, I've acquired several hardskills such as proficiency 
                 in Solidity programming language, understanding of blockchain consensus mechanisms, cryptography, and experience in 
                 working with blockchain toolkits and frameworks. These skills have enabled me to develop and deploy decentralized applications (DApps) 
                 on blockchain platforms like Ethereum and other EVM chains. Additionally, I've acquired various soft 
                 skills through collaborating with my peers from all over the world on new projects and concepts, enhancing my abilities 
                 as a blockchain professional.








            </p>
            <div className='pt-[50px] flex flex-col items-center justify-around 2xl:flex-row'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl uppercase font-bold text-center 2xl:mr-[175px]'>Technical skills</h1>

                    <div className='w-[700px] place-items-left grid grid-cols-2 gap-8 pt-[40px]'>
                        <AboutList title="Solidity" />
                        <AboutList title="Truffle/Hardhat" />
                        <AboutList title="Web3.js/Ether.js" />
                        <AboutList title="IPFS" />
                        <AboutList title="Javascript" />
                        <AboutList title="Node.js" />
                        <AboutList title="React" />
                        <AboutList title="Tailwind" />
                        <AboutList title="Typescript" />
                        <AboutList title="VBA" />
                    </div>
                </div>

                <div className='pt-[70px] flex flex-col 2xl:pt-0 2xl:mb-[130px]'>
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
