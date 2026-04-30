import { useState } from "react"


const RenderAnimais = () => {

    const [animais] = useState(["Cachorro", "Gato", "Papagaio", "Tartaruga"])

  return (
    <div>
        <ul>{animais.map((animal, index) => (
            <li key={index} >{animal}</li>
        ))}</ul>
    </div>
  )
}

export default RenderAnimais