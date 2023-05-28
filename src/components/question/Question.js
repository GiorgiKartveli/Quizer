import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Answer from "../answer/Answer";
import classes from "./Question.module.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className={classes.question_container}>
      <div className={classes.question}>{currentQuestion.question}</div>
      <div className={classes.answers}>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
