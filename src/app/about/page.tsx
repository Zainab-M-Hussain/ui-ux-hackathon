import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const AboutPage = () => {
  return (
    
    <div className="bg-gray-50 min-h-screen">
        <Header/>
        <Header2/>
        <Navbar/>
      {/* About Us Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-12">
        {/* Text Block */}
        <div className="bg-teal-700 text-white p-6 md:p-10 rounded-lg flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Us - Comforty
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic designs,
            premium materials, and modern aesthetics, Comforty creates chairs
            that seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-teal-700 px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
            View collection
          </button>
        </div>
        {/* Image Block */}
        <div>
          <img
            src="./images/fp4.png" // Replace with actual image
            alt="About Us Chair"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Brand Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <span className="block text-4xl text-teal-600 mb-4">
                {feature.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

// Features Data
const features = [
  {
    icon: "🚚",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
  },
  {
    icon: "🛠️",
    title: "Made by true artisans",
    description:
      "Handcrafted crafted goods made with true passion and craftsmanship.",
  },
  {
    icon: "💲",
    title: "Unbeatable prices",
    description: "For our materials and quality, you won't find better prices.",
  },
  {
    icon: "♻️",
    title: "Recycled packaging",
    description:
      "We use 100% recyclable materials to help reduce our impact.",
  },
];

// Products Data
const products = [
  {
    name: "The Poplar suede sofa",
    price: "299.00",
    image: "https://via.placeholder.com/600x400", // Replace with actual image
  },
  {
    name: "The Dandy chair",
    price: "199.00",
    image: "./images/Photo.png",
  },
  {
    name: "The Dandy chair",
    price: "199.00",
    image: "./images/Photo (1).png",
  },
];

export default AboutPage;
