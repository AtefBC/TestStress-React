import React from "react";
import DoctorsHeader from "../components/DoctorsPage";
import NewsDrawer from "../components/NewsDrawer";
import styled from "styled-components";
import AllDoctors from '../components/AllDoctors';
import Footer from "../components/Footer";

function Doctors() {
  return (
    <>
      <DoctorsHeader />
      <DoctorsContainer>
        <AllDoctors />
        <NewsDrawer />
      </DoctorsContainer>
      <Footer />
    </>
  );
}

export default Doctors;

const DoctorsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  /* @media screen and (max-width: 1245px) {
    width: 70%;
  }
  @media screen and (max-width: 1210px) {
    width: 70%;
  }
  @media screen and (max-width: 1075px) {
    width: 75%;
  }
  @media screen and (max-width: 985px) {
    width: 80%
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 740px) {
    width: 75%;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  } */
`;
