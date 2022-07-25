import React from 'react';
import Button from './components/button';
import Contador from './components/Contador.js';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciar = () => {
    setNumClics(0)
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <h1>CONTADOR</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Button
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
