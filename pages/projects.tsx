import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import BannerProj from '../components/Projects/BannerProj'
import AboutProj from '../components/Projects/AboutProj'
import ScrollBtn from '../components/General/ScrollBtnSec'
import Spatium from '../components/Projects/SpatiumProj'
import Metacare from '../components/Projects/metacare'
import OrderbookDEX from '../components/Projects/OrderbookDEX'
import ToBeAnnounced from '../components/Projects/ToBeAnnounced'


const Projects: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-[860px] md:w-screen" > {/* w-fit solves the small screen media query */}
        {/* ============ BANNER SECTION START ============ */}
        <BannerProj />
        <AboutProj />
        <Spatium />
        <Metacare />
        <OrderbookDEX />
        <ToBeAnnounced />
        {/* ============ BANNER SECTION END ============ */}
        </div>
        <ScrollBtn />
    </div>
  )
}

export default Projects