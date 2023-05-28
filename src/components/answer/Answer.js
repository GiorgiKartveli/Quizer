import React from "react";
import classes from "./Answer.module.css";

const Answer = ({ answerText, index, onSelectAnswer }) => {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className={classes.answer} onClick={() => onSelectAnswer(answerText)}>
      <div className={classes.answer_letter}>{letters[index]}</div>
      <div className={classes.answer_text}>{answerText}</div>
    </div>
  );
};

export default Answer;
