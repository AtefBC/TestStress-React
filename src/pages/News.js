import React from 'react';
import DoctorsHeader from "../components/DoctorsPage";
import Footer from "../components/Footer";
import { homeObjNews } from "../components/DoctorsPage/Data";

function News() {
    return (
        <>
      <DoctorsHeader {...homeObjNews} />

      <Footer />
    </>
    )
}

export default News
