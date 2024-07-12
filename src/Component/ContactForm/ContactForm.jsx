// src/components/ContactForm.js

import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 px-6 py-10">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Contract Me</h2>
      <section className=" flex justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://i.ibb.co/s1ygy5m/file.png"
              alt="Person at computer"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 bg-blue-950 p-8 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div> 
                <label htmlFor="email" className="block text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;