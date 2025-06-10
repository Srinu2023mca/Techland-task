// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold text-emerald-500">Biccas</div>
//             <nav className="hidden md:flex space-x-8">
//               <Link to="/" className="text-gray-900 hover:text-emerald-500 transition-colors">Home</Link>
//               <Link to="/product" className="text-gray-500 hover:text-emerald-500 transition-colors">Product</Link>
//               <Link to="/faq" className="text-gray-500 hover:text-emerald-500 transition-colors">FAQ</Link>
//               <Link to="/blog" className="text-gray-500 hover:text-emerald-500 transition-colors">Blog</Link>
//               <Link to="/about" className="text-gray-500 hover:text-emerald-500 transition-colors">About Us</Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//               <Link to="/login" className="text-gray-500 hover:text-emerald-500 transition-colors">Login</Link>
//               <Link to="/signup" className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or any icon lib

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to='/' className="text-2xl font-bold text-emerald-500">Biccas</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/product" className="text-gray-500 hover:text-emerald-500 transition-colors">Product</Link>
            <Link to="/faq" className="text-gray-500 hover:text-emerald-500 transition-colors">FAQ</Link>
            <Link to="/blog" className="text-gray-500 hover:text-emerald-500 transition-colors">Blog</Link>
            <Link to="/about" className="text-gray-500 hover:text-emerald-500 transition-colors">About Us</Link>
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-500 hover:text-emerald-500 transition-colors">Login</Link>
            <Link to="/signup" className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-900 hover:text-emerald-500">Home</Link>
          <Link to="/product" className="block text-gray-600 hover:text-emerald-500">Product</Link>
          <Link to="/faq" className="block text-gray-600 hover:text-emerald-500">FAQ</Link>
          <Link to="/blog" className="block text-gray-600 hover:text-emerald-500">Blog</Link>
          <Link to="/about" className="block text-gray-600 hover:text-emerald-500">About Us</Link>
          <Link to="/login" className="block text-gray-600 hover:text-emerald-500">Login</Link>
          <Link to="/signup" className="block bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
