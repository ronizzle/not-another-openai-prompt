import React, { useState } from 'react';
import { questionAndAnswerType } from './api/types';
import apiClient from './api/client';
import Header from './components/commons/Header';
import Prompt from './components/commons/Prompt';
import Results from './components/commons/Results';
import './App.css';

const App = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    questionAndAnswerType[]
  >([]);
  const [questionText, setQuestionText] = useState("");
  const [isPromptButtonEnabled, setIsPromptButtonEnabled] =
    useState<boolean>(true);

  const promptClicked = (question: string) => {
    apiClient
      .get(`ask?question=${question}`)
      .then((response) => {
        setQuestionsAndAnswers([
          ...questionsAndAnswers,
          { answer: response.data.answer, question: question },
        ]);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsPromptButtonEnabled(true);
        setQuestionText("");
      });
  };

  return (
    <div className="App">
      <Header></Header>
      <Prompt
        promptClicked={promptClicked}
        isPromptButtonEnabled={isPromptButtonEnabled}
        setIsPromptButtonEnabled={setIsPromptButtonEnabled}
        questionText={questionText}
        setQuestionText={setQuestionText}
      ></Prompt>
      <Results questionsAndAnswers={questionsAndAnswers}></Results>
    </div>
  );
};

export default App;
