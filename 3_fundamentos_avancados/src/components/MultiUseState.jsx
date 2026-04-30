import { useState } from "react"


const MultiUseState = () => {

    const [numero, setNumero] = useState(1);

  return (
    <div>
        <h3>Valor: {numero}</h3>
        <button onClick={() => setNumero(numero * 2)} >Dobrar Valor</button>
    </div>
  )
}

export default MultiUseState