// pages/contact.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xgegykrr");
  if (state.succeeded) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Navbar />
          <div className="bg-green-950 p-6 rounded-lg shadow-md sm:my-8 lg:my-24">
            <p className="text-2xl font-semibold text-white py-8 text-center">
              Thanks for submitting the form, <br/> we'll get back to you soon!
            </p>
            <a
              href="/contact"
              className="block w-full bg-white text-center hover:bg-white text-green-950 font-semibold py-2 px-4 rounded mt-4"
            >
              Back
            </a>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Contact Form */}
        <section className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
          {/* <form className="max-w-md mx-auto">
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
          </form> */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
            <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                required
                placeholder="Your full name"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />
              <ValidationError
                prefix="FullName"
                field="fullname"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Leave your message here"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-900 focus:border-green-900 block w-full"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-green-950 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-900"
            >
              Send Message
            </button>
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
            <p className="px-2">
              ✉️ Email id: akhandasevasamsthan.ass@gmail.com
            </p>
            <p>📞 Cell: +91 97046 01395</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
