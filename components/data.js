import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/p8.png";
import benefitTwoImg from "../public/img/p3.png";

const benefitOne = {
  title: "Highlights of Akhanda Seva Samsthan",
  desc: "Akhanda Seva Samsthan is dedicated to transformative community development, driven by the values of empowerment, education, and healthcare. Discover our highlights as we strive to make a positive difference in the lives of those in need.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Holistic Community Development",
      desc: "Akhanda Seva Samsthan takes a comprehensive approach to community development, addressing social, educational, and healthcare needs to create lasting positive change.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Impactful Volunteer Engagement",
      desc: "Our NGO thrives on the dedication of passionate volunteers who actively contribute to meaningful projects, amplifying the reach and effectiveness of our initiatives.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Transparency and Accountability",
      desc: "Akhanda Seva Samsthan upholds principles of transparency and accountability, ensuring that every donation and effort directly contributes to tangible improvements in the lives of those we serve.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offers more benefits like",
  desc: "Akhanda Seva Samsthan is a beacon of transformative impact, committed to fostering holistic change in communities. Beyond the core pillars of empowerment, education, and healthcare, discover three additional dimensions that define our mission and contribute to a more resilient, sustainable, and inclusive world.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Sustainable Livelihood Opportunities",
      desc: "Akhanda Seva Samsthan pioneers projects that create sustainable livelihood opportunities, empowering individuals to break the cycle of poverty. Through skill-building initiatives and entrepreneurship support, we aim to build resilient communities capable of shaping their own destinies.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Environmental Stewardship Programs",
      desc: "Our commitment extends beyond human well-being to the health of our planet. Akhanda Seva Samsthan champions environmental stewardship, engaging in tree-planting drives, waste management projects, and initiatives that promote eco-friendly practices. Together, we contribute to a sustainable and green future.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Inclusive Social Services",
      desc: "At the core of our mission is a dedication to inclusivity. Akhanda Seva Samsthan ensures that our social services cater to diverse populations, including marginalized and vulnerable groups. By fostering an inclusive environment, we strive to leave no one behind on the path to progress.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
