import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const DoctorContainer = styled.div`
  width: 270px;
  height: 200px;
  background: #094d7e;
  margin: 20px;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 995px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media screen and (max-width: 750px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media screen and (max-width: 690px) {
    width: 338px;
    height: 250px;
  }
`;

export const DoctorSide = styled.div`
  width: 150px;
  height: 150px;
  background: #ffffff;
  position: absolute;
  top: -20px;
  right: -20px;
  border-radius: 5px;

  @media screen and (max-width: 690px) {
    width: 188px;
    height: 188px;
  }
`;

export const DoctorImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DoctorBar = styled.div`
  position: absolute;
  right: 105px;
  bottom: 90px;
  width: 50px;
  height: 2px;
  background: #00e3bd;
  @media screen and (max-width: 690px) {
    right: 135px;
    bottom: 120px;
    width: 63px;
    height: 2.5px;
  }
`;

export const DoctorMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoctorFB = styled(FaFacebookF)`
  background: #0e5c8f;
  font-size: 33px;
  padding: 7px;
  margin: 15px 0px -8px 15px;
  border-radius: 50%;
  color: #377ba9;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #094d7e;
  }

  @media screen and (max-width: 690px) {
    font-size: 41px;
  }
`;

export const DoctorT = styled(FaTwitter)`
  background: #0e5c8f;
  font-size: 33px;
  padding: 7px;
  margin: 15px 0px -8px 15px;
  border-radius: 50%;
  color: #377ba9;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #094d7e;
  }

  @media screen and (max-width: 690px) {
    font-size: 41px;
  }
`;

export const DoctorLI = styled(FaLinkedinIn)`
  background: #0e5c8f;
  font-size: 33px;
  padding: 7px;
  margin: 15px 0px -8px 15px;
  border-radius: 50%;
  color: #377ba9;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #094d7e;
  }

  @media screen and (max-width: 690px) {
    font-size: 41px;
  }
`;

export const DoctorNameName = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 14px;
  left: 15px;
`;

export const DoctorFirstName = styled.h4`
  text-align: left;
  font-size: 18px;
  margin-bottom: -5px;

  @media screen and (max-width: 690px) {
    font-size: 23px;
  }
`;

export const DoctorName = styled.h4`
  text-align: left;
  font-size: 18px;

  @media screen and (max-width: 690px) {
    font-size: 23px;
  }
`;

export const DoctorSpecialty = styled.h4`
  color: #00e3bd;
  font-size: 13px;
  font-weight: 400;
  text-align: right;
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 15px;

  @media screen and (max-width: 690px) {
    font-size: 16px;
  }
`;
