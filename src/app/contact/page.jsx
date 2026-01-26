"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setPhone(onlyNums.slice(0, 10));
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-card dark:bg-gray-800 shadow-md rounded-lg p-8 transition-colors duration-300">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold ">
            Contact Me
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 mt-1">
            Ask Me A Question
          </p>
        </div>

        {/* Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="d6ac769c-5a5b-48f9-b765-bde4e4277028"
          />

          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-border dark:border-gray-600 rounded-md bg-card dark:bg-gray-700 text-foreground dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-border dark:border-gray-600 rounded-md bg-card dark:bg-gray-700 text-foreground dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          <input
            type="text"
            name="Address"
            placeholder="Your Address"
            required
            className="w-full px-4 py-2 border border-border dark:border-gray-600 rounded-md bg-card dark:bg-gray-700 text-foreground dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          <input
            type="tel"
            name="Phone Number"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            required
            maxLength="10"
            className="w-full px-4 py-2 border border-border dark:border-gray-600 rounded-md bg-card dark:bg-gray-700 text-foreground dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          />

          <textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border border-border dark:border-gray-600 rounded-md bg-card dark:bg-gray-700 text-foreground dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block border-2 border-[#b74b4b] text-[#b74b4b] px-7 py-3 rounded-full font-semibold tracking-wide hover:bg-[#b74b4b] hover:text-black transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <span id="msg" className="block text-center text-sm text-green-600 mt-4"></span>
      </div>
    </div>
  );
}
