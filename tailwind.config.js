/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Nunito'
      },
      backgroundImage:{
        "hero-image":"url('/assets/bannerImg.jpg')",
        "lab-banner":"url('/assets/labexp/labBanner.jpg')",
        "research-banner":"url('/assets/projBanner.jpg')",
        "projects-banner":"url('/assets/projectsBanner.jpg')",
        "contact-image":"url('/assets/contactimg.jpg')",
      },
      colors:{
        designColor: "#F7D449",
        textColor: "#aeaeae",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
}
