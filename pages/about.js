
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
                <p className="text-gray-700">President</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ti1.jpg"
                  alt="Team Member 2"
                />
                <h3 className="text-xl font-bold mb-2">Gowri Naidu Kolusu</h3>
                <p className="text-gray-700">Vice President</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ti2.jpg"
                  alt="Team Member 3"
                />
                <h3 className="text-xl font-bold mb-2">Kedhar Battina</h3>
                <p className="text-gray-700">Secretary</p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://media.licdn.com/dms/image/D5603AQGnNZu1JM-_6g/profile-displayphoto-shrink_400_400/0/1692685005692?e=1714608000&v=beta&t=DbJuPTn0XXv7Y79aLOUya8le2HoU-K89WJGFpS8UCWI"
                  alt="Team Member 4"
                />
                <h3 className="text-xl font-bold mb-2">Raghu Aratlakota</h3>
                <p className="text-gray-700">Tresurer</p>
              </div>

              {/* Team Member 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://media.licdn.com/dms/image/D5603AQHuPqqpH5rzwQ/profile-displayphoto-shrink_400_400/0/1701173601748?e=1714608000&v=beta&t=-yJ35SPaBm59ERS6AWsjtBsX7FgNEzgpTkRuGkAnWv8"
                  alt="Team Member 5"
                />
                <h3 className="text-xl font-bold mb-2">Ganesh Nadipalli</h3>
                <p className="text-gray-700">General Secretary</p>
              </div>

              {/* Team Member 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://media.licdn.com/dms/image/D5603AQGNoyzJzAf3bQ/profile-displayphoto-shrink_400_400/0/1699251044548?e=1714608000&v=beta&t=Jw54AnGjy_g1CWCEvNieWf5n1ZsWVQ-Eqb64vt30huY"
                  alt="Team Member 6"
                />
                <h3 className="text-xl font-bold mb-2">Varahala babu killadi</h3>
                <p className="text-gray-700">E.C. Member</p>
              </div>

              {/* Team Member 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://i.ibb.co/4ZWKJv8/417230578-882755593587658-3502538010855300177-n.jpg"
                  alt="Team Member 7"
                />
                <h3 className="text-xl font-bold mb-2">Avinash Tammireddy</h3>
                <p className="text-gray-700">E.C. Member</p>
              </div>

              {/* Team Member 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://media.licdn.com/dms/image/C4D03AQERJL3GGg1lLQ/profile-displayphoto-shrink_400_400/0/1623905835312?e=1714608000&v=beta&t=3OoqOUjiSTArf1ezZwj9vvyaCbncmVI36xoh6wmsyQE"
                  alt="Team Member 8"
                />
                <h3 className="text-xl font-bold mb-2">Abhishek Sakiley</h3>
                <p className="text-gray-700">Publicity Designer</p>
              </div>

              {/* Team Member 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="https://media.licdn.com/dms/image/D5603AQG-yf6y9Cj47A/profile-displayphoto-shrink_100_100/0/1675765715464?e=1714608000&v=beta&t=qduEwcm0OpcIoSGgn_zRwMxzG3JWhbyBoUx14frEXy0"
                  alt="Team Member 8"
                />
                <h3 className="text-xl font-bold mb-2">Dileep Kumar D</h3>
                <p className="text-gray-700">Technical Coordinator</p>
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
              className="px-6 py-3 text-lg font-medium text-center text-white bg-green-950 hover:bg-green-900 rounded-md transition duration-300"
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
