import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Offer from '../components/Offer'
import ScrollBtn from '../components/ScrollBtn'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
      </Head>

    <div className="font-bodyFont w-fit md:w-full"> {/* w-fit solves the small screen media query */}
      {/* ============ BANNER SECTION START ============ */}
      <Banner />
      {/* ============ BANNER SECTION END ============ */}
      {/* ============ ABOUTME SECTION START ============ */}
      <AboutMe />
      {/* ============ ABOUTME SECTION END ============ */}
      {/* ============ OFFER SECTION START ============ */}
      <Offer />
      {/* ============ OFFER SECTION END ============ */}
      {/* ============ EXPERIENCE SECTION START ============ */}
      <Experience />
      {/* ============ EXPERIENCE SECTION END ============ */}
      {/* ============ CONTACT SECTION START ============ */}
      <Contact />
      {/* ============ CONTACT SECTION END ============ */}
    </div>
    <ScrollBtn />

    </div>
  );
}

export default Home
