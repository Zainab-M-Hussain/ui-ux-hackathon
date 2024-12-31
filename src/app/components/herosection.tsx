import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100 w-3/4 ml-44">
      <div className="max-w-lg">
        <p>welcome to chairy</p>
        <h1 className="text-4xl font-bold mb-4">Best Furniture </h1>
        <h1 className="text-4xl font-bold mb-4"> Collection For Your </h1>
        <h1 className="text-4xl font-bold mb-4"> Interior</h1>
        <button className="flex mt-4 px-6 py-2 bg-[#007850] text-white rounded-lg hover:bg-[#272343]">
          Shop Now <FaArrowRightLong className='pt-2 pl-2 text-lg' />
        </button>
      </div>
      <div>
        <img
          src="./images/hero.png"
          alt="Chair"
          className="rounded-lg w-[400px] h-[430px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
