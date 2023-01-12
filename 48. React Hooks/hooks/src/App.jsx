import './App.css';
import { useState } from 'react';

function App() {
  // const geraNuotaika = useState(true)[0];
  // const setgeraNuotaika = useState(true)[0];

  const [geraNuotaika, setgeraNuotaika] =  useState(true);

  const gnh = () => {
    setgeraNuotaika(!geraNuotaika);
    console.log(geraNuotaika);

  }

  return (
    <>
    <h1>Labas rytas</h1>
    <button onClick={gnh}>Nuotaikos reguliatorius</button>
    <p>Šiandien yra {geraNuotaika? 'gražus' : 'bjaurus'} rytas</p>
    { !geraNuotaika &&
      <small>Eik pamiegok daugiau :P  </small>
    }
    </>
  );
}

export default App;
