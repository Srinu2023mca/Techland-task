import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Navbar/Product";
import FAQs from "./Pages/Navbar/Faqs";
import Blog from "./Pages/Navbar/Blog";
import AboutUs from "./Pages/Navbar/AboutUs";
import Login from "./Pages/Navbar/Login";
import Signup from "./Pages/Navbar/Signup";
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
