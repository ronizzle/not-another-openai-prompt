import React from 'react';
import { questionAndAnswerType } from '../../api/types';

interface ResultsProps {
  questionsAndAnswers: questionAndAnswerType[];
}

const Results: React.FC<ResultsProps> = ({ questionsAndAnswers }) => {
  return (
    <div className={"App-results"}>
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
