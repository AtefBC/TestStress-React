import React, { useEffect, useState } from "react";
import {
  ProfilContainer,
  ProfilData,
  ProfilImg,
  ProfilInfo,
  ProfilName,
  ProfilEmail,
  ProfilScoreContainer,
  ProfilLevel,
  ProfilScoreWrapper,
  ProfilScore,
  ProfilContainer2,
  ProfilLeft,
  ProfilDoctors,
  ProfilResults,
  ProfilRight,
  DoctorElementContainer,
  DoctorImg,
  DoctorName,
  Courbe,
  NewsDrawerWrapTitle,
} from "./ProfilElements";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import {
  NewsDrawerH4,
  NewsDrawerNews,
  NewsDrawerWrapper,
  NewsDrawerWrap,
  NewsDrawerWrapInfo,
  NewsDrawerWrapDate,
  NewsDrawerWrapDate2,
  NewsDrawerWrapDay,
  NewsDrawerWrapYear,
} from "../NewsDrawer/NewsDrawerElements";
import { Button } from "../ButtonElements";
import {
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../HeroSection/HeroElements";

function ProfilSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [score, setScore] = useState(null);
  const [level, setLevel] = useState(null);
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const data = doc.data().score;
        const level = data < 35 ? "low" : data < 77.5 ? "moderate" : "high";
        let posts = data;
        setScore(posts);
        setLevel(level);
      })
      .catch((error) => console.log(error));
    db.collection("doctors")
      .where("niveau", "==", level)
      .get()
      .then((querySnapshot) => {
        const recommand = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          recommand.push(data);
        });
        setDoctors(recommand);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  });

  const user = useSelector(selectUser);

  return (
    <ProfilContainer>
      <ProfilData>
        <ProfilImg src={user.photo} />
        <ProfilInfo>
          <ProfilName>{user.displayName}</ProfilName>
          <ProfilEmail>{user.email}</ProfilEmail>
        </ProfilInfo>
        <ProfilScoreContainer>
          <ProfilLevel>Level: {level}</ProfilLevel>
          <ProfilScoreWrapper>
            <ProfilScore>{score}%</ProfilScore>
          </ProfilScoreWrapper>
        </ProfilScoreContainer>
      </ProfilData>
      <ProfilContainer2>
        <ProfilLeft>
          <ProfilDoctors>
            {doctors &&
              doctors.map((doctor) => {
                return (
                  <DoctorElementContainer>
                    <DoctorImg src={doctor.user_photo} />
                    <DoctorName>Dr {doctor.name}</DoctorName>
                  </DoctorElementContainer>
                );
              })}
          </ProfilDoctors>
          <ProfilResults>
            <Courbe src="http://coreight.com/sites/default/files/evolution-reseaux-sociaux-tumblr.png" />
          </ProfilResults>
        </ProfilLeft>
        <ProfilRight>
          <NewsDrawerNews>
            <NewsDrawerH4>
              <span>Upcoming</span> Events.
            </NewsDrawerH4>
            <NewsDrawerWrapper>
              <NewsDrawerWrap>
                <NewsDrawerWrapDate2>
                  <NewsDrawerWrapDay>27</NewsDrawerWrapDay>
                  <NewsDrawerWrapYear>May 2021</NewsDrawerWrapYear>
                </NewsDrawerWrapDate2>
                <NewsDrawerWrapInfo>
                  <NewsDrawerWrapTitle
                    href="https://waset.org/child-and-adolescent-psychiatry-conference-in-may-2021-in-tokyo"
                    target="_blank"
                  >
                    ICCAP 2021: Child and Adolescent Psychiatry Conference
                  </NewsDrawerWrapTitle>
                  <NewsDrawerWrapDate>Tokyo</NewsDrawerWrapDate>
                </NewsDrawerWrapInfo>
              </NewsDrawerWrap>
              <NewsDrawerWrap>
                <NewsDrawerWrapDate2>
                  <NewsDrawerWrapDay>03</NewsDrawerWrapDay>
                  <NewsDrawerWrapYear>June 2021</NewsDrawerWrapYear>
                </NewsDrawerWrapDate2>
                <NewsDrawerWrapInfo>
                  <NewsDrawerWrapTitle
                    href="https://waset.org/abnormal-and-developmental-psychology-conference-in-june-2021-in-rome"
                    target="_blank"
                  >
                    ICADP 2021: Abnormal and Developmental Psychology
                    Conference,
                  </NewsDrawerWrapTitle>
                  <NewsDrawerWrapDate>Rome</NewsDrawerWrapDate>
                </NewsDrawerWrapInfo>
              </NewsDrawerWrap>
              <NewsDrawerWrap>
                <NewsDrawerWrapDate2>
                  <NewsDrawerWrapDay>03</NewsDrawerWrapDay>
                  <NewsDrawerWrapYear>June 2018</NewsDrawerWrapYear>
                </NewsDrawerWrapDate2>
                <NewsDrawerWrapInfo>
                  <NewsDrawerWrapTitle
                    href="https://waset.org/behaviorism-and-psychology-conference-in-june-2021-in-new-york"
                    target="_blank"
                  >
                    ICBP 2021: Behaviorism and Psychology Conference
                  </NewsDrawerWrapTitle>
                  <NewsDrawerWrapDate>New York</NewsDrawerWrapDate>
                </NewsDrawerWrapInfo>
              </NewsDrawerWrap>
            </NewsDrawerWrapper>
            <HeroBtnWrapper>
              <Button
                to="/events"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                fontBig="true"
                big="true"
              >
                View All Events {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </NewsDrawerNews>
        </ProfilRight>
      </ProfilContainer2>
    </ProfilContainer>
  );
}

export default ProfilSection;
