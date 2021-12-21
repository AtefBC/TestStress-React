import React, { useState } from "react";
// import SideBar from "../components/SideBar";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import InfoSection from '../components/InfoSection';
import DoctorsSection from "../components/DoctorsSection";
import FaqSection from "../components/FaqSection";
import NewsDawer from "../components/NewsDrawer";
import Footer from "../components/Footer";

import styled from "styled-components";

function Home() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <HeroSection />
      {/* <InfoSection /> */}
      <DoctorsSection />
      <FaqSection />
      <NewsContainer>
        <NewsDawer />
      </NewsContainer>
      <Footer />
    </>
  );
}

export default Home;

const NewsContainer = styled.div`
  width: 75%;
  margin: auto;
  > div {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 740px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 70%;
  }
  @media screen and (max-width: 1130px) {
    width: 75%;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 880px) {
    width: 87%;
  }
  @media screen and (max-width: 800px) {
    width: 95%;
  }
  @media screen and (max-width: 740px) {
      width: 80%;
    }
`;
