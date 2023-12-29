
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-950 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
            <p className="text-lg">Making a Positive Impact on the World</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-gray-700 mb-4 pl-8 pr-8">
              At Akhanda Seva Samsthan, our mission is to catalyze positive transformation in underserved communities, fostering a future where every individual has the opportunity to thrive. With a commitment to holistic development, we empower through education, uplift through sustainable livelihoods, and advocate for comprehensive healthcare. Through collaborative efforts and unwavering compassion, we envision a world where every person can unfold their potential and contribute to the collective well-being of society. Join us on this journey of compassion, where each action brings us closer to a brighter, more equitable tomorrow.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ti3.jpg"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-bold mb-2">Dayakar Rayapureddy</h3>
                <p className="text-gray-700">Co-founder</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ti1.jpg"
                  alt="Team Member 2"
                />
                <h3 className="text-xl font-bold mb-2">Gowri Naidu Kolusu</h3>
                <p className="text-gray-700">Director of Programs</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ti2.jpg"
                  alt="Team Member 3"
                />
                <h3 className="text-xl font-bold mb-2">Kedhar Battina</h3>
                <p className="text-gray-700">Community Outreach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have questions or want to get involved? Reach out to us!
            </p>
            <a
              href="mailto:
              akhandasevasamsthan.ass@gmail.com"
              className="px-6 py-3 text-lg font-medium text-center text-white bg-green-950 rounded-md transition duration-300"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
