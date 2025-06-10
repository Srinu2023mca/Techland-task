import React from 'react';
import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 1999,
    image: 'https://istation.in/wp-content/uploads/2024/07/MQTQ3.jpeg',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 3499,
    image: 'https://www.gonoise.com/cdn/shop/files/1_c95e5561-4f66-413d-b143-42d31821e554.webp?v=1721392308',
  },
  {
    id: 3,
    title: 'Bluetooth Speaker',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/71x4QMTf7EL._AC_UF1000,1000_QL80_.jpg',
  },
];

const Product = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-emerald-200 via-white to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
