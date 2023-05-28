import React, { useContext, useEffect } from "react";
import Quiz from "../../components/quiz/Quiz";
import { QuizContext } from "../../context/quiz";
import questions from "../../TopicsData/MathTopicData";

const MathTopic = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({ type: "SET_QUESTIONS", payload: questions });
  }, [dispatch, quizState.restart]);

  return (
    <>
      <h1>MathTopic page</h1>
      <Quiz />
    </>
  );
};

export default MathTopic;
