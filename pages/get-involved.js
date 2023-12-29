// pages/get-involved.js
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add logic here to handle the form submission, e.g., send it to an API
  };

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
          <form onSubmit={handleSubmit}>
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
