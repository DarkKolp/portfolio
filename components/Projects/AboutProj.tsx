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
            <p className='text-2xl px-0 font-medium text-textColor
            md:text-2xl md:leading-relaxed
            lg:text-2xl
            2xl:text-3xl'>
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
