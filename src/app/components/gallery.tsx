import React from 'react';

const Gallery = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-8">
      {/* Vertical Text */}
      <div
  className="text-xl font-bold text-gray-700"
  style={{ writingMode: 'vertical-lr' }}
>
  Explore New And Popular Styles
</div>

      {/* Left Rectangle Image */}
      <div className="flex-shrink-0">
        <img
          src="./images/desk chair.png"
          alt="Rectangle"
          className="h-80 w-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Square Images */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="./images/wooden chair.png"
          alt="Square 1"
          className="h-36 w-36 object-cover rounded-lg shadow-md"
        />
        <img
          src="./images/fp3.png"
          alt="Square 2"
          className="h-36 w-36 object-cover rounded-lg shadow-md"
        />
        <img
          src="./images/fp2.png"
          alt="Square 3"
          className="h-36 w-36 object-cover rounded-lg shadow-md"
        />
        <img
          src="./images/fp1.png"
          alt="Square 4"
          className="h-36 w-36 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Gallery;
