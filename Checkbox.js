import { useState } from "react";

export default function Checkbox({initialState}) {
    const[active, setActive] = useState(initialState);

    const handleToggle = () => {
        setActive((estado) => !estado); //muda o estado, tipo liga e desliga
    };

    return (
        <div>
            <button onClick={handleToggle}>Inverter Valor</button>
            <p>{active ? "Ativo" : "Inativo"}</p>
        </div>
    );
  };

  /*
Cria um Componente React Checkbox:

O componente Checkbox deve ter:

Um state que guarda um booleano e é inicializado com o valor da prop initialState.
Um botão que inverte o valor do state
Um elemento textual com o conteúdo "Ativo" quando o valor do state é true e "Inativo" quando o valor é false.

*/