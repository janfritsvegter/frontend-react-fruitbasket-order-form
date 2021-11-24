import React from 'react';
import "./Button.css"

function Button({children, onClickFunction, disabled}) {
    return (
        <button
            onClick={onClickFunction}
            disabled={disabled || false}
        >
            {children}
        </button>
    );
};

export default Button;