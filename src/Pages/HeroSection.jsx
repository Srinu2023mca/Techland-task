import React from "react";
import {
  Check,
  CirclePlay,
  BarChart3,
  MessageSquare,
  Database,
} from "lucide-react";
import image from "../assets/hero1.png";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-emerald-200 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We're here to
              <br />
              Increase your
              <br />
              <span className="relative inline-block">
                Productivity
                <svg
                  className="absolute -bottom-2 left-0 w-full h-4"
                  viewBox="0 0 300 20"
                  fill="none"
                >
                  <path
                    d="M1 15 Q150 5 295 15"
                    stroke="#10B981"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-lg">
              Let's make your work more organized and easy using the Taskio
              Dashboard with many of the latest features in managing work
              every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-emerald-600 transition-all transform hover:scale-105">
                Try free trial
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-emerald-500 transition-colors">
                <CirclePlay className="w-8 h-8" />
                View Demo
              </button>
            </div>
          </div>



          {/* Desktop Image with Floating Cards */}
          <div className="relative hidden lg:block">
            <img src={image} alt="Hero" className="w-full object-contain rounded-3xl" />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
