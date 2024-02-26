import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import blogsList from "./blogList";
const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {blogsList.map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img className="w-full" src={blog.image} alt={blog.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <p className="text-gray-700 text-base">
                  {blog.description.slice(0, 150)}...
                  {/* Use Link component from Next.js */}
                  <Link href={`/blogs/${blog.id}`}>
                    <button className="text-blue-500">Read more</button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
