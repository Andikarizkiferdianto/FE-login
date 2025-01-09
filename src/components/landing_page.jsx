import React from "react";
import Appstore from "./AppStore/Appstore"
import Banner from "./Banner/Banner"
import CoverBanner from "./CoverBanner/CoverBanner"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import DarkMode from "./Navbar/DarkMode"
import Services from "./Services/Services"
import Testimonial from "./Testimonial/Testimonial"
import AOS from "aos";
import "aos/dist/aos.css";

const Landing_Page = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <DarkMode/>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <CoverBanner />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing_Page;