import { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(0)

function addContador(toAdd){
    if(toAdd == 1 || (toAdd == -1 && contador > 0)){
        setContador(contador + toAdd)
    }
}

    return(
        <div>
            <div role="main">
                <p>{contador}</p>
                <button onClick={() => addContador(1)}>+</button>
                <button disabled={contador <= 0} onClick={() => addContador(-1)}>-</button>
            </div>
        </div>
    )
}

export default Contador;
