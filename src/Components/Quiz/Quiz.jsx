import React, { useState } from "react";
import "./Quiz.scss";
import "../../Styles/index.scss";
import { resultInitalState } from "../../constant";
import Timer from "../Timer/Timer";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else setAnswer(false);
  };

  const onClickNext = ( finalAnswer ) => {
    setAnswerIndex(null);
    setShowTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => {
      setShowTimer(true);
    });
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="container">
      {!showResult ? (
        <>
          {showTimer && <Timer duration={10} onTimeUp={handleTimeUp} />}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question-no">/{questions.length}</span>

          <h2>{question}</h2>

          <ul>
            {choices.map((answer, index) => (
              <li
                key={answer}
                onClick={() => onAnswerClick(answer, index)}
                className={answerIndex === index ? "selected-answer" : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIndex === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>Total Questions : {questions.length}</p>
          <p>Total Score : {result.score}</p>
          <p>Correct Answers : {result.correctAnswers}</p>
          <p>Wrong Answers : {result.wrongAnswers}</p>
          <button onClick={onTryAgain}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
