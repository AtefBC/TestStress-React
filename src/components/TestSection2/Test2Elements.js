import styled from "styled-components";

export const ScoreSection = styled.div`
  padding-top: 50px;
  width: 75%;
  margin: auto;
  text-align: center;
`;

export const ScoreP = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const ScoreText = styled.p`
  font-size: 35px;
  font-weight: 700;
  margin-top: -140px;
`;

export const ScoreFinal = styled.div`
  width: 350px;
  margin: auto;
  max-width: 350px;
`;

export const QuestionContainer = styled.div`
  padding-top: 50px;
  width: 75%;
  margin: auto;
  text-align: center;
`;

export const QASection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
`;

export const QuestionSection = styled.h3`
  text-align: left;
`;

export const QuestionCount = styled.h4``;

export const QuestionIntro = styled.p`
  margin: 30px 0px;
  font-size: 18px;
  > span {
    font-weight: 700;
  }
`;

export const QuestionText = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  > button {
    height: 30px;
    width: 200px;
    margin-bottom: 5px;
    border-style: none;
    background-image: linear-gradient(to bottom left, #25eab3, #00a4ff);
    color: #ffffff;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-image: linear-gradient(to top left, #00a4ff, #25eab3);
    }
    &:focus {
      outline: none;
    }
  }
`;

export const ScoreMessage = styled.p`
  margin-top: 50px;
  font-weight: 500;
  font-size: 16px;
`;

export const ScoreMsg = styled.p`
  margin-top: 50px;
  font-weight: 500;
  font-size: 16px;
`;
