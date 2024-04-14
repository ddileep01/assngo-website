import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
// import blogsList from "../blogList";
const blogsList = [
  {
    id: 1,
    title: "Plantation Program",
    image: "/img/gallery/gi10.jpg",
    description: `
    Feel how difficult it would be to breathe if you carried a cylinder of oxygen on your back. This could be what we face shortly with rising global warming resulting in climate change which would impact you and me.
    So, to prevent that scenario, we are taking action by conducting community-driven plantations. We, at Akhanda Seva Sansthan, have planted 80 plants with the active participation of 20+ volunteers across Budumuru Srikakulam and Rolugunta Vishakapatnam Dist.
    Join us as a volunteer, experience community vibes, and become a true leader by contributing to tackling climate change.
            `,
  },
  {
    id: 2,
    title: "Food Donation Program",
    image: "/img/gallery/gi3.jpg",
    description: `
    If God appears to me and asks me for a wish to fulfill. Then, I would wish for everyone in the world to be blessed with 3 meals every day, and that too be a balanced diet. You may be wondering why I made that wish. According to Global Hunger Index 2021, India’s score of 27.5 is considered to be serious. It is due to a timely and balanced diet that provides a healthy physique. And it is believed that “health is wealth.”
    So, to improve India’s ranking in the global hunger index and to achieve the goal of SDG-2, which is zero hunger, we at Akhanda Seva Samsthan are conducting food distribution programs for the needy. We have distributed to nearly 50+ individuals across cities in Hyderabad, Srikakulam, Vishakapatnam, Amalapuram, and Machilipatnam.
    Collaborate with us in our food donation program to be a true leader and experience the joy of sharing and caring.
    `,
  },
  {
    id: 3,
    title: "Blood Donation Program",
    image: "https://i.ibb.co/1mkq8Mp/8c36296f-6da3-4eb3-aa87-e1aef12143c3.jpg",
    description: `
    Blood is considered to be the lifeline of our bodies. Everyone believes that it would be available easily. However, this is not the case. The blood can be stored only for 3-4 days, which will also be under cold conditions. In addition, some limitations make blood arrangements difficult.
    We, at Akhanda Seva Sansthan, have donated blood for 20 Thalassemia patients at Thalassemia Sickle Cell Society in Rajendar Nagar, Hyderabad on behalf of EX CBI officer JD Lakshmi Narayana Garu. Also, we collaborated with the Youth for Seva organization and blood donation campaigns.
    Join us, to become a true leader by donating blood or being a part of blood donation campaigns. Taking part in these campaigns requires truly a big heart. We believe you are one among them.
`,
  },
];
const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogsList.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-md mx-auto">
          <div className="flex justify-center">
            <img className="w-full md:w-4/5 md:h-96" src={blog.image} alt={blog.title} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 mb-4 text-base">{blog.description}</p>
          </div>
          <Link
            href="/blogs"
            className="w-full px-6 ml-6 py-2 mt-3 text-center text-white bg-green-950 hover:bg-green-900 rounded-md lg:ml-5"
          >
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
