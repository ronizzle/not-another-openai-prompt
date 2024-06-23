import React from "react";

interface ResultsProps {
  questionsAndAnswers: string[];
}

const Results: React.FC<ResultsProps> = ({ questionsAndAnswers }) => {
  return (
    <div className={"App-results"}>
      <h3>Answers:</h3>
      <ul>
        {questionsAndAnswers.map((result, index) => {
          return <li key={index}>{result}</li>;
        })}
      </ul>
    </div>
  );
};

export default Results;
