import React from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'library stool chair',
      price: '$120',
      imgSrc: './images/fp1.png',
    },
    {
      id: 2,
      name: 'library stool chair',
      price: '$140',
      imgSrc: './images/fp2.png',
    },
    {
      id: 3,
      name: 'library stool chair',
      price: '$160',
      imgSrc: './images/fp3.png',
    },
    {
    id: 4,
    name: 'library stool chair',
    price: '$120',
    imgSrc: './images/fp4.png',
  },
 
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="mt-4">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors">
                  {product.name}
                </h3>
                <div className='flex gap-36'>
                  {/* Price */}
                <p className="text-gray-600 font-medium mt-1">{product.price}</p>
                {/* Add to Cart Button */}
                <button
                  className="mt-1   px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                >
                  <RiShoppingCart2Fill  />
                  
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

