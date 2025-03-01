// Contact.js
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      {/* Main Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
          {/* Contact Information - Right Side */}
          <div className="space-y-8">

<div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-indigo-600">How to Connect with Us</h1>
    <p className="mt-4 text-gray-700">
      Whether you have a specific project in mind or need guidance on the best IT strategies for your business, our team is ready to assist you.
    </p>
  </div>
  {/* Address Section */}
  <div className="bg-white p-6 shadow-lg rounded-lg flex items-start space-x-4">
    <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
    <div>
      <h2 className="text-lg font-semibold text-indigo-600">Registered Address</h2>
      <p className="mt-4 text-gray-600">
        301/302, 3rd Floor, Saket Callipolis, <br />
        Sarjapur - Marathahalli Road, <br />
        Doddakannelli, Bengaluru, Karnataka 560035
      </p>
    </div>
  </div>

  {/* Email Section */}
  <div className="bg-white p-6 shadow-lg rounded-lg flex items-start space-x-4">
    <FaEnvelope className="text-indigo-600 text-2xl" />
    <div>
      <h2 className="text-lg font-semibold text-indigo-600">Our Email</h2>
      <p className="text-gray-600">info@b2yinfy.com</p>
    </div>
  </div>

  {/* Phone Section */}
  <div className="bg-white p-6 shadow-lg rounded-lg flex items-start space-x-4">
    <FaPhoneAlt className="text-indigo-600 text-2xl" />
    <div>
      <h2 className="text-lg font-semibold text-indigo-600">Our Phone Number</h2>
      <p className="text-gray-600">+91 8886123105</p>
    </div>
  </div>
</div>
        {/* Get in Touch Form - Left Side */}
        <div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              {/* Subject Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Name and Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 text-gray-700">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-left">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
