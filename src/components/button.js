import React from "react";

function Button({ text, isClickButton, handleClick }) {
    return(
        <button className={isClickButton ? 'click-button' : 'restart-button'} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button