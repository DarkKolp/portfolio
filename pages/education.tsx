import { NextPage } from 'next'
import  React, { useEffect , useState } from 'react'
import Head from 'next/head'
import BannerR from '../components/Research/BannerR'
import AboutR from '../components/Research/AboutR'
import Certificates from '../components/Research/Certificates'
import ScrollBtn from '../components/General/ScrollBtnSec'




const BCResearch: NextPage = () => {
  const [nftImages, setNftImages] = useState([]);
    useEffect(() => {
            fetch("/api/hello", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.images) {
                        setNftImages(data.images);
                        console.log(data.images)
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
    }, []);
  return (
    <div>
        <Head>
        <title>Portfolio Nuno Silva</title>
        <link rel="icon" href="/Nicon.png" />
        </Head>

        <div className="font-bodyFont w-[860px] md:w-screen" > {/* w-fit solves the small screen media query */}
        {/* ============ BANNER SECTION START ============ */}
        <BannerR />
        {/* ============ BANNER SECTION END ============ */}
        <AboutR />
        <Certificates 
        images = {nftImages}/>
        </div>
        <ScrollBtn />
    </div>
  )
}



export default BCResearch
