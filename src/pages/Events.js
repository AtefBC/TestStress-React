import React from "react";
import DoctorsHeader from "../components/DoctorsPage";
import Footer from "../components/Footer";
import { homeObjEvents } from "../components/DoctorsPage/Data";

function Events() {
  return (
    <>
      <DoctorsHeader {...homeObjEvents} />

      <Footer />
    </>
  );
}

export default Events;
