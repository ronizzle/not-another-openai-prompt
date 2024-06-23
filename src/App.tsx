import React, { useState } from "react";
import "./App.css";
import Header from "./components/commons/Header";
import Prompt from "./components/commons/Prompt";
import Results from "./components/commons/Results";
import apiClient from "./api/client";

const App = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<string[]>([]);
  const [isPromptButtonEnabled, setIsPromptButtonEnabled] =
    useState<boolean>(true);

  const promptClicked = (question: string) => {
    apiClient
      .get(`ask?question=${question}`)
      .then((response) => {
        setQuestionsAndAnswers([...questionsAndAnswers, response.data.answer]);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsPromptButtonEnabled(true);
      });
  };

  return (
    <div className="App">
      <Header></Header>
      <Prompt
        promptClicked={promptClicked}
        isPromptButtonEnabled={isPromptButtonEnabled}
        setIsPromptButtonEnabled={setIsPromptButtonEnabled}
      ></Prompt>
      <Results questionsAndAnswers={questionsAndAnswers}></Results>
    </div>
  );
};

export default App;
