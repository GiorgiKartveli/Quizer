// import userEvent from "@testing-library/user-event";
import React from "react";
import { createContext, useReducer } from "react";
import questions from "../TopicsData/ArtTopicData";
import { shuffleAnswers } from "../AnswerHelper";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCounter: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  restart: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS": {
      const currentTopic = action.payload;
      return {
        ...state,
        questions: currentTopic,
        answers: shuffleAnswers(currentTopic[state.currentQuestionIndex]),
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCounter =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCounter + 1
          : state.correctAnswerCounter;

      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCounter,
        currentQuestionIndex,
        showResults,
        answers,
      };
    }

    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return {
        ...initialState,
        restart: state.restart + 1,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
