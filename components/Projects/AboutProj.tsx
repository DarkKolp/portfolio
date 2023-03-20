import React from 'react'

const AboutProj = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 px-20 2xl:px-40'
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-[27px] uppercase font-bold text-center'>
                About this experience
            </h1>
            <p className='text-3xl pt-5 lg:pt-0 md:text-3xl font-medium md:leading-relaxed text-textColor'>
                Welcome to my projects page, where I showcase some of my recent endeavors 
                in the world of blockchain and Web3. From exploring decentralized exchanges 
                to bridging personal health data to the blockchain, these projects have been a 
                great learning experience for me. Take a look and see what I've been up to!
            </p>
        </div>
    
    </section>
  )
}

export default AboutProj
