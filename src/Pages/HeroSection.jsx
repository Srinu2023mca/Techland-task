import React from "react";
import {
  Check,
  CirclePlay,
  BarChart3,
  MessageSquare,
  Database,
} from "lucide-react";
import image from "../assets/hero.png";
const HeroSection = () => {
  return (
    <>
      <section className="py-12 lg:py-20 bg-gradient-to-br from-emerald-200 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We're here to
                <br />
                Increase your
                <br />
                <span className="relative">
                  Productivity
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-4"
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
              <p className="text-lg text-gray-600 max-w-lg">
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest features in managing work
                every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-all transform hover:scale-105">
                  Try free trial
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-emerald-500 transition-colors">
                  <CirclePlay className="w-8 h-8" />
                  View Demo
                </button>
              </div>
            </div>

            {/* Hero Image with Cards */}
            <div className="relative ">
              <div className="py-8 px-32 ">
                {/* <div> */}

                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl relative overflow-hidden ">
                  <img src={image} className="" />
                </div>
                <div className="absolute bottom-2 right-46 bg-red-300 rounded-lg p-3 rotate-12">
                  <MessageSquare className="text-2xl text-white"></MessageSquare>
                </div>
                <div className="absolute top-32 left-16 bg-purple-700 rounded-lg rotate-12 p-2">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-12 right-32 transform translate-x-1/2 bg-orange-300 rounded-lg rotate-12 p-3">
                  <Database className="text-2xl text-white"></Database>
                </div>
                {/* </div> */}
                {/* Income card */}
                <div className="absolute bottom-16 left-32 transform -translate-x-1/2 bg-white rounded-lg p-2 shadow-lg w-42">
                  <div className="text-sm text-gray-500">Total Income</div>

                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold">$245.00</div>
                    <BarChart3 className="w-4 h-4 text-emerald-500" />
                    <div className="text-xs text-emerald-500">+12%</div>
                  </div>
                </div>

                {/* Send money card */}
                <div className="absolute top-12 -left-2 bg-white rounded-lg p-1 shadow-lg w-52">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Enter amount</div>
                      <div className="text-lg font-bold">$450.00</div>
                    </div>
                    <button className="bg-emerald-500 text-white px-4 py-1 rounded-3xl mt-2 text-sm">
                      Send
                    </button>
                  </div>
                  <hr className="text-black/30" />
                </div>

                {/* Credit card */}
                <div className="absolute right-24 bottom-1 transform translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-4 rounded-lg w-42 h-52 rotate-12">
                  <div className="flex flex-col align-center justify-around h-full">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 bg-white/80 rounded-full"></div>
                      <div className="relative top-0 -left-4 w-12 h-12 bg-white/80 rounded-full"></div>
                    </div>
                    <div className="">
                      <div className="text-xs">Credit Card</div>
                      <div className="text-sm">**** 1234</div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="w-12 h-8 bg-white/60 rounded-sm"></div>
                      <div className="text-xs mt-2">09/25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
