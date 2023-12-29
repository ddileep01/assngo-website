// pages/contact.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Contact Form */}
        <section className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          <form className="max-w-md mx-auto">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-950 text-white px-6 py-2 rounded-md hover:bg-green-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section className="bg-green-950 text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg">
              For general inquiries, please reach out to us through the
              following contact details:
            </p>
            {/* Include your specific contact information here */}
            <p className="px-2">✉️ Email id: akhandasevasamsthan.ass@gmail.com</p>
            <p>📞 Cell: +91 97046 01395</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
