import React from 'react';
import Link from 'next/link';

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
                As someone with a deep passion for science and disruptive technologies, I am constantly seeking to learn new 
                skills and stay up to date with the latest trends. My interest in the web3 ecosystem has led me to pursue various 
                educational opportunities and earn several certifications, such as in blockchain development and decentralized finance, 
                which are displayed as Soulbounded NFTs on my website. <br />
                <br />
                Soulbounded NFTs are a special type of NFT that are non-transferable and associated with educational certificates, 
                POAPs (Proof of Attendance Protocol), and other important documents, such as a DiD (Decentralized Identifier). 
                They provide a way to prove the legitimacy of the documents they represent, and by being "Soulbounded" to a wallet, 
                they can be easily traced back to their original creator. <br />
                <br />
                While I am the issuer of these NFTs and they may not have been issued by a institution, I believe they still 
                provide a valuable way to prove the authenticity and ownership of my educational achievements. This is particularly 
                relevant in the web3 space, where trust is non-essential. By using NFTs to represent my skills and knowledge, I am 
                also demonstrating my commitment to technology and transparency. <br />
                <br />
                Overall, my educational background and interest in staying at the forefront of the web3 ecosystem make me a 
                valuable asset to any team or project looking to innovate and disrupt traditional industries. <br />
                <br />
                You can see my collection of certificates on <Link href='https://opensea.io/collection/sb-certificates'> <span className='underline'>Opensea</span> </Link>
                <br />
                And review the source code on <Link href='https://polygonscan.com/address/0xbe082c1d60452b9b39f4a36883f1746ce37f332f'> <span className='underline'>Polygonscan</span> </Link>
            </p>
        </div>
    
    </section>
  )
}

export default AboutR
