import React, { useState } from "react";
import DoctorsHeader from "../components/DoctorsPage";
import TestSection from "../components/TestSection";
import { homeObjTest } from "../components/DoctorsPage/Data";
import TestSection2 from "../components/TestSection2";
import Footer from "../components/Footer";

function Test() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <DoctorsHeader {...homeObjTest}/>
      {visible ? <TestSection setVisible={setVisible} visible={visible}/> : <TestSection2 />}
      <Footer />
    </>
  );
}

export default Test;
