// components/aboutUs.js
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>About Us</h1>
        <p>This is the content of the About Us page.</p>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
