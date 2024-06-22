import React from "react";

const Prompt = () => {

    const handleClick = () => {

    }

    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={() => handleClick()} >Ask</button>
            </div>
        </div>
    );
}

export default Prompt;