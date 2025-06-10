import React from "react";
import { Cloud } from "lucide-react";
import img1 from "../assets/icons/collboration.png";
import img2 from "../assets/icons/cloudstorage.png";
import img3 from "../assets/icons/dailyanalytics.png";
const FeaturesSection = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col lg:flex-row items-center gap-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Features
              <br />
              you cab get
            </h2>
            <p className=" text-gray-600 max-w-2xl mx-auto w-96">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your project easily
            </p>
            <button className=" bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors ">
              Get Started
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6 flex items-center justify-center">
                <img src={img1} />
              </div>
              <h3 className="text-xl font-bold mb-4">Collboration Teams</h3>
              <p className="text-gray-600">
                Here you can handle projects together with team virtually
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6 flex items-center justify-center">
                <img src={img2} />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Storage</h3>
              <p className="text-gray-600">
                No nedd to worry about storage because we provide storage up to
                2 TB
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mb-6 flex items-center justify-center">
                <img src={img3} />
              </div>
              <h3 className="text-xl font-bold mb-4">Daily Analytics</h3>
              <p className="text-gray-600">
                We always provide useful informatin to make it easier for you
                every day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
