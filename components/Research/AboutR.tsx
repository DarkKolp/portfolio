import React from 'react'

const AboutR = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 px-10 xl:px-40 '
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-[27px] uppercase font-bold text-center'>
              My Journey into the World of Web3
            </h1>
            <p className='text-3xl pt-5 lg:pt-0 md:text-3xl font-medium md:leading-relaxed text-textColor'>
                As someone with a deep passion for science and disruptive technologies, I am constantly seeking to 
                learn new skills and stay up to date with the latest trends. My interest in the web3 ecosystem led 
                me to pursue various educational opportunities and earn several certifications, which are displayed as NFTs on my website. <br />
                <br />
                Although I am the issuer of those NFTs, they are an important way to prove the authenticity and ownership of a document, as they are unique 
                and can be traced back to their original creator. This is particularly relevant in the web3 space, where 
                decentralization is a key principle and trust is non essential. By using NFTs to represent my educational achievements, 
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
