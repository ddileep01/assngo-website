// pages/get-involved.js
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useForm, ValidationError } from '@formspree/react';

const GetInvolved = () => {
  const [state, handleSubmit] = useForm("xgegykrr");
  if (state.succeeded) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Navbar />
          <div className="bg-green-950 p-6 rounded-lg shadow-md sm:my-8 lg:my-24">
            <p className="text-2xl font-semibold text-white py-8 text-center">
              Thanks for your interest, <br/> we'll get back to you soon!
            </p>
            <a
              href="/get-involved"
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
  // const [formData, setFormData] = useState({
  //   Name: "",
  //   Email: "",
  //   Message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // You can add logic here to handle the form submission, e.g., send it to an API
  // };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Header */}
        <header className="bg-green-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Get Involved</h1>
          <p className="mt-2">Join us in making a difference!</p>
        </header>

        {/* Ways to Get Involved */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Each involvement option */}
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p>
                Join our team of volunteers and make a positive impact in the
                community.
              </p>
            </div>

            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Donate</h3>
              <p>
                Support our initiatives by making a financial contribution.
                Every little bit helps!
              </p>
            </div>

            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <p>
                Attend and participate in our events. Stay connected and be part
                of the change.
              </p>
            </div>
            {/* Add more involvement options as needed */}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {/* <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows="3"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="How would you like to get involved?"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none"
            >
              Get Involved
            </button>
          </form> */}
          <form onSubmit={handleSubmit}>
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
                placeholder="How would you like to get involved?"
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
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
