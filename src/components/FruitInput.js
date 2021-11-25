import React, {useState} from 'react';
import FruitCounter from "./subcomponents/FruitCounter";
import Button from "./subcomponents/Button";
import "./FruitInput.css"

const FruitInput = () => {
    const [amountStrawberries, setAmountStrawberries] = useState(0);
    const [amountBananas, setAmountBananas] = useState(0);
    const [amountKiwis, setAmountKiwis] = useState(0);
    const [amountAples, setAmountAples] = useState(0);
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