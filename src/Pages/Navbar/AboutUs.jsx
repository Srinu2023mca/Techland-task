import React from 'react';
import Image from "../../assets/about.jpg"
const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-emerald-50 to-emerald-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={Image}
            alt="Our Team"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Biccas is a forward-thinking tech company dedicated to creating powerful web solutions. 
            Our mission is to empower businesses through beautifully crafted, scalable, and responsive web applications.
          </p>
          <p className="text-gray-600">
            We believe in transparency, teamwork, and customer satisfaction. Our team consists of passionate developers, designers, and strategists who love solving real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
