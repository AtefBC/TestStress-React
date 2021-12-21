import styled from "styled-components";
import DoctorsBg from "../../images/Bitmap222.png";
import { BsDot } from 'react-icons/bs';

export const DoctorsContainer = styled.div`
  text-align: center;
  background-image: url(${DoctorsBg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 25px;
`;

export const DoctorsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DoctorsDot = styled(BsDot)`
  font-size: 30px;
  margin-left: -10px;
  margin-right: -10px;
  color: #00e3bd;
`;

export const DoctorsH2 = styled.h2`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  letter-spacing: 4px;
  font-weight: 300;
`;

export const DoctorsH1 = styled.h1`
  font-size: 55px;
  >span {
    font-weight: 300;
  }
`;

export const DoctorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 85%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: -15px;

  @media screen and (max-width: 1480px) {
    width: 92%;
  }

  @media screen and (max-width: 1365px) {
    width: 95%;
  }
  @media screen and (max-width: 790px) {
    width: 100%;
  }
  @media screen and (max-width: 690px) {
    width: 85%;
  }
`;
