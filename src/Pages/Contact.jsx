import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "../assets/icons/aboutus.png";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpg";
import User4 from "../assets/user4.jpg";
const Contact= () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactForm, setContactForm] = useState({
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [errors, setErrors] = useState({});

  const testimonials = [
    {
      text: "I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even i can pay a short time 😊",
      author: "Aria Zinanrio",
      avatar: User1,
    },
    {
      text: "Amazing product! It has completely transformed how I manage my finances. The interface is intuitive and the features are exactly what I needed.",
      author: "Sarah Johnson",
      avatar: User2,
    },
    {
      text: "Best financial app I've ever used. The customer support is outstanding and the app never fails to deliver on its promises.",
      author: "Mike Chen",
      avatar: User3,
    },
  ];

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                People are Saying
                <br />
                About DoWhith
              </h2>
              <p className="text-gray-300 mb-8">
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>

              <div className="mb-8">
                <i className="text-5xl font-bold text-gray-600  ">//</i>
                <blockquote className="text-lg text-gray-300 my-6">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                <cite className="text-white font-medium">
                  - {testimonials[currentTestimonial].author}
                </cite>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full border-2 cursor-pointer ${
                        index === currentTestimonial
                          ? "border-emerald-500"
                          : "border-gray-600"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    >
                      <div className="w-full h-full bg-gray-400 rounded-full">
                        <img
                          src={testimonials[index].avatar}
                          alt={`Avatar of ${testimonials[index].author}`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <img
                  src={Icon}
                  alt="Contact Icon"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Get Started</h3>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, email: e.target.value });
                      if (errors.email) {
                        setErrors({ ...errors, email: "" });
                      }
                    }}
                    placeholder="Enter your email..."
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => {
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      });
                      if (errors.message) {
                        setErrors({ ...errors, message: "" });
                      }
                    }}
                    placeholder="What are you say ?"
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
                >
                  Request Demo
                </button>

                <p className="text-right text-sm text-gray-400">
                  or{" "}
                  <button
                    type="button"
                    className="text-emerald-400 hover:underline"
                  >
                    Start Free Trial
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
