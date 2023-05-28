import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Question from "../question/Question";
import classes from "./Quiz.module.css";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  if (!quizState.questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.quiz}>
      {quizState.showResults && (
        <div className={classes.results}>
          <div className={classes.congratulations}>Congratulations!</div>
          <div className={classes.results_info}>
            <div>You Finished The Quiz!</div>
            <div>
              You got {quizState.correctAnswerCounter} correct Answer from{" "}
              {quizState.questions.length}
            </div>
            <div>
              <div
                className={classes.next__button}
                onClick={() => dispatch({ type: "RESTART" })}
              >
                Try Again
              </div>
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className={classes.score}>
            Question {quizState.currentQuestionIndex + 1} /{" "}
            {quizState.questions.length}
          </div>
          <Question />
          <div
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            className={classes.next__button}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
