import React, { useState } from 'react';

// Mogelijke antwoorden
const Woordenlijst = ["appel", "banaan", "citro", "drama", "etter, gleuf, bouwt, mugje, pitch, kluif, expat"];

function Lingo() {
    const [correctWoord, setCorrectWoord] = useState(Woordenlijst[Math.floor(Math.random() * Woordenlijst.length)]); // Kies een willekeurig woord
    const [huidigePoging, setHuidigePoging] = useState('');
    const [pogingen, setPogingen] = useState([]);
    const [ronde, setRonde] = useState(1);

    const handelInvoer = (event) => {
        const { value } = event.target;
        if (value.length <= 5) {
            setHuidigePoging(value.toLowerCase());
        }
    };

    // Pogingen vergelijken met antwoord
    const controleerWoord = () => {
        if (huidigePoging.length === 5) {
            setPogingen([...pogingen, huidigePoging]);
            setHuidigePoging('');
            if (huidigePoging === correctWoord) {
                alert('Gefeliciteerd! Je hebt het woord geraden!');
                return;
            }
            if (ronde < 5) {
                setRonde(ronde + 1);
            } else {
                // Spel verloren
                alert(`Helaas, je hebt het woord niet geraden. Het juiste woord was: ${correctWoord}`);
            }
        } else {
            alert('Voer een geldig 5-letterig woord in.');
        }
    };

    // Spel resetten
    const resetSpel = () => {
        setCorrectWoord(Woordenlijst[Math.floor(Math.random() * Woordenlijst.length)]);
        setHuidigePoging('');
        setPogingen([]);
        setRonde(1);
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Lingo Spel</h2>
            <h3>Ronde {ronde} van 5</h3>
            <div className="mb-4">
                {pogingen.map((poging, index) => (
                    <div key={index}>
                        <h5>{poging}</h5>
                        <p className="text-muted">{feedback(poging, correctWoord)}</p> {/* Geven feedback over de poging */}
                    </div>
                ))}
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={huidigePoging}
                    onChange={handelInvoer}
                    maxLength="5"
                    placeholder="Voer je 5-letterig woord in..."
                />
                <button className="btn btn-outline-success" onClick={controleerWoord}>Controleer</button>
                <button className="btn btn-outline-danger" onClick={resetSpel}>Reset Spel</button>
            </div>
        </div>
    );
}

function feedback(geraden, correct) {
    let result = '';
    for (let i = 0; i < geraden.length; i++) {
        if (geraden[i] === correct[i]) {
            result += `${geraden[i]} (goed) `; // Juiste letter en plek
        } else if (correct.includes(geraden[i])) {
            result += `${geraden[i]} (deelt) `; // Juiste letter verkeerde plek
        } else {
            result += `${geraden[i]} (fout) `; // Verkeerde letter en plek
        }
    }
    return result;
}

export default Lingo;