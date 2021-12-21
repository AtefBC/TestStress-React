import styled from "styled-components";
import DoctorsPageBg from "../../images/doctors.jpg";
import DoctorsPageBg2 from "../../images/test.jpg";

export const HeaderContainer = styled.div`
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -65px;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${DoctorsPageBg});
    background-repeat: no-repeat;
    background-position: right;
    filter: brightness(40%);

    @media screen and (max-width: 1000px) {
      background-position: 95% 50%;
    }
    @media screen and (max-width: 920px) {
      background-position: 90% 50%;
    }
    @media screen and (max-width: 820px) {
      background-position: 85% 50%;
    }
    @media screen and (max-width: 768px) {
      background-size: cover;
    }
  }
  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

export const HeaderH1 = styled.h1`
  color: #ffffff;
  font-size: 30px;
  position: absolute;
  bottom: 60px;
  > span {
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    bottom: 35px;
  }
`;
