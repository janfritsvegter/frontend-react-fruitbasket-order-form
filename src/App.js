import React, {useState} from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import Button from "./components/Button"
// we gaan eerst 1 fruitcounter werkend maken voordat we de rest gaan doen.
// dat aardbeiending
// welke html elementen hebben we nodig
// [ ]  titel
// [ ]  button -
// [ ] button +
// [ ]  p element met aantal
// [ ] button met reset.
// [ ]  state met een set counter
// [ ]  wat is het allereerste wat we moeten doen voordat we state kunnen gebruiken import useState methode uit React
// [ ]  maak een statevariabele plus state setter functie voor de aardbeicounter state initializeren
// [ ] Een event-listener op beide knoppen zetten (onClick)
//   [ ] plusbutton: de huidige hoeveelheio van aardbeien plus 1
//   [ ] minbutton : de huidige hoeveelheid van aardbeien moet - 1
//   [ ] We willen de min button disabelen als de hoeveelheid aardbeien op 0 staat.
// [ ] geef de hoeveelheid aardbeien weer in een p element tussen de buttons
// [ ] De reset moet hoeveelheid aardbeien op 0 zetten.
// [ ] Schrijf een reset functie die de state waarde van alle counters op 0 zet.
// [ ] een eventlistener op de reset button


function App() {
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
            <h1>Fruitmand bezorgservice</h1>
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
}

export default App;
