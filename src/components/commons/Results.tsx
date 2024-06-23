import React from "react";
import { questionAndAnswerType } from "../../api/types";

interface ResultsProps {
  tempQuestion: string | null;
  tempAnswer: string | null;
  questionsAndAnswers: questionAndAnswerType[];
}

const Results: React.FC<ResultsProps> = ({
  questionsAndAnswers,
  tempQuestion,
  tempAnswer,
}) => {
  return (
    <div className={"App-results"}>
      {tempAnswer && (
        <>
          <div className={"result-box"}>
            <div className={"result-box-question"}>{tempQuestion}</div>
            <div>--</div>
            <div className={"result-box-answer"}>{tempAnswer}</div>
          </div>
        </>
      )}

      {questionsAndAnswers
        .slice()
        .reverse()
        .map((questionsAndAnswer, index) => {
          return (
            <>
              <div className={"result-box"} key={index}>
                <div className={"result-box-question"}>
                  {questionsAndAnswer.question}
                </div>
                <div>--</div>
                <div className={"result-box-answer"}>
                  {questionsAndAnswer.answer}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Results;
