// pages/sitemap.js
import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SitemapPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white-100">
        {/* Header */}
        <header className="bg-green-950 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Sitemap</h1>
        </header>

        {/* Sitemap Content */}
        <section className="max-w-3xl mx-auto my-8 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Pages</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link href="/donation">Donate</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs and News</Link>
            </li>
            <li>
              <Link href="/validate">Validate Certificate</Link>
            </li>
            {/* Add more pages as needed */}
          </ul>

          <h2 className="text-2xl font-bold mb-4">Legal</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal">Legal Information</Link>
            </li>
            {/* Add more legal pages as needed */}
          </ul>

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

export default SitemapPage;
