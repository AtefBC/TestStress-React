import styled from "styled-components";

export const FaqContainer =styled.div`
    text-align: center;
    color: #2d2d2d;
    padding-top: 100px;
    padding-bottom: 65px;
    width: 85%;
    margin: auto;
`;

export const FaqWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin-top: 20px;
`;

export const FaqQWrapper = styled.div`
    width: 550px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const FaqQ = styled.h5`
    font-size: 22px;
    font-weight: 500;
`;

export const FaqA = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #aaaaaa;
`;