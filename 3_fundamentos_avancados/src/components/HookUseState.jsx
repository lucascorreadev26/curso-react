import { useState } from "react"

const HookUseState = () => {
    
    const [cont, setCont] = useState(0); 
    
    return (
        <div>
            <h2>Valor: {cont}</h2>
            <button onClick={() => setCont(cont + 1)}>Aumentar</button>
        </div>
    )
}

export default HookUseState