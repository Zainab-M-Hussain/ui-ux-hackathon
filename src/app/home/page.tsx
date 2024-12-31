import React from "react";
import Header2 from "../components/header2";
import Header from "../components/header";
import NavBar from "../components/navbar";
import HeroSection from '../components/herosection';
import FeaturedProducts from '../components/featuredproductss';
import Categories from '../components/categories';
import OurProducts from '../components/ourproducts';
import Footer from '../components/footer'
import Companies from "../components/companies";
import Gallery from "../components/gallery";
const HomePage = ()=>{
    return(
      <div>
      <Header />
      <Header2 />
      <NavBar />
      <HeroSection />
      <Companies />
      <FeaturedProducts />
      <Categories />
      <Gallery/>
      <OurProducts />
      <Footer />

      </div>
    )
}
export default HomePage