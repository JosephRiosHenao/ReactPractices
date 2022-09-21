import { useState } from "react";

const Listado = () => {
    const [listado, setListado] = useState([0,1,2,3,4,5,6,7,8,9])
    return (
        <div>
            <ul>
                {
                    listado.map((item,index)=><li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default Listado