import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48  sm:h-56 md:h-64"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-emerald-600 font-bold text-xl mb-4">₹{price}</p>
        <button className="w-full bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
