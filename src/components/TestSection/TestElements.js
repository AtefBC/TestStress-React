import styled from "styled-components";

export const TestContainer = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
`;

export const TestH1 = styled.h1`
  margin-top: 50px;
  margin-bottom: 20px;
  line-height: 35px;
`;

export const TestP = styled.p`
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  > button {
    font-size: 20px;
    text-decoration: none;
    outline: none;
    border: solid 4px #00a4ff;
    border-radius: 100px;
    cursor: pointer;
    background-color: #00a4ff;
    transition: all 0.2s ease-in-out;
    color: #ffffff;
    padding: 0px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 50px;
    &:hover {
      background-color: #ffffff;
      transition: all 0.2s ease-in-out;
      color: #00a4ff;
    }
  }
`;

export const TestWrapper1 = styled.div`

`;

export const TestWrapper2 = styled.div`
 
`;

