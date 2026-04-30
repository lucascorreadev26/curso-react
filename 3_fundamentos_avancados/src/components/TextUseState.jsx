import { useState } from "react"


const TextUseState = () => {

    // Verificar a idade e mostrar no console log menor ou maior de idade

    const [idade, setIdade] = useState(0);

    const verificarIdade = () => {

        if(idade < 18){
            console.log("Menor de idade");
        }else{
            console.log("Maior de idade");
        }
    }


  return (
    <div>
        <input 
        type="number"
        placeholder="Digite sua idade: "
        onChange={(event) =>{ setIdade(Number(event.target.value)) }} />

        <button onClick={verificarIdade}>Verificar Idade</button>
    </div>
  )
}

export default TextUseState