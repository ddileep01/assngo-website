
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import heroImg from "../public/img/p7.png";
import Image from "next/image";

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
            <h2 className="text-3xl font-bold mb-8">Our Mission and Vision</h2>
            <p className="text-gray-700 mb-4 pl-8 pr-8">
              At the heart of Akhanda Seva Samsthan lies a steadfast mission to
              uplift and empower every individual, irrespective of their
              socio-economic background. With a vision of a society where every
              person has access to education, healthcare, and growth
              opportunities, the NGO strives tirelessly to bridge the gap
              between privilege and deprivation through various programs.
              <br />
              <br />
              <ul className="list-disc text-left ml-8 lg:ml-32">
                <li>Conducting health camps</li>
                <li>
                  Held blood and food donations, and created awareness campaigns
                  in remote areas.
                </li>
                <li>
                  Distributing educational tools, materials, books, school
                  uniforms, and scholarships to needy students.
                </li>
                <li>
                  Providing necessary farming inputs to farmers and promoting
                  organic farming.
                </li>
                <li>
                  Organizing community-driven plantation programs and engaging
                  in the conservation of wildlife.
                </li>
                <li>
                  Holding welfare and development programs at remote locations
                  to create awareness among marginalized sections of society.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <div className="lg:flex">
            <div className="container mx-auto text-center md:text-left">
              <h2 className="text-3xl font-bold mb-8 md:pl-8">Our Story</h2>
              <h2 className="text-xl font-bold mb-8 md:pl-8">
                History and the Founding
              </h2>
              <p className="text-gray-700 mb-4 pl-8 pr-8">
                Origins of Akhanda Seva Samsthan The journey of Akhanda Seva
                Samsthan began with a simple yet profound idea - the belief that
                "anyone who serves the country is a true leader.”. Rayapureddy
                Purna Dayakar, president, along with his passionate friends
                Ganesh Nadipalli, Gowri Naidu Kolusu, Avinash Tammireddy, Kedhar
                Eswar, and Raghu Aratlakota, have shaped the organization, which
                is instrumental in taking its first step towards creating an
                inclusive society, driven by compassion and a sense of duty
                towards the less fortunate. Having its roots in Rajiv Gandhi
                University of Knowledge Technologies, the organization consists
                of young, dynamic, passionate, and energetic individuals who
                strive for excellence in their work. As members of the RGUKT,
                they are also responsive to the needs of RGUKTIANS, which gives
                the organization a student-friendly, student-driven, and
                student-motivated characteristic.
              </p>
              <h2 className="text-xl font-bold mb-8 md:pl-8">
                Founders and their inspirations
              </h2>
              <p className="text-gray-700 mb-4 pl-8 pr-8">
                The founders of Akhanda Seva Samsthan drew inspiration from the
                teachings of prominent leaders and visionaries who advocated for
                social justice and equality. As the President of Akhanda Seva
                Samsthan, Rayapureddy Purna Dayakar is an enthusiastic and
                passionate individual who has always been motivated by a desire
                to make a positive impact on the lives of others. This motivated
                him to seek out like-minded friends, who ultimately helped form
                Akhanda Seva Samsthan. It is their actions that speak louder
                than their words. With their commitment and endurance, the
                organization has conducted more than 50+ community-driven
                programs. In this process, they followed inclusivity,
                transparency, and integrity as their guiding values. Their
                unwavering commitment to the cause laid the foundation for a
                movement that would touch countless lives and leave an indelible
                mark on society.
              </p>
            </div>
            <div>
              <Image
                src={heroImg}
                width="616"
                height="617"
                className={"object-cover lg:mt-16"}
                alt="Our Story"
                loading="eager"
                placeholder="blur"
              />
            </div>
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
                  src="/img/team/daya-pp.jpg"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-bold mb-2">Dayakar Rayapureddy</h3>
                <p className="text-gray-700">President</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/gowri-pp.jpg"
                  alt="Team Member 2"
                />
                <h3 className="text-xl font-bold mb-2">Gowri Naidu Kolusu</h3>
                <p className="text-gray-700">Vice President</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/kedhar-pp.jpg"
                  alt="Team Member 3"
                />
                <h3 className="text-xl font-bold mb-2">Kedhar Battina</h3>
                <p className="text-gray-700">Secretary</p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/ganesh-pp.jpg"
                  alt="Team Member 4"
                />
                <h3 className="text-xl font-bold mb-2">Ganesh Nadipalli</h3>
                <p className="text-gray-700">General Secretary</p>
              </div>

              {/* Team Member 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/raghu-pp.jfif"
                  alt="Team Member 5"
                />
                <h3 className="text-xl font-bold mb-2">Raghu Aratlakota</h3>
                <p className="text-gray-700">Tresurer</p>
              </div>

              {/* Team Member 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/avinash-pp.jpg"
                  alt="Team Member 6"
                />
                <h3 className="text-xl font-bold mb-2">Avinash Tammireddy</h3>
                <p className="text-gray-700">E.C. Member</p>
              </div>

              {/* Team Member 7 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/varahalu-pp.jfif"
                  alt="Team Member 7"
                />
                <h3 className="text-xl font-bold mb-2">
                  Varahala babu killadi
                </h3>
                <p className="text-gray-700">E.C. Member</p>
              </div>

              {/* Team Member 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/abhi-pp.jfif"
                  alt="Team Member 8"
                />
                <h3 className="text-xl font-bold mb-2">Abhishek Sakiley</h3>
                <p className="text-gray-700">Publicity Designer</p>
              </div>

              {/* Team Member 8 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src="/img/team/dileep-pp.jfif"
                  alt="Team Member 8"
                />
                <h3 className="text-xl font-bold mb-2">Dileep Kumar D</h3>
                <p className="text-gray-700">Tech Lead</p>
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
