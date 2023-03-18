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
                Sometimes daily tools can have a good ultility in a non conventional manner. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Saepe blanditiis non, consequatur distinctio aut illo reiciendis. Id magnam dicta maiores 
                ipsa provident possimus libero totam illo! Illo sint rem porro minus nesciunt placeat doloribus tenetur. Facere 
                tenetur enim distinctio amet qui explicabo fuga aliquam veniam dolor ipsum. Consectetur, exercitationem.
            </p>
        </div>
    
    </section>
  )
}

export default AboutProj
