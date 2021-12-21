import React from 'react';
import DoctorsHeader from "../components/DoctorsPage";
import Footer from "../components/Footer";
import { homeObjAbout } from "../components/DoctorsPage/Data";

function About() {
    return (
        <>
      <DoctorsHeader {...homeObjAbout} />

      <Footer />
    </>
    )
}

export default About;
