import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Banner from '../components/Labexp/BannerLab'
import AboutLab from '../components/Labexp/AboutLab'
import ExperienceLab from '../components/Labexp/ExperienceLab'
import ScrollBtn from '../components/General/ScrollBtnSec'
import Fotterlab from '../components/Labexp/Fotterlab'

const Labexp: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-[860px] md:w-full " > {/* w-fit solves the small screen media query */}
        {/* ============ BANNER SECTION START ============ */}
        <Banner />
        {/* ============ BANNER SECTION END ============ */}
        <AboutLab />
        <ExperienceLab />
        <Fotterlab />
        </div>
        <ScrollBtn />
    </div>
  )
}

export default Labexp
