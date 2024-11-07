import React, { useState } from 'react';

function Dobbelsteen({ id }) {
    const [waarde, setWaarde] = useState(1); // Standaard 1 dobbelsteen

    // Genereert een getal van 1 t/m 6
    const gooiDobbelsteen = () => {
        const nieuweWaarde = Math.floor(Math.random() * 6) + 1;
        setWaarde(nieuweWaarde);
    };

    return (
        <div className="d-flex flex-column align-items-center border rounded p-4 shadow-sm" style={{ margin: '20px' }}>
            <h2 className="mb-3">Dobbelsteen {id}: <span className="badge bg-primary">{waarde}</span></h2>
            <button onClick={gooiDobbelsteen} className="btn btn-success">
                Gooi Dobbelsteen {id}
            </button>
        </div>
    );
}

export default Dobbelsteen;