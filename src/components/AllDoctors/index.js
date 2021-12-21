import React, {useState , useEffect} from "react";
import db from '../../firebase';
import {
  AllDoctorsWrapper,
  DoctorWrapper,
  DoctorImg,
  DoctorName,
  DoctorCity,
} from "./AllDoctorsElements";
import DoctorImage from "../../images/News1Image.jpg";

function AllDoctors() {
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
    <AllDoctorsWrapper>
      {doctors &&
        doctors.map((doctor) => {
          return (
            <DoctorWrapper>
              <DoctorImg src={doctor.user_photo} />
              <DoctorName>Dr. {doctor.name}</DoctorName>
              <DoctorCity>{doctor.city}</DoctorCity>
            </DoctorWrapper>
          );
        })}

      <DoctorWrapper>
        <DoctorImg src={DoctorImage} />
        <DoctorName>Dr. Test</DoctorName>
        <DoctorCity>United State</DoctorCity>
      </DoctorWrapper>
    </AllDoctorsWrapper>
  );
}

export default AllDoctors;
