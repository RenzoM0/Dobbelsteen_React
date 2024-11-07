import React, { useState } from 'react';
import diceImage from '../assets/dobbelsteen.png';
import lingoImage from '../assets/Lingo.png';
import Dobbelsteen from './Dobbelsteen';
import Lingo from './Lingo'

const aantalDobbelstenen = 2; // Aantal dobbelstenen

function Options() {
    // State voor het tonen van de Dobbelsteen component
    const [showDobbelsteen, setShowDobbelsteen] = useState(false);
    // State voor het tonen van het Lingo spel
    const [showLingo, setShowLingo] = useState(false); 

    // Zet de state om de Dobbelsteen component weer te geven
    const startDobbelsteenClick = () => {
        setShowDobbelsteen(true); 
    };
    // Zet de state om het Lingo component weer te geven
    const startLingoClick = () => {
        setShowLingo(true); 
    };

    if (showDobbelsteen) {
        return (
            <div className="dobbelstenen-container">
                {Array.from({ length: aantalDobbelstenen }, (_, index) => (
                    <Dobbelsteen key={index + 1} id={index + 1} />
                ))}
            </div>
        );
    }

    if (showLingo) {
        return <Lingo />;
    }

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img
                                src={diceImage}
                                className="card-img-top"
                                alt="Gooi dobbelstenen afbeelding"
                                style={{ height: '225px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <p className="card-text">Gooi dobbelstenen.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={startDobbelsteenClick}>Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img
                                src={lingoImage}
                                className="card-img-top"
                                alt="Speel LINGO afbeelding"
                                style={{ height: '225px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <p className="card-text">Speel LINGO.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-primary" onClick={startLingoClick}>Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Options;