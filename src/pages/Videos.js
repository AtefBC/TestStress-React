import React from 'react';
import DoctorsHeader from "../components/DoctorsPage";
import Footer from "../components/Footer";
import { homeObjVideos } from "../components/DoctorsPage/Data";

function Videos() {
    return (
        <>
      <DoctorsHeader {...homeObjVideos} />

      <Footer />
    </>
    )
}

export default Videos;
