import React from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";

const ProductGrid = () => {
  // Define the image paths for the product cards
  const imagePaths = [
    "./images/wingchair.png",
    "./images/wooden chair.png",
    "./images/desk chair.png",
  ];

  return (
    <div className="p-6">
      {/* Top Heading */}
      <h2 className="text-2xl font-bold  mb-6">Top Categories</h2>

      {/* Product Cards */}
      <div className="flex justify-center gap-6">
        {imagePaths.map((imagePath, index) => (
          <div
            key={index}
            className="relative group w-72 h-96 border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={imagePath}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-2">Product Name {index + 1}</h3>
              <div className="flex justify-between items-center">
                <p className="mb-0">Price: ${20 + index * 5}</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                  <RiShoppingCart2Fill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


