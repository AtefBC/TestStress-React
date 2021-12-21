import styled from "styled-components";

export const ProfilContainer = styled.div`
  background-color: #242426;
  margin-top: -64px;
  padding-top: 130px;
  color: #ffffff;
  height: 1000px;
`;

export const ProfilData = styled.div`
  background-image: linear-gradient(
    to bottom,
    #323c49,
    #1c2633,
    #1e232e,
    #1e232e,
    #222834
  );
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px black;
  display: flex;
  padding: 20px;
`;

export const ProfilImg = styled.img`
  width: 150px;
  border: 3px solid grey;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ProfilInfo = styled.div`
  flex: 2;
`;

export const ProfilName = styled.h3``;

export const ProfilEmail = styled.h3``;

export const ProfilScoreContainer = styled.div`
  flex: 1;
`;

export const ProfilLevel = styled.h3``;

export const ProfilScoreWrapper = styled.div`
  width: 100px;
  height: 55px;
  background: #32557f;
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid #32557f;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid #32557f;
  }
`;

export const ProfilScore = styled.h3`
  position: absolute;
`;

export const ProfilContainer2 = styled.div`
  display: flex;
  width: 78%;
  margin: auto;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ProfilLeft = styled.div`
  flex: 2;
  background: #1c1c1c;
  margin-right: 5px;
  margin-left: 5px;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px black;
`;

export const ProfilDoctors = styled.div`
  background-image: linear-gradient(to bottom right, #2f3d5b, #0e0e0e, #0e0e0e);
  display: flex;
  flex-direction: row;
  height: 220px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilResults = styled.div`
  background-image: linear-gradient(to bottom right, #2f3d5b, #0e0e0e, #0e0e0e);
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilRight = styled.div`
  background: #1c1c1c;
  height: 460px;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 5px 5px 5px black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DoctorElementContainer = styled.div`
  margin: 10px 10px 10px 10px;
  text-align: center;
`;

export const DoctorImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

export const DoctorName = styled.p`
  margin: auto;
`;

export const Courbe = styled.img`
  max-width: 450px;
  border-radius: 8px;
`;

export const NewsDrawerWrapTitle = styled.a`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
`;