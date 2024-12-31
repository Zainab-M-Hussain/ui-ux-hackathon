import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import NavBar from "../components/navbar";
import AllProducts from "../components/allproducts";
import Footer from "../components/footer";
import Subscribe from "../components/newsletter";
const Products = ()=>{
    return(
      <div>
      <Header />
      <Header2 />
      <NavBar />
      <AllProducts/>
      <Subscribe/>
      <Footer/>
      </div>
    )
}
export default Products;