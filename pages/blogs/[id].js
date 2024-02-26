import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import blogsList from "../blogList";
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
            <p className="text-gray-700 text-base">{blog.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
