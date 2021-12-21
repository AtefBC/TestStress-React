import styled from "styled-components";
import { BiPlayCircle } from 'react-icons/bi';

export const NewsDrawerContainer = styled.div`
  /* background: lightgray; */
  /* width: calc(25%); */

  /* @media screen and (max-width: 1200px) {
    width: calc(30%);
  }
  @media screen and (max-width: 1000px) {
    width: calc(35%);
  }
  @media screen and (max-width: 800px) {
    width: calc(40%);
  }
  @media screen and (max-width: 740px) {
    width: calc(50%);
  } */
`;

export const NewsDrawerCourse = styled.div`
  height: 380px;
  width: 270px;
  position: relative;
`;

export const NewsDrawerH4 = styled.h4`
  font-size: 24px;
  line-height: 25px;
  margin-bottom: 15px;
  > span {
    font-weight: 300;
  }
`;

export const NewsDrawerCourseImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: brightness(75%);
`;

export const NewsDrawerCourseTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
`;

export const NewsDrawerCourseInfo = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #999999;
`;

export const NewsDrawerNews = styled.div`
  height: 380px;
  width: 270px;
  margin-bottom: 60px;
`;

export const NewsDrawerWrapper = styled.div``;

export const NewsDrawerWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const NewsDrawerWrapImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  object-fit: cover;
`;

export const NewsDrawerWrapInfo = styled.div``;

export const NewsDrawerWrapDate = styled.h6`
  font-weight: 400;
  color: #999999;
`;

export const NewsDrawerWrapTitle = styled.a`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
`;

export const NewsDrawerWrapDate2 = styled.div`
  text-align: center;
  width: 80px;
  min-width: 70px;
  height: 72px;
  min-height: 70px;
  border: 3px solid #25eab3;
  border-radius: 10px;
  margin-right: 10px;
`;

export const NewsDrawerWrapDay = styled.h5`
  font-size: 35px;
`;

export const NewsDrawerWrapYear = styled.h5`
  font-size: 10px;
  font-weight: 300;
  margin-top: -10px;
  color: #999999;
`;

export const PlayIcon = styled(BiPlayCircle)`
  position: absolute;
  font-size: 50px;
  color: #ffffff;
  z-index: 2;
  left: 110px;
  top: 85px;
`;
