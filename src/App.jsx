// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./App.css";
// import Home from "./components/Home";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Navbar/Product";
import FAQs from "./pages/Navbar/Faqs";
import Blog from "./pages/Navbar/Blog";
import AboutUs from "./Pages/Navbar/AboutUs";
import Login from "./pages/Navbar/Login";
import Signup from "./pages/Navbar/Signup";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
