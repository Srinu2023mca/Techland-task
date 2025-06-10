import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!contactForm.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(contactForm.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!contactForm.message) {
      newErrors.message = "Message is required";
    } else if (contactForm.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle successful form submission
      alert("Demo request submitted successfully!");
      setContactForm({ email: "", message: "" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!newsletterEmail) {
      newErrors.newsletter = "Email is required";
    } else if (!validateEmail(newsletterEmail)) {
      newErrors.newsletter = "Please enter a valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Successfully subscribed to newsletter!");
      setNewsletterEmail("");
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold text-emerald-500 mb-4">
                Biccas
              </div>
              <p className="text-gray-400 mb-6">
                Get started noew try our product
              </p>

              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (errors.newsletter) {
                      setErrors({ ...errors, newsletter: "" });
                    }
                  }}
                  placeholder="Enter your email here"
                  className={`w-full px-4 py-3 rounded-full bg-gray-800 border ${
                    errors.newsletter ? "border-red-500" : "border-gray-700"
                  } text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors pr-12`}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {errors.newsletter && (
                <p className="text-red-400 text-sm mt-1">{errors.newsletter}</p>
              )}
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help centre
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Account information
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Help and Solution Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Help and Solution</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Talk to support
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Support docs
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  System status
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Covid responde
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Update
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Beta test
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing product
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2022 Biccas Inc. Copyright and rights reserved
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms and Conditions
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
