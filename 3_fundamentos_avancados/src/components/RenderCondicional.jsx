import { useState } from "react"

const RenderCondicional = () => {

    const [name, setName] = useState("Lucas");
  return (
    <div>
        {name === "Lucas" ? (
            <p>Seu nome é Lucas.</p>
        ) : (
            <p>Agora seu nome é: {name}.</p>
        )}

        <button onClick={() => setName("Kelle")} >Mude o nome!</button>
    </div>
  )
}

export default RenderCondicional