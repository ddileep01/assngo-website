import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Akhanda Seva Samsthan</title>
        <meta name="description" content="Akhanda Seva Samsthan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Akhanda Seva Samsthan Benefits"
        title=" Why should you join Akhanda Seva Samsthan?"
      >
        Akhanda Seva Samsthan provides life-changing opportunities through community-driven projects, fostering positive change and sustainable development.
        Joining Akhanda Seva Samsthan offers the chance to be part of a compassionate community, dedicated to making a meaningful impact on the lives of those in need.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Stories That Illuminate Akhanda Seva Samsthan's Transformative Journey."
      >
        Discover the impact of Akhanda Seva Samsthan through the voices of those we've had the privilege to serve and those who have supported our mission. Read heartfelt testimonials that reflect the genuine experiences of individuals and communities touched by our collective efforts. These stories are a testament to the positive change we can achieve together.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Explore answers to commonly asked questions about Akhanda Seva Samsthan. Gain insights into our mission, activities, and how you can be a part of creating positive social change.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
