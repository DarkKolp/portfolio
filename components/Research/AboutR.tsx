import React from 'react'

const AboutR = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 '
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-[27px] uppercase font-bold text-center'>
                Why I started this career.
            </h1>
            <p className='text-xl px-5 mt-16 font-medium text-textColor
            md:px-20 md:text-2xl md:leading-relaxed
            lg:px-20 lg:text-2xl
            xl:px-20 xl:text-3xl
            2xl:px-40 2xl:text-3xl'>
                As someone with a deep passion for science and disruptive technologies, I am constantly seeking to 
                learn new skills and stay up to date with the latest trends. My interest in the web3 ecosystem led 
                me to pursue various educational opportunities and earn several certifications, which are now available as NFTs on my website. <br />
                <br />
                Although I am the issuer of those NFTs, they are an important way to prove the authenticity and ownership of a document, as they are unique 
                and can be traced back to their original creator. This is particularly relevant in the web3 space, where 
                decentralization is a key principle and trust is essential. By using NFTs to represent my educational achievements, 
                I am not only showcasing my skills and knowledge, but also demonstrating my commitment to transparency and accountability. <br />
                <br />
                Overall, my educational background and interest in staying at the forefront of the web3 ecosystem make me a 
                valuable asset to any team or project looking to innovate and disrupt traditional industries.
            </p>
        </div>
    
    </section>
  )
}

export default AboutR
