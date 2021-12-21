import styled from "styled-components";

export const BlogsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BlogWrapper = styled.div`
    width: 450px;
    margin: auto;
    position: relative;
    padding: 10px;
`;

export const BlogImg = styled.img`
    width: 450px;
    height: 268px;
    object-fit: cover;
`;

export const BlogDate = styled.h4`
    position: absolute;
    left: 20px;
    top: 230px;
    color: #ffffff;
    background-image: linear-gradient(to bottom left, #25eab3, #00a4ff);
    border-radius: 7px;
    padding: 4px 8px 4px 8px;
    font-size: 12px;
    font-weight: 400;
`;

export const BlogSource = styled.h4`

`;

export const BlogTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const BlogContent = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #999999;
    white-space: pre-line;
`;
