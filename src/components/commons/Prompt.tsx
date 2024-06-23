import React, { useState } from "react";

interface PromptProps {
  promptClicked: (txt: string) => void;
  isPromptButtonEnabled: boolean;
  setIsPromptButtonEnabled: (value: boolean) => void;
}

const Prompt: React.FC<PromptProps> = ({
  promptClicked,
  isPromptButtonEnabled,
  setIsPromptButtonEnabled,
}) => {
  const [questionText, setQuestionText] = useState("");
  const handleClick = () => {
    promptClicked(questionText);
    setIsPromptButtonEnabled(false);
  };
  const handleTextareaChange = (value: string) => {
    setQuestionText(value);
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextareaChange(event.target.value)
          }
        ></textarea>
      </div>
      <div>
        <button onClick={() => handleClick()} disabled={!isPromptButtonEnabled}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default Prompt;
