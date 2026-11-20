//React não consegue ver a alteração do componente sem 

import { useState } from "react"; //vem direto da biblioteca



export const Contador = () => {
    
    const [curtidas, setCurtidas] = useState(0) //primeira palavra guarda o resultado atual, segunda coloca o resultado

    return (
        <button className="btn btn-primary" onClick={() => setCurtidas (curtidas + 1) }> 
        Curtidas: {curtidas}
        </button>
    );
};