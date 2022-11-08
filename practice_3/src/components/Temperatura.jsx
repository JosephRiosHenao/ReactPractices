import { startTransition, useState } from "react";
import Alta from "./Alta";
import Bajo from "./Bajo";


const Temperatura = () => {
    const [temp, setTemp] = useState(30)
    const upTemp = () => setTemp(temp+10)
    const downTemp = () => setTemp(temp-10)
    return(
        <div>
            <h1>La temperatura es: {temp}</h1>
            { temp>40 ? <Alta/> : <Bajo/>}
            <button onClick={upTemp}>Subir temperatura</button><button onClick={downTemp}>Bajar temperatura</button>
        </div>
    )
}  

export default Temperatura




