import React from "react";
import {
  Check,
  MessageCircle,
  CircleCheck,
  ChartNoAxesColumn,
  Image,
} from "lucide-react";
import Benefit from "../assets/benefit.png";
import Profile from "../assets/user4.jpg"; // Assuming you have a profile image
const BenifetsSection = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-tl from-emerald-200 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                What Benefit Will
                <br />
                You Get
              </h2>
              <div className="space-y-6">
                {[
                  "Free Consulting With Expert Saving Money",
                  "Online Banking",
                  "Investment Report Every Month",
                  "Saving Money For The Future",
                  "Online Transaction",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-emerald-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative hidden lg:block">
                <div className=" rounded-2xl ">
                  <img
                    src={Benefit}
                    alt="Benefit"
                    className="w-[400px] h-[500px] rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 -left-32 rounded-lg bg-white shadow p-2 flex items-center">
                    <div className="flex items-center gap-4 ">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                          <img
                            src={Profile}
                            className="w-full h-full object-cover rounded-full"
                            alt="Profile"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">Amanda Young</div>
                          <div className="text-sm text-gray-500">
                            Expert Saving Money
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto bg-emerald-500 rounded-full p-2">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/3 -right-12 p-2 bg-white rounded-lg shadow">
                    <div className="text-sm text-gray-500">Total Income</div>
                    <div className="text-xl font-bold flex items-center gap-2">
                      <span>$245.00</span>
                      <ChartNoAxesColumn className="text-emerald-600" />
                    </div>
                  </div>

                  <div className="absolute -bottom-4 right-52 bg-white rounded-lg p-4 flex items-center gap-3 w-64 shadow">
                    <CircleCheck className=" text-emerald-500" />
                    <span className="text-gray-700">
                      Money Transfer Successful
                    </span>
                  </div>
                  <div className="absolute top-1/2 -left-15 bg-emerald-600 rounded-lg p-2 flex items-center rotate-12 ">
                    <Image className=" text-white" />
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

export default BenifetsSection;
