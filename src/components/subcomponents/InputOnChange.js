import React from 'react';

const InputOnChange = ({id,label,type,name,size,onChangeFunction}) => {
    return (
        <div className="inputfield">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} size={size} onChange={onChabgeFunction}/>
        </div>
    );
};

export default InputOnChange;