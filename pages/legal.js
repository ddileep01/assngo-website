// pages/legal.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const LegalPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Header */}
        <header className="bg-green-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Legal Information</h1>
        </header>

        {/* Legal Content */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
          <p className="mb-4">
            By accessing or using our website, you agree to abide by our terms
            of use. Please read these terms carefully before using our services.
          </p>

          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Our privacy policy outlines how we collect, use, and protect your
            personal information. By using our services, you agree to the terms
            of this privacy policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="mb-4">
            The information provided on this website is for general
            informational purposes only. We make no representations or
            warranties of any kind, express or implied, about the accuracy,
            reliability, or suitability of the information.
          </p>

          {/* Add more sections as needed */}
        </section>

        {/* Footer */}
        {/* <footer className="bg-blue-500 text-white text-center py-4">
      <p>&copy; 2023 [Your NGO Name]. All rights reserved.</p>
    </footer> */}
      </div>
      <Footer />
    </>
  );
};

export default LegalPage;
