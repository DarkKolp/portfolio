import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import BannerR from '../components/Research/BannerR'
import AboutR from '../components/Research/AboutR'
import Certificates from '../components/Research/Certifitates'
import ScrollBtnSec from '../components/General/ScrollBtnSec'


const BCResearch: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-screen" > {/* w-fit solves the small screen media query */}
        {/* ============ BANNER SECTION START ============ */}
        <BannerR />
        {/* ============ BANNER SECTION END ============ */}
        <AboutR />
        <Certificates />
        </div>
        <ScrollBtnSec />
    </div>
  )
}

export default BCResearch
