import { useState } from "react"

const InputUseState = () => {

    const [nome, setNome] = useState();

  return (
    <div>
        <input 
        type="text"
        placeholder="Digite seu nome: "
        onChange={(event) => setNome(event.target.value)}/>

        <p>Seu nome é: {nome}</p>
        
    </div>
  )
}

export default InputUseState