import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 8px;
  text-decoration: none;
  background: ${({ primary }) => (primary ? "#25eab3" : "#2d2d2d")};
  background-image: linear-gradient(to bottom left, #25eab3, #00a4ff);
  white-space: nowrap;
  padding: ${({ big }) => (big ? "8px 20px" : "12px 30px")};
  /* color: ${({ dark }) => (dark ? "#2d2d2d" : "#ffffff")}; */
  color: #ffffff;
  font-size: ${({ fontBig }) => (fontBig ? "13px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  

  &:hover {
    color: #2d2d2d;
    transition: all 0.2s ease-in-out;
    /* background: ${({ primary }) => (primary ? "#ffffff" : "#24E9B5")}; */
  }
`;
