import styled from 'styled-components';
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";

export const BlogContainer = styled.div`
    padding-right: 150px;
`;

export const BlogImg = styled.img`
    width: 900px;
    height: 350px;
    object-fit: cover;
`;

export const BlogDate = styled.h4`
    font-size: 12px;
    font-weight: 400;
    margin-right: 20px;
`;

export const BlogSource = styled.h4`
    font-size: 12px;
    font-weight: 400;
`;

export const BlogTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const BlogContent = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #2d2d2d;
    white-space: pre-line;
`;

export const DoctorsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const BlogDateSource = styled.div`
  display: flex;
`;

export const BlogDateWrapper = styled.div`
  display: flex;
`;

export const Calender = styled(AiOutlineCalendar)`
  color: #00a4ff;
  margin-right: 5px;
`;

export const Person = styled(BsPersonFill)`
  color: #00a4ff;
  margin-right: 5px;
`;

