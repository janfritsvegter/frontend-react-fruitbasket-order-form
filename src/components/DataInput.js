import React from 'react';
import InputField from "./subcomponents/InputField";


/*
### Randvoorwaarden formulier
* Het formulier bevat de volgende velden:
  * Voornaam
  * Achternaam
  * Leeftijd
  * Postcode
  * Selectbox met bezorgfrequentie. _Opties_: iedere week, om de week, iedere maand
  * Radiobuttons met tijdvak. _Opties_: overdag, 's avonds
  * Opmerking (textarea)
  * Akkoord met de voorwaarden (checkbox)
  * Verzendbutton
* Pas wanneer de gebruiker op verzenden drukt, worden de formulier-waardes én de fruit-waardes in de console gelogd!
 */
const DataInput = ({
                       amountStrawberries, amountBananas, amountKiwis, amountAples,
                       termsAndConditions, togleTermsAndConditions,
                       firstNameValue, setFirstNameValue,
                       lastNameValue, setLastNameValue,
                       ageValue, setAgeValue,
                       postalCodeValue, setPostalCodeValue,
                       deliveryFrequentieValue, setDeliveryFrequentieValue,
                       deliveryTimeValue, setDeliveryTimeValue,
                       commentValue, setcommentValue
                   }) => {
    const textFieldSize = 50;


    function handleTermsAndConditions() {
        togleTermsAndConditions(!termsAndConditions);
    }

    function submitForm(e) {
        e.preventDefault();
        console.log(`Het aantal aardbijen is ${amountStrawberries}`);
        console.log(`Het aantal bananen is ${amountBananas}`);
        console.log(`Het aantal kiwi's is ${amountKiwis}`);
        console.log(`Het aantal appels is ${amountAples}`);
        console.log(`De voornaam is ${firstNameValue}`);
        console.log(`De achternaam is ${lastNameValue}`);
        console.log(`De leeftijd is ${ageValue}`);
        console.log(`De postcode is ${postalCodeValue}`);
        console.log(`De bezorgfrequentie is ${deliveryFrequentieValue}`);
        console.log(`De bezorgtijd is ${deliveryTimeValue}`);
        console.log(`Het commentaar is ${commentValue}`);
        if (termsAndConditions) {
            console.log(`De algemene voorwaarden zijn geaccepteerd`);
        } else {
            console.log(`De algemene voorwaarden zijn NIET geaccepteerd`);
        }
    }

    return (
        <form onSubmit={submitForm}>
            <InputField
                id="firstName"
                label="Voornaam"
                type="text"
                name="firstName"
                size={textFieldSize}
                value={firstNameValue}
                onChangeFunction={(e) => setFirstNameValue(e.target.value)}
            />
            <InputField
                id="lastName"
                label="Achternaam"
                type="text"
                name="lastName"
                size={textFieldSize}
                value={lastNameValue}
                onChangeFunction={(e) => setLastNameValue(e.target.value)}
            />
            <InputField
                id="age"
                label="Leeftijd"
                type="number"
                min={1}
                name="age"
                size={textFieldSize}
                value={ageValue}
                onChangeFunction={(e) => setAgeValue(e.target.value)}
            />
            <InputField
                id="postalCode"
                label="Postcode"
                type="text"
                name="postalCode"
                size={textFieldSize}
                value={postalCodeValue}
                onChangeFunction={(e) => setPostalCodeValue(e.target.value)}
            />
            <p>Bezorgfrequentie</p>
            <select id="deliveryFrequentie" onChange={(e) => setDeliveryFrequentieValue(e.target.value)}>
                <option value="onbekend">maak een keuze</option>
                <option value="iedere week">iedere week</option>
                <option value="om de week">om de week</option>
                <option value="iedere maand">iedere maand</option>
            </select>
            <div>
                <input type="radio" id="deliveryTimeDay" name="deliveryTime" value="overdag"
                       onClick={(e) => setDeliveryTimeValue(e.target.value)}/>
                <label htmlFor="deliveryTimeDay">Overdag</label>
                <input type="radio" id="deliveryTimeEvening" name="deliveryTime" value="'s avonds"
                       onClick={(e) => setDeliveryTimeValue(e.target.value)}/>
                <label htmlFor="deliveryTimeEvening">'s Avonds</label>
            </div>
            <p>{deliveryTimeValue}</p>
            <textarea name="comment" rows="5" cols={textFieldSize}
                      onChange={(e) => setcommentValue(e.target.value)}></textarea>
            <InputField
                id="termsAndConditions"
                label="Akkoord met de voorwaarden"
                type="checkbox"
                name="termsAndConditions"
                onClickFunction={handleTermsAndConditions}
            />
            <button type="submit" disabled={!termsAndConditions || ageValue<18 }>Verzend</button>
        </form>
    );
};

export default DataInput;

