import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { ImHome } from "react-icons/im";


const Maintenance: NextPage = () => {
  return (
    <div className='bg-black'>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-screen h-screen bg-black" > {/* w-fit solves the small screen media query */}
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold flex items-center justify-center pt-[300px] text-designColor'>This page is under maintenance</h1>
            <div className='flex items-center justify-center pt-[50px]'>
                <Link href="/">
                            <ImHome className='top-2 text-5xl md:text-7xl lg:text-9xl text-white' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Maintenance