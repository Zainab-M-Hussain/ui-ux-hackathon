import React from "react";
import Header2 from "../app/components/header2";
import Header from "../app/components/header";
import NavBar from "../app/components/navbar";
import HeroSection from '../app/components/herosection';
import FeaturedProducts from '../app/components/featuredproductss';
import Categories from '../app/components/categories';
import OurProducts from '../app/components/ourproducts';
import Footer from '../app/components/footer'
import Companies from "../app/components/companies";
import Gallery from "../app/components/gallery";
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