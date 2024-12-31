import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Sp = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <Navbar />
      <SingleProduct />
      <Footer />
    </div>
  );
};

// SingleProduct Component
const SingleProduct = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="./images/photo (1).png" // Replace with actual image link
            alt="Library Stool Chair"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Library Stool Chair
          </h1>
          <span className="inline-block bg-green-100 text-green-600 font-semibold px-3 py-1 rounded mb-4">
            $20.00 USD
          </span>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <section className="mt-16 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <a href="#" className="text-blue-500 hover:underline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg shadow-md mb-4 h-36 w-full object-cover"
              />
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <span className="text-gray-600">${product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Featured products data
const featuredProducts = [
  {
    name: "Library Stool Chair",
    price: "99",
    image: "./images/photo.png", // Replace with actual image
  },
  {
    name: "Library Stool Chair",
    price: "99",
    image: "./images/fp4.png",
  },
  {
    name: "Library Stool Chair",
    price: "99",
    image: "./images/fp3.png",
  },
  {
    name: "Library Stool Chair",
    price: "99",
    image: "./images/fp2.png",
  },
  {
    name: "Library Stool Chair",
    price: "99",
    image: "./images/fp1.png",
  },
];

export default Sp;
