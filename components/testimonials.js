import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="leading-normal ">
              Akhanda Seva Samsthan's dedication to social responsibility and
              their commitment to various causes make them a valuable asset to
              the communities they serve. I feel proud to be a part-time
              volunteer for the organisation.
            </p>

            <Avatar
              image={userOneImg}
              name="Tarak"
              title="Youth For Seva Organization"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="leading-normal ">
              Proud of Akhanda Seva Samsthan's dedication to education and
              healthcare. They're a beacon of hope, offering aid to the needy
              and transforming lives. Actions speak louder than words; their
              work speaks volumes.
            </p>

            <Avatar
              image={userTwoImg}
              name="Vishnu Priyanka"
              title="Assistant Professor"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="leading-normal ">
              Grateful for the chance to aid Akanda Seva Samithi's food donation
              efforts. Their dedication is inspiring. Let's join hands to make a
              difference. Thank you, Akanda Seva Samithi, for this meaningful
              opportunity to serve our community together.
            </p>

            <Avatar
              image={userThreeImg}
              name="Pavan Kachala"
              title="Software Engineer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="leading-normal ">
              As a local healthcare provider, collaborating with Akhanda Seva
              Samsthan has allowed us to extend our services to underserved
              communities. Together, we've been able to create a healthier and
              happier community.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="leading-normal ">
              Attending Akhanda Seva Samsthan's events has been an enlightening
              experience. The organization creates spaces for meaningful
              discussions and fosters a sense of community that extends beyond
              the event itself. I look forward to future engagements.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
