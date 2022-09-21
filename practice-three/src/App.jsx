import './App.css';
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0)
  const aumentarContador = () => setContador(contador+1)
  const disminuirContador = () => setContador(contador-1)
  return (
    <div>
      <h1>El contador es: {contador}</h1>
      <button onClick={aumentarContador}>Aumentar</button>
      <button onClick={disminuirContador}>Disminuir</button>
    </div>
  );
}

export default App;
