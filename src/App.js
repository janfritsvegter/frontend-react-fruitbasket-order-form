import React, {useState} from 'react';
import './App.css';
import FruitInput from "./components/FruitInput";
import DataInput from "./components/DataInput";

// import Button from "./components/Button"
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

    const [termsAndConditions, togleTermsAndConditions] = useState(false);
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [ageValue, setAgeValue] = useState(18);
    const [postalCodeValue, setPostalCodeValue] = useState("");
    const [deliveryFrequentieValue, setDeliveryFrequentieValue] = useState("");
    const [deliveryTimeValue, setDeliveryTimeValue] = useState("");
    const [commentValue, setcommentValue] = useState("");

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitInput
                amountStrawberries={amountStrawberries}
                setAmountStrawberries={setAmountStrawberries}
                amountBananas={amountBananas}
                setAmountBananas={setAmountBananas}
                amountKiwis={amountKiwis}
                setAmountKiwis={setAmountKiwis}
                amountAples={amountAples}
                setAmountAples={setAmountAples}
            />
            <DataInput
                amountStrawberries={amountStrawberries}
                amountBananas={amountBananas}
                amountKiwis={amountKiwis}
                amountAples={amountAples}

                termsAndConditions={termsAndConditions}
                togleTermsAndConditions={togleTermsAndConditions}
                firstNameValue={firstNameValue}
                setFirstNameValue={setFirstNameValue}
                lastNameValue={lastNameValue}
                setLastNameValue={setLastNameValue}
                ageValue={ageValue}
                setAgeValue={setAgeValue}
                postalCodeValue={postalCodeValue}
                setPostalCodeValue={setPostalCodeValue}
                deliveryFrequentieValue={deliveryFrequentieValue}
                setDeliveryFrequentieValue={setDeliveryFrequentieValue}
                deliveryTimeValue={deliveryTimeValue}
                setDeliveryTimeValue={setDeliveryTimeValue}
                commentValue={commentValue}
                setcommentValue={setcommentValue}
            />

        </>
    );
}

export default App;
