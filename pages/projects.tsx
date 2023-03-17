import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Banner from '../components/Labexp/BannerLab'


const Projects: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-screen" > {/* w-fit solves the small screen media query */}
        {/* ============ BANNER SECTION START ============ */}
        <Banner />
        {/* ============ BANNER SECTION END ============ */}
        </div>
    </div>
  )
}

export default Projects