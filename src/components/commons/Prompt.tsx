import React from "react";

interface PromptProps {
  promptClicked: (txt: string) => void;
  isPromptButtonEnabled: boolean;
  setIsPromptButtonEnabled: (value: boolean) => void;
  questionText: string;
  setQuestionText: (value: string) => void;
}

const Prompt: React.FC<PromptProps> = ({
  promptClicked,
  isPromptButtonEnabled,
  setIsPromptButtonEnabled,
  questionText,
  setQuestionText,
}) => {
  const triggerPrompt = () => {
    promptClicked(questionText);
    setIsPromptButtonEnabled(false);
  };

  const handleClick = () => {
    triggerPrompt();
  };
  const handleTextareaChange = (value: string) => {
    setQuestionText(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      triggerPrompt();
    }
  };

  return (
    <div>
      <div className={"prompt-container"}>
        <textarea
          className={"textarea-100"}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleTextareaChange(event.target.value)
          }
          onKeyDown={handleKeyDown}
          value={questionText}
          placeholder={"Ask me a question"}
        ></textarea>

        <button
          className={"button-100"}
          onClick={() => handleClick()}
          disabled={!isPromptButtonEnabled}
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default Prompt;
