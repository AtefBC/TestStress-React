import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background: #2d2d2d;
`;

export const LoginLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginLogo = styled.img`
  width: 180px;
  @media screen and (max-width: 1000px) {
    width: 120px;
  }
  @media screen and (max-width: 720px) {
    width: 80px;
  }
`;

export const LoginName = styled.h1`
  font-size: 175px;
  color: #25eab3;
  @media screen and (max-width: 1300px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1150px) {
    font-size: 130px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 110px;
  }
  @media screen and (max-width: 850px) {
    font-size: 90px;
  }
  @media screen and (max-width: 720px) {
    font-size: 70px;
  }
  @media screen and (max-width: 550px) {
    font-size: 50px;
  }
`;
