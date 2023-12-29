// pages/terms.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Header */}
        <header className="bg-green-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </header>

        {/* Terms Content */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Akhanda Seva Samsthan. These terms and conditions outline
            the rules and regulations for the use of akhandasevasamsthan.org.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our website, you agree to be bound by these
            terms. If you disagree with any part of the terms, you may not
            access the website.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Privacy Policy</h2>
          <p className="mb-4">
            Our Privacy Policy outlines how we collect, use, and protect your
            personal information. By using our services, you agree to the terms
            of our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The content on this website, including text, graphics, logos, and
            images, is the property of Akhanda Seva Samsthan and is protected by
            copyright laws.
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

export default TermsPage;
