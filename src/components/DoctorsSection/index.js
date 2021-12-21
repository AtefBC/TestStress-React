import React, { useState, useEffect } from "react";
import db from '../../firebase';
import { Button } from "../ButtonElements";
import {
  DoctorsContainer,
  DoctorsTitle,
  DoctorsDot,
  DoctorsH2,
  DoctorsH1,
  DoctorsWrapper,
} from "../DoctorsSection/DoctorsElements";

import Doctor from "../DoctorsSection/Doctor";

import {
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../HeroSection/HeroElements";

function DoctorsSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    db.collection("doctors")
      .get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          posts.push(data);
        });
        setDoctors(posts);
        //console.log(snapshot);
      })
      .catch((error) => console.log(error));
  });

  return (
    <DoctorsContainer>
      <DoctorsTitle>
        <DoctorsDot />
        <DoctorsDot />
        <DoctorsH2>OUR PROFESSIONAL</DoctorsH2>
        <DoctorsDot />
        <DoctorsDot />
      </DoctorsTitle>

      <DoctorsH1>
        <span>DeepBreath</span> Doctors
      </DoctorsH1>

      <DoctorsWrapper>
        {doctors &&
          doctors.slice(3, 10).map((doctor) => {
            return <Doctor doctor={doctor} />;
          })}
      </DoctorsWrapper>
      <HeroBtnWrapper>
        <Button
          to="/doctors"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
        >
          All Doctors {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </DoctorsContainer>
  );
}

export default DoctorsSection;
