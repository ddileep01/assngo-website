import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <TestimonialCard
          image={userOneImg}
          name="Tarak"
          title="Youth For Seva Organization"
          text="Akhanda Seva Samsthan's dedication to social responsibility and their commitment to various causes make them a valuable asset to the communities they serve. I feel proud to be a part-time volunteer for the organisation."
        />
        <TestimonialCard
          image={userTwoImg}
          name="Vishnu Priyanka"
          title="Assistant Professor"
          text="When I first heard about Akhanda Seva Samsthan I felt proud about the team,who started the NGO. Where the team constantly trying to bring a positive change towards education and health care. The organization is working and always been a helping hand to a lot of needy persons and also making a lot of difference in their lives. A helping hand is always better than thousands of helping words."
        />
        <TestimonialCard
          image={userThreeImg}
          name="Pavan Kachala"
          title="Software Engineer"
          text="I am incredibly grateful to have had the opportunity to donate food through Akhanda Seve Samsthan. Knowing that every rupee I contributed went directly towards helping others brought me immense joy and satisfaction. The selfless dedication of the people involved in this NGO is truly inspiring. They work tirelessly to improve the lives of those in need, and their commitment to the betterment of society is commendable. I wholeheartedly support their noble cause and encourage others to join in their efforts to make a positive impact on our community. Thank you, Akanda Seva Samithi, for your invaluable service and for giving me the chance to be a part of something meaningful."
        />
        <TestimonialCard
          image={userThreeImg}
          name="Hema"
          title="Software Engineer"
          text="I am incredibly grateful to have had the opportunity to donate food through Akhanda Seve Samsthan. Knowing that every rupee I contributed went directly towards helping others brought me immense joy and satisfaction. The selfless dedication of the people involved in this NGO is truly inspiring. They work tirelessly to improve the lives of those in need, and their commitment to the betterment of society is commendable. I wholeheartedly support their noble cause and encourage others to join in their efforts to make a positive impact on our community. Thank you, Akanda Seva Samithi, for your invaluable service and for giving me the chance to be a part of something meaningful."
        />
      </div>
    </Container>
  );
};

const TestimonialCard = ({ image, name, title, text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        <p className="leading-normal">
          {expanded ? text : `${text.slice(0, 100)}...`}
          <button
            onClick={toggleExpansion}
            className="text-blue-500 mt-2 focus:outline-none"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </p>
        <Avatar image={image} name={name} title={title} />
      </div>
    </div>
  );
};

const Avatar = ({ image, name, title }) => {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={image} alt="Avatar" width={40} height={40} />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
};

export default Testimonials;
