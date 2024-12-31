import React from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const ContactPage = () => {
  return (
    <div>
    <Header/>
    <Header2/>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto p-6 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-500 ">
          For more information about our products & services, please feel free
          to drop us an email.
        </p>

    <p className="text-center text-gray-500 mb-10"> Our staff is always there to help you out. Do not
    hesitate!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 mt-10 ml-16">
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-blue-500">📍</span>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-lg">Address</h3>
                <p className="text-gray-500">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-blue-500">📞</span>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-lg">Phone</h3>
                <p className="text-gray-500">
                  Mobile: +1 841 456-6789 <br />
                  Hotline: +1 841 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-blue-500">⏰</span>
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold text-lg">
                  Working Time
                </h3>
                <p className="text-gray-500">
                  Monday–Friday: 9:00–20:00 <br />
                  Saturday–Sunday: 9:00–21:00
                </p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about..."
                  rows={4}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-6">
          <div>
            <span className="text-2xl">🏆</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              High Quality
            </h3>
            <p className="text-gray-500 text-sm">
              Crafted from top materials
            </p>
          </div>
          <div>
            <span className="text-2xl">🛡️</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              Warranty Protection
            </h3>
            <p className="text-gray-500 text-sm">Over 2 years</p>
          </div>
          <div>
            <span className="text-2xl">⏱️</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              24 / 7 Support
            </h3>
            <p className="text-gray-500 text-sm">Dedicated support</p>
          </div>
        </div>
      </section>
    </div>
   <Footer/> 
    </div>
  );
};

export default ContactPage;
