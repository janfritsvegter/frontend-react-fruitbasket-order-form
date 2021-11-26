import React from 'react';
import FruitCounter from "./subcomponents/FruitCounter";
import Button from "./subcomponents/Button";
import "./FruitInput.css"


const FruitInput = ({amountStrawberries,setAmountStrawberries,amountBananas,setAmountBananas,
                        amountKiwis,setAmountKiwis,amountAples,setAmountAples}) => {

    function changeStrawberries(input) {
        setAmountStrawberries(amountStrawberries + input);
    }
    function changeBananas(input) {
        setAmountBananas(amountBananas + input);
    }
    function changeKiwis(input) {
        setAmountKiwis(amountKiwis + input);
    }
    function changeAples(input) {
        setAmountAples(amountAples + input);
    }

    function resetVallues() {
        setAmountStrawberries(0);
        setAmountBananas(0);
        setAmountAples(0);
        setAmountKiwis(0);
    }

    return (
        <>
            <FruitCounter
                name="Aardbeien"
                icon="🍓"
                amount={amountStrawberries}
                onClickFunction={changeStrawberries}
            />
            <FruitCounter
                name="Bananen"
                icon="🍌"
                amount={amountBananas}
                onClickFunction={changeBananas}
            />
            <FruitCounter
                name="Appels"
                icon="🍏"
                amount={amountAples}
                onClickFunction={changeAples}
            />
            <FruitCounter
                name="Kiwi's"
                icon="🥝"
                amount={amountKiwis}
                onClickFunction={changeKiwis}
            />
            <Button
                type="button"
                onClickFunction={resetVallues}
            >
                reset
            </Button>
        </>
    );
};

export default FruitInput;