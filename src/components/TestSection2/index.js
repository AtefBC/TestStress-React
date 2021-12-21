import React, { useState, useEffect } from "react";
import  db, {auth} from "../../firebase";
import {
  ScoreSection,
  ScoreP,
  ScoreFinal,
  ScoreText,
  QuestionContainer,
  QASection,
  QuestionSection,
  QuestionCount,
  QuestionIntro,
  QuestionText,
  AnswerSection,
  ScoreMessage,
  ScoreMsg
} from "./Test2Elements";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TestSection2() {
  // function for calculating the color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    // return an CSS hsl color string
    return "hsl(" + c + ", 100%, 50%)";
  };

  const questions = [
    {
      questionText:
        "Been upset because of something that happened unexpectedly?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
    {
      questionText:
        "Felt that you were unable to control important things in your life?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
    {
      questionText: "Felt nervous and stressed?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
    {
      questionText:
        "Felt confident about your ability to handle your personal problems?",
      answerOptions: [
        { answerText: "Never", answerValue: 4 },
        { answerText: "Almost Never", answerValue: 3 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 1 },
        { answerText: "Very Often", answerValue: 0 },
      ],
    },
    {
      questionText: "Felt that things were going your way?",
      answerOptions: [
        { answerText: "Never", answerValue: 4 },
        { answerText: "Almost Never", answerValue: 3 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 1 },
        { answerText: "Very Often", answerValue: 0 },
      ],
    },
    {
      questionText:
        "Found that you could NOT cope with all the things you had to do?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
    {
      questionText: "Been able to control irritations in your life?",
      answerOptions: [
        { answerText: "Never", answerValue: 4 },
        { answerText: "Almost Never", answerValue: 3 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 1 },
        { answerText: "Very Often", answerValue: 0 },
      ],
    },
    {
      questionText: "Felt that you were on top of things?",
      answerOptions: [
        { answerText: "Never", answerValue: 4 },
        { answerText: "Almost Never", answerValue: 3 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 1 },
        { answerText: "Very Often", answerValue: 0 },
      ],
    },
    {
      questionText:
        "Been angered because of things that happened that were out of your control?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
    {
      questionText:
        "Felt difficulties were piling up so high that you could not overcome them?",
      answerOptions: [
        { answerText: "Never", answerValue: 0 },
        { answerText: "Almost Never", answerValue: 1 },
        { answerText: "Sometimes", answerValue: 2 },
        { answerText: "Fairly Often", answerValue: 3 },
        { answerText: "Very Often", answerValue: 4 },
      ],
    },
  ];

  //DataBase:
  const [UsersScore, setUsersScore] = useState([]);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsersScore(
        snapshot.docs.map((doc) => ({
          uid: doc.id,
          score: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddScore = (answerValue) => {
    const ScoreToAdd = (score + answerValue)*2.5;
    const user = auth.currentUser;
    db.collection("users").doc(user.uid).set({
      uid: user.uid,
      photo: user.photoURL,
      email: user.email,
      displayName: user.displayName,
      score: ScoreToAdd
    });
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answerValue) => {
    setScore(score + answerValue);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      handleAddScore(answerValue);
    }
  };

  return (
    <>
      {showScore ? (
        <ScoreSection>
          <ScoreP>Your stress score</ScoreP>
          <ScoreFinal>
            <CircularProgressbar
              value={score * 2.5}
              text={`${score * 2.5} %`}
              circleRatio={
                0.7
              } /* Make the circle only 0.7 of the full diameter */
              styles={{
                trail: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                path: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                  stroke: calcColor(score * 2.5, 120, 0),
                },
                text: {
                  fill: calcColor(score * 2.5, 120, 0),
                },
              }}
              strokeWidth={10}
            />
          </ScoreFinal>
          <ScoreText>
            {score < 14 ? `Low` : score < 27 ? `Moderate` : `HIGH`}{" "}
          </ScoreText>
          <ScoreMsg>
            {score < 14 ? `You a person who knows how to manage his stress, who knows how to adapt and for whom there are always solutions.` : score < 27 ? `You a generally good person when it comes to dealing with stress, but there are a number of situations she cannot handle. Sometimes, you are animated by a feeling of helplessness which leads to emotional disturbances. You can break out of this sense of helplessness by learning strategies for change.` : `Life is a perpetual threat to you: you feel like you are going through most situations and that you can do nothing but endure them. This strong feeling of helplessness linked to your representation of life can tip you into illness. Work on your thought pattern is desirable as well as a change in the way you reacts.`}{" "}
          </ScoreMsg>
          <ScoreMessage>Check your <b>PROFILE</b> for more informations.</ScoreMessage>
        </ScoreSection>
      ) : (
        <QuestionContainer>
          <QuestionCount>
            Step {currentQuestion + 1} of {questions.length}
          </QuestionCount>
          <QuestionIntro>
            In the <span>LAST MONTH</span>, how often have you:
          </QuestionIntro>
          <QASection>
            <QuestionSection>
              <QuestionText>
                {questions[currentQuestion].questionText}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.answerValue)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </AnswerSection>
          </QASection>
        </QuestionContainer>
      )}
    </>
  );
}

export default TestSection2;
