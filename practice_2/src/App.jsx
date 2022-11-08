import reactLogo from './assets/react.svg';
import './App.css';

import { useState } from 'react';



const App = () => {
  const [contador, setContador] = useState(0);
  const nombre = 'Joseph';
  const upContador = () => {setContador(contador+1);}
  const downContador = () => {setContador(contador-1);}

  return (
    <div className="App">
        <h1>Hola {nombre}</h1>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <br />
        <button onClick={downContador}>-</button>
        <h2>{ contador }</h2>
        <button onClick={upContador}>+</button>
    </div>
  )
}

export default App
