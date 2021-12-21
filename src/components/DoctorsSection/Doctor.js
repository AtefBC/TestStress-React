import React from "react";
import {
  DoctorContainer,
  DoctorMedia,
  DoctorFB,
  DoctorT,
  DoctorLI,
  DoctorNameName,
  DoctorFirstName,
  DoctorName,
  DoctorSpecialty,
  DoctorSide,
  DoctorBar,
  DoctorImg
} from "./DoctorElement";
import DoctorImage from "../../images/doctor.png";



function Doctor({doctor}) {
  return (
    <DoctorContainer>
      <DoctorMedia>
        <DoctorFB />
        <DoctorT />
        <DoctorLI />
      </DoctorMedia>
      <DoctorNameName>
        <DoctorFirstName>{doctor.first_name}</DoctorFirstName>
        <DoctorName>{doctor.last_name}</DoctorName>
      </DoctorNameName>
      <DoctorSpecialty>{doctor.city}</DoctorSpecialty>
      <DoctorSide>
        <DoctorImg src={doctor.user_photo}/>
      </DoctorSide>
      <DoctorBar />
    </DoctorContainer>
  );
}

export default Doctor;
