import React from 'react';


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