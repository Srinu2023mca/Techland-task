// import React,{useState} from 'react'
// import { Check,} from 'lucide-react';
// const PricingSection = () => {
//     const [billingType, setBillingType] = useState('yearly');
//   return (
//     <>
//      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Choose Plan
//               <br />
//               That's Right For You
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Choose plan that works best for you, feel free to contact us
//             </p>

//             <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
//               <button
//                 onClick={() => setBillingType('monthly')}
//                 className={`px-6 py-2 rounded-lg transition-colors ${billingType === 'monthly' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
//               >
//                 Bill Monthly
//               </button>
//               <button
//                 onClick={() => setBillingType('yearly')}
//                 className={`px-6 py-2 rounded-lg transition-colors ${billingType === 'yearly' ? 'bg-emerald-500 text-white' : 'hover:bg-gray-50'}`}
//               >
//                 Bill Yearly
//               </button>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {/* Free Plan */}
//             <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-4">Free</h3>
//                 <p className="text-gray-600 mb-6">Have a go and test your superpowers</p>
//                 <div className="text-4xl font-bold mb-2">
//                   $<span className="text-6xl">0</span>
//                 </div>
//               </div>

//               <div className="space-y-4 mb-8">
//                 {[
//                   '2 Users',
//                   '2 Files',
//                   'Public Share & Comments',
//                   'Chat Support',
//                   'New income apps'
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="bg-emerald-500 rounded-full p-1">
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors">
//                 Signup for free
//               </button>
//             </div>

//             {/* Pro Plan - Featured */}
//             <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white transform scale-105 shadow-xl">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-4">Pro</h3>
//                 <p className="text-emerald-100 mb-6">Experiment the power of infinite possibilities</p>
//                 <div className="text-4xl font-bold mb-2">
//                   $<span className="text-6xl">8</span>
//                 </div>
//                 <div className="text-emerald-200 text-sm">Save $50 a year</div>
//               </div>

//               <div className="bg-white/10 rounded-xl p-6 mb-8">
//                 <div className="space-y-4">
//                   {[
//                     '4 Users',
//                     'All apps',
//                     'Unlimited editable exports',
//                     'Folders and collaboration',
//                     'All incoming apps'
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="bg-white rounded-full p-1">
//                         <Check className="w-3 h-3 text-emerald-500" />
//                       </div>
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="w-full bg-white text-emerald-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
//                 Go to pro
//               </button>
//             </div>

//             {/* Business Plan */}
//             <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-4">Business</h3>
//                 <p className="text-gray-600 mb-6">Unveil new superpowers and join the Design League</p>
//                 <div className="text-4xl font-bold mb-2">
//                   $<span className="text-6xl">16</span>
//                 </div>
//               </div>

//               <div className="space-y-4 mb-8">
//                 {[
//                   'All the features of pro plan',
//                   'Account success Manager',
//                   'Single Sign-On (SSO)',
//                   'Co-conception pogram',
//                   'Collaboration-Soon'
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="bg-emerald-500 rounded-full p-1">
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors">
//                 Goto Business
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   )
// }

// export default PricingSection

import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [billingType, setBillingType] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "free",
      title: "Free",
      price: 0,
      description: "Have a go and test your superpowers",
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      button: "Signup for free",
      gradient: false,
    },
    {
      id: "pro",
      title: "Pro",
      price: 8,
      description: "Experiment the power of infinite possibilities",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      saveNote: "Save $50 a year",
      button: "Go to pro",
      gradient: true,
    },
    {
      id: "business",
      title: "Business",
      price: 16,
      description: "Unveil new superpowers and join the Design League",
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon",
      ],
      button: "Goto Business",
      gradient: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-bl from-emerald-200 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Plan
            <br />
            That's Right For You
          </h2>
          <p className="text-gray-600 mb-8">
            Choose plan that works best for you, feel free to contact us
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setBillingType("monthly")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                billingType === "monthly"
                  ? "bg-emerald-100 text-emerald-700"
                  : "hover:bg-gray-50 text-gray-500"
              }`}
            >
              Bill Monthly
            </button>
            <button
              onClick={() => setBillingType("yearly")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                billingType === "yearly"
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-gray-50 text-gray-500"
              }`}
            >
              Bill Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
                plan.gradient
                  ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl"
                  : "bg-white text-gray-800 hover:shadow-lg"
              } ${
                selectedPlan === plan.id
                  ? "ring-4 ring-emerald-400 scale-105"
                  : ""
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p
                  className={`mb-4 ${
                    plan.gradient ? "text-emerald-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="text-4xl font-semibold  mb-2">
                  <span
                    className={`${
                      plan.gradient ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {" "}
                    ${" "}
                  </span>
                  <span className="text-6xl font-bold">
                    {billingType === "monthly" ? plan.price : plan.price * 10}
                  </span>
                </div>
                {plan.saveNote && (
                  <div className="">
                    <span className="bg-emerald-300 text-white text-sm  p-2 rounded">
                      {plan.saveNote}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div
                className={`rounded-xl p-6 mb-6 ${
                  plan.gradient ? "bg-white text-emerald-600" : "bg-emerald-50"
                }`}
              >
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full bg-emerald-700`}>
                        <Check className={`w-3 h-3 text-white font-bold`} />
                      </div>
                      <span className="font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mt-5 ${
                    plan.gradient
                      ? "bg-emerald-600 text-white hover:bg-gray-100"
                      : "bg-white shadow text-emerald-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
