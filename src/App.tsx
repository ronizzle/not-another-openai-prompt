import React, { useState } from "react";
import { questionAndAnswerType } from "./api/types";
import Header from "./components/commons/Header";
import Prompt from "./components/commons/Prompt";
import Results from "./components/commons/Results";
import "./App.css";

const App = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<questionAndAnswerType[]>([]);
  const [questionText, setQuestionText] = useState("");
  const [isPromptButtonEnabled, setIsPromptButtonEnabled] = useState<boolean>(true);
  const [tempQuestion, setTempQuestion] = useState<string | null>(null);
  const [tempAnswer, setTempAnswer] = useState<string | null>(null);

  const promptClicked = async (question: string) => {
    const response = await fetch(
      `http://127.0.0.1:8000/ask-realtime?question=${question}`,
    );

    if (!response.body) {
      throw new Error("ReadableStream not supported");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let answer = "";
    setTempQuestion(question);

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunk = decoder.decode(value, { stream: true });
      answer = `${answer} ${chunk}`;
      setTempAnswer(answer);
    }

    if (done) {
      setQuestionsAndAnswers([
        ...questionsAndAnswers,
        { answer: answer, question: question },
      ]);

      setIsPromptButtonEnabled(true);
      setQuestionText("");
      setTempAnswer(null);
      setTempAnswer(null);
    }
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
      <Results
        tempQuestion={tempQuestion}
        tempAnswer={tempAnswer}
        questionsAndAnswers={questionsAndAnswers}
      ></Results>
    </div>
  );
};

export default App;
