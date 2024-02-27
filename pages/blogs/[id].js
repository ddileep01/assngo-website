import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
// import blogsList from "../blogList";
const blogsList = [
  {
    id: 1,
    title: "Empowering Women: Breaking Barriers, Building Futures",
    image: "https://pbs.twimg.com/media/GElRa86XIAAG8iz.jpg",
    description: `
    At Akhanda Seva Samsthan, we believe in the power of women to transform communities and drive positive change. In this article, we'll explore how our initiatives are empowering women from marginalized backgrounds through education, skills training, and economic opportunities. Join us as we celebrate the resilience and strength of women and work towards a more gender-equal world.
            `,
  },
  {
    id: 2,
    title:
      "Planting Seeds of Change: Environmental Conservation at Akhanda Seva Samsthan",
    image: "https://www.barry-callebaut.com/sites/default/files/styles/paragraph_page_intro_responsive/public/2020-06/Seeds%20for%20Change%20-%20Barry%20Callebaut%20%281%29.jpg?itok=Tjz9cDjF",
    description: `
    Our planet is facing unprecedented environmental challenges, from climate change to biodiversity loss. In this article, we'll take a closer look at how Akhanda Seva Samsthan is taking action to protect our environment through tree planting, waste management, and sustainable agriculture initiatives. Discover how you can join us in our mission to preserve and protect the natural world for future generations.`,
  },
  {
    id: 3,
    title: "Education for All: Unlocking Opportunities, Transforming Lives",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*NEMRbxUdrF30Nlfsdkuhaw.jpeg",
    description: `
    Education is a fundamental human right and a powerful tool for social and economic empowerment. At Akhanda Seva Samsthan, we're committed to ensuring that every child has access to quality education, regardless of their background or circumstances. In this article, we'll share how our educational programs are making a difference in the lives of children and communities, paving the way for a brighter future for all.`,
  },
  {
    id: 4,
    title: "Healthcare Access: Bridging Gaps, Saving Lives",
    image: "https://media.licdn.com/dms/image/C4E12AQHBNVx13G32cQ/article-cover_image-shrink_720_1280/0/1574367762933?e=2147483647&v=beta&t=pqENIc-BB1zP-9BKv_AC5NOX-eGTYRX32UYfxQ1ROGQ",
    description: `
    Access to healthcare is essential for achieving overall well-being and prosperity. Unfortunately, many communities around the world still lack access to basic healthcare services. In this article, we'll highlight how Akhanda Seva Samsthan is working to bridge this gap through mobile clinics, health awareness campaigns, and community health initiatives. Join us as we strive to ensure that everyone has the right to quality healthcare, regardless of their circumstances.`,
  },
  {
    id: 5,
    title: "Youth Empowerment: Nurturing Potential, Creating Leaders",
    image: "https://imageio.forbes.com/specials-images/imageserve/63a9aee2a479919895cc7325/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    description: `
    Young people are the future leaders and changemakers of our world. At Akhanda Seva Samsthan, we're dedicated to empowering youth with the skills, resources, and opportunities they need to thrive. In this article, we'll showcase our youth empowerment programs, which include leadership training, mentorship opportunities, and entrepreneurship initiatives. Join us in supporting the next generation as they become catalysts for positive change in their communities and beyond.`,
  },
  {
    id: 6,
    title: "Community Resilience: Strengthening Bonds, Building Futures",
    image: "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/12/GardenEstateEvent-92-1-scaled.jpg",
    description: `
    In times of adversity, strong communities are a source of support, resilience, and hope. At Akhanda Seva Samsthan, we're committed to building resilient communities that can withstand and recover from challenges. In this article, we'll explore how our community development initiatives are fostering social cohesion, empowering individuals, and building resilience from the ground up. Join us as we work together to create a future where every community can thrive, no matter what obstacles they may face.`,
  },
]
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
          <img className="w-full" src={blog.image} alt={blog.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 mb-4 text-base">{blog.description}</p>
          </div>
          <Link
            href="/blogs"
            className="w-full px-6  py-2 mt-3 text-center text-white bg-green-950 hover:bg-green-900 rounded-md lg:ml-5"
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
