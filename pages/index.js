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

import React, { useState } from 'react';
import Modal from '../components/modal';
import FeedbackForm from '../components/feedbackForm';
import FeedbackWidgetButton from '../components/feedBackWidgetButton';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        Akhanda Seva Samsthan provides life-changing opportunities through
        community-driven projects, fostering positive change and sustainable
        development. Joining Akhanda Seva Samsthan offers the chance to be part
        of a compassionate community, dedicated to making a meaningful impact on
        the lives of those in need.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Overview of Akhanda Seva Samsthan"
      >
        Akhanda Seva Samsthan is a beacon of hope, a society registered under
        the Andhra Pradesh Societies Registration Act, 2001. ASS is dedicated to
        serving underprivileged and marginalized communities, and it has its
        headquarters in Budumuru, Srikakulam. Established on January 4, 2021,
        with a genuine commitment to humanitarian principles, it stands as a
        testament to the power of collective action in effecting positive
        change.
        <br />
        With more than 3 years of experience, the society has helped
        more than 100+ individuals arrange the required blood.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Stories That Illuminate Akhanda Seva Samsthan's Transformative Journey."
      >
        Discover the impact of Akhanda Seva Samsthan through the voices of those
        we've had the privilege to serve and those who have supported our
        mission. Read heartfelt testimonials that reflect the genuine
        experiences of individuals and communities touched by our collective
        efforts. These stories are a testament to the positive change we can
        achieve together.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Explore answers to commonly asked questions about Akhanda Seva Samsthan.
        Gain insights into our mission, activities, and how you can be a part of
        creating positive social change.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
      <div>
        <FeedbackWidgetButton onClick={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FeedbackForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
