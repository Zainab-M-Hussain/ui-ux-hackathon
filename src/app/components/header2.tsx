import React from "react";
import { RiSofaFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { PiNumberCircleTwoFill } from "react-icons/pi";

const Header2 = () => {
  return (
    <div className="w-full h-16 bg-[#f0f2f3] flex items-center justify-between px-4 md:px-16">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <RiSofaFill className="w-8 h-8" />
        <h3 className="font-semibold text-xl">Comforty</h3>
      </div>

      {/* Cart Section */}
      <a href="./cart">
      <div className="flex items-center bg-white rounded-lg px-4 py-2 space-x-2">
        <CiShoppingCart className="w-6 h-6 text-[#272343]" />
        <h4 className="hidden sm:block text-[#272343]">Cart</h4>
        <PiNumberCircleTwoFill className="w-6 h-6 text-[#272343]" />
      </div></a>
    </div>
  );
};

export default Header2;
