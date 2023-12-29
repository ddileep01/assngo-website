// pages/privacy.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PrivacyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Header */}
        <header className="bg-green-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </header>

        {/* Privacy Content */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <p className="mb-4">
            This privacy policy outlines how Akhanda Seva Samsthan collects,
            uses, and protects your personal information. By using our services,
            you agree to the terms of this privacy policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information, such as your name, email
            address, and phone number, when you use our website or interact with
            us.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect to provide and improve our
            services, communicate with you, and send you updates about our
            organization.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent. We may share
            information with trusted partners who assist us in operating our
            website and conducting our business.
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

export default PrivacyPage;
