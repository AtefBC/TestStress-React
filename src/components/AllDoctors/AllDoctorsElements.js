import styled from "styled-components";

export const AllDoctorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: calc(75%); */
  height: 680px;
`;

export const DoctorWrapper = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 20px;
`;

export const DoctorImg = styled.img`
  width: 216px;
  height: 216px;

  /* @media screen and (max-width: 1500px) {
    max-width: 200px;
    max-height: 200px;
  }
  @media screen and (max-width: 1405px) {
    max-width: 190px;
    max-height: 190px;
  }
  @media screen and (max-width: 1335px) {
    max-width: 185px;
    max-height: 185px;
  }
  @media screen and (max-width: 1305px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media screen and (max-width: 1275px) {
    max-width: 175px;
    max-height: 175px;
  }
  @media screen and (max-width: 1245px) {
    max-width: 170px;
    max-height: 170px;
  }
  @media screen and (max-width: 1210px) {
    max-width: 216px;
    max-height: 216px;
  }
  @media screen and (max-width: 1075px) {
    max-width: 216px;
    max-height: 216px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 200px;
    max-height: 200px;
  }
  @media screen and (max-width: 840px) {
    max-width: 180px;
    max-height: 180px;
  }
  @media screen and (max-width: 800px) {
    max-width: 170px;
    max-height: 170px;
  }
  @media screen and (max-width: 768px) {
    max-width: 160px;
    max-height: 160px;
  }
  @media screen and (max-width: 740px) {
    max-width: 216px;
    max-height: 216px;
  }
  @media screen and (max-width: 550px) {
    max-width: 200px;
    max-height: 200px;
  } */
`;

export const DoctorName = styled.h2`
  font-size: 16px;
  margin-bottom: -5px;
`;

export const DoctorCity = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: #00a5fe;
`;
