import { useState } from "react";

function HelloWorld({name}){
    const [nome, setNome] = useState(name)
    
    return(
        <div>
            <h1>Hello, {nome ? nome : "stranger"}.</h1>
        </div>
        
        
    )
}
//nome é valido? se sim, recebe nome. Senao, stranger

export default HelloWorld
