import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from "react-icons/bi";
import { cicecoLogo , UALogo } from "../../public/assets/labexp/index.js";

const Fotterlab = () => {
  return (
    
    <div className='w-full h-[380px] lg:h-[300px] py-10 bg-black'>
        {/* Division Line */}
        <div className='w-4/5 h-[2px] bg-gray-400 opacity-50 mx-auto'></div>

        <div className='w-full h-[100px] lg:h-[50px] flex justify-center pt-9'>
            <h1 className='text-3xl font-bold text-designColor'>Special Thanks</h1>
        </div>

        {/* Links - They are not 100% centered*/}
        <div className='w-full h-full lg:px-80 pt-5 bg-black flex flex-col items-center gap-7 
        lg:flex-row lg:justify-between'>
                {/* Nuno João */}
                <Link href='https://www.ciceco.ua.pt/?tabela=pessoaldetail&menu=219&user=473'>
                    <h1 className='text-white text-xl md:text-2xl font-bold pr-2 flex'>Doctor Nuno João Silva
                    <BiLinkExternal className='text-white text-2xl pl-2' /></h1>
                </Link>
                {/* Rui Silva */}
                <Link href='http://groups.ist.utl.pt/fct-phd/biotecnico/the-students/alumin/rui-oliveira-silva/'>
                    <h1 className='text-white text-xl md:text-2xl font-bold pr-2 flex'>Doctor Rui Oliveira Silva
                    <BiLinkExternal className='text-white text-2xl pl-2' /></h1>
                </Link>
                {/* Logo Ciceco */}
                <Link href='https://www.ciceco.ua.pt/'
                className=''>
                <Image className='w-[200px] h-[66px]'
                src={cicecoLogo}
                alt="Logo Ciceco" 
                />
                </Link>
                {/* Logo Ciceco */}
                <Link href='https://www.ua.pt/en/'>
                <Image className='w-[200px] h-[66px]'
                src={UALogo}
                alt="Logo UA" 
                />
                </Link>
        </div>
    </div>


  )
}

export default Fotterlab
