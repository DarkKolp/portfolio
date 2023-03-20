import React from 'react'

const AboutLab = () => {
  return ( <section 
    id='about'
    className='w-full h-full bg-black text-white py-28 px-10 xl:px-40'
    >

        <div className='max-w-6x1 mx-auto flex flex-col gap-6 md:gap-16'>
            <h1 className='text-4xl uppercase font-bold text-center'>
                About this experience
            </h1>
            <p className='text-3xl pt-5 lg:pt-0 md:text-3xl font-medium md:leading-relaxed text-textColor'>
            During my college years, I led a research project on the synthesis of gold nanoparticles using a regular espresso coffee machine. 
            The project aimed to promote science communication in schools by demonstrating how complex scientific concepts could be made 
            more accessible through creative experimentation. 
            <br />
            <br />
            Nanoparticles have unique properties that make them useful in a variety of applications, including medicine, electronics, 
            and environmental remediation. For example, they have been used in drug delivery systems to target specific cells and tissues, 
            in electronic devices to improve their performance and efficiency, and in water treatment to remove pollutants. 
            <br />
            <br />  
            The future potential of nanoparticles is vast, and ongoing research continues to uncover new applications and properties. 
            For example, researchers are exploring the use of nanoparticles in medicine and biosensors, as well as in biotechnology 
            and materials science.
            </p>
        </div>
    
    </section>
  )
}

export default AboutLab
