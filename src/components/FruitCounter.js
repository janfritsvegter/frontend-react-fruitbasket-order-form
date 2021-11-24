import React from 'react';
import Button from "./Button";
import './Fruitcounter.css';

function FruitCounter({name, icon, amount, onClickFunction}) {
    return (
        <div className="fruit">
            <p>{icon}</p>
            <p>{name}</p>
            <Button
                onClickFunction={() => onClickFunction(-1)}
                disabled={amount === 0 ? true : false}
            >
                -
            </Button>
            <p>{amount}</p>
            <Button
                 onClickFunction={() => onClickFunction(+1)}
            >
                +
            </Button>
        </div>
    );
};

export default FruitCounter;