import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. Items must be unused and in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3–7 business days depending on your location.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support through chat and email.",
  },
  {
    question: "Is there a warranty on products?",
    answer:
      "Yes, all products come with a 1-year warranty for manufacturing defects.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
