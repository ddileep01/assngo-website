import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const campaigns = [
    {
      id: 1,
      image: "/img/gallery/gi1.jpg",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 2,
      image: "/img/gallery/gi2.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 3,
      image: "/img/gallery/gi3.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/560C117/gi4.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/cwhJNQk/gi5.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 6,
    //   image: "https://i.ibb.co/jRwWKrQ/gi6.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 7,
      image: "/img/gallery/gi7.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 8,
      image: "/img/gallery/gi8.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 9,
      image: "/img/gallery/gi9.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 10,
      image: "https://i.ibb.co/7yKf2zk/7e95c4d1-b9ea-44e2-abed-15f48f9f23cc.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 11,
      image: "https://i.ibb.co/MRZp7LM/903e83b4-a7a0-42df-8d37-df9a1851c196.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 12,
      image: "https://i.ibb.co/3MZZb41/621e46eb-0262-4d91-93af-c43238a8a228.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 13,
      image: "https://i.ibb.co/sJ1txn2/c8bc1041-d28b-46ee-98b8-1d6106fbc5c0.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 14,
    //   image: "https://i.ibb.co/rbKpGQ1/24aa0dd1-d904-43ff-9b0c-afd81b83c091.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    // {
    //   id: 15,
    //   image: "https://i.ibb.co/KhVfZZy/de252878-6b5b-4894-8612-92ded38ffde1.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 16,
      image: "https://i.ibb.co/g7Rx0bb/8c612d61-3ebd-401a-824b-9bd96efbaa52.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 17,
      image: "https://i.ibb.co/9Nmbyck/395ea1b6-5bbc-4029-87b9-61bb8ee9422f.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 18,
      image: "https://i.ibb.co/1mkq8Mp/8c36296f-6da3-4eb3-aa87-e1aef12143c3.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 19,
      image: "https://i.ibb.co/vXvBMpH/226b8227-42fd-4b36-a2af-fda175726e04.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 20,
      image: "https://i.ibb.co/gvYVR5p/6918217b-4c9b-4fc4-a973-f21641ba193d.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 21,
      image: "https://i.ibb.co/093kdhb/11e24f26-8b1e-4f8f-b1b6-56387ae57bfd.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 22,
      image: "https://i.ibb.co/bzZJzTs/86b20426-d6e3-463b-8ae0-d05e05ed4590.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 23,
      image: "https://i.ibb.co/M8Px6bJ/e7733df0-5eb7-4fe4-9fc9-5554eaf74bfa.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    }
  ];

  const rolling_images = [
    // {
    //   id: 1,
    //   image: "/img/gallery/gi1.jpg",
    //   description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    // },
    {
      id: 2,
      image: "/img/gallery/gi2.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 3,
      image: "/img/gallery/gi3.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 4,
    //   image: "https://i.ibb.co/560C117/gi4.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 5,
      image: "https://i.ibb.co/cwhJNQk/gi5.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 6,
    //   image: "https://i.ibb.co/jRwWKrQ/gi6.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 7,
      image: "/img/gallery/gi7.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 8,
      image: "/img/gallery/gi8.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 9,
      image: "/img/gallery/gi9.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 10,
    //   image: "https://i.ibb.co/7yKf2zk/7e95c4d1-b9ea-44e2-abed-15f48f9f23cc.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 11,
      image: "https://i.ibb.co/MRZp7LM/903e83b4-a7a0-42df-8d37-df9a1851c196.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 12,
    //   image: "https://i.ibb.co/3MZZb41/621e46eb-0262-4d91-93af-c43238a8a228.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 13,
      image: "https://i.ibb.co/sJ1txn2/c8bc1041-d28b-46ee-98b8-1d6106fbc5c0.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    // {
    //   id: 14,
    //   image: "https://i.ibb.co/rbKpGQ1/24aa0dd1-d904-43ff-9b0c-afd81b83c091.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    // {
    //   id: 15,
    //   image: "https://i.ibb.co/KhVfZZy/de252878-6b5b-4894-8612-92ded38ffde1.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    // {
    //   id: 16,
    //   image: "https://i.ibb.co/g7Rx0bb/8c612d61-3ebd-401a-824b-9bd96efbaa52.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    // {
    //   id: 17,
    //   image: "https://i.ibb.co/9Nmbyck/395ea1b6-5bbc-4029-87b9-61bb8ee9422f.jpg",
    //   description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    // },
    {
      id: 18,
      image: "https://i.ibb.co/1mkq8Mp/8c36296f-6da3-4eb3-aa87-e1aef12143c3.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 19,
      image: "https://i.ibb.co/vXvBMpH/226b8227-42fd-4b36-a2af-fda175726e04.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 20,
      image: "https://i.ibb.co/gvYVR5p/6918217b-4c9b-4fc4-a973-f21641ba193d.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 21,
      image: "https://i.ibb.co/093kdhb/11e24f26-8b1e-4f8f-b1b6-56387ae57bfd.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 22,
      image: "https://i.ibb.co/bzZJzTs/86b20426-d6e3-463b-8ae0-d05e05ed4590.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    },
    {
      id: 23,
      image: "https://i.ibb.co/M8Px6bJ/e7733df0-5eb7-4fe4-9fc9-5554eaf74bfa.jpg",
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === rolling_images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        {/* <h1 className="text-4xl font-bold mb-8 text-center">
          Slideshow
        </h1> */}
        <div className="relative w-full h-96 mb-8">
          {rolling_images.map((rolling_images, index) => (
            <img
              key={rolling_images.id}
              src={rolling_images.image}
              alt={`Gallery ${rolling_images.id}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">
          A Visual Journey of our NGO
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              <img
                src={campaign.image}
                alt={`Campaign ${campaign.id}`}
                className="w-full h-48 object-cover"
              />
              {/* <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  Campaign {campaign.id}
                </h2>
                <p className="text-gray-700">{campaign.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
