import React from 'react';
import './InputField.css'
const InputField = ({id,label,type,name,size,value,onClickFunction,onChangeFunction,min,max}) => {
    return (
        <div className="inputfield">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} value={value} size={size} onClick={onClickFunction} onChange={onChangeFunction} min={min} max={max}/>
        </div>
    );
};

export default InputField;