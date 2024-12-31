import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between bg-[#272343] text-white px-4 md:px-16">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FaCheck />
        <p className="text-sm hidden sm:block">Free shipping on all orders over $50</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span>Eng</span>
          <RiArrowDropDownLine className="w-6 h-6" />
        </div>
        <span className="hidden sm:block"><a href="./FAQs">FAQs</a></span>
        <div className="flex items-center">
          <BsExclamationCircle className="w-5 h-5 mr-1" />
          <span className="hidden sm:block">Need Help</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
;