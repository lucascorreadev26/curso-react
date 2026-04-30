import { useState } from "react"


const RenderCondicionalSimples = () => {

    const [podeTirarCnh] = useState(false);

  return (
    <div>
        <h2>Você pode tirar CNH?</h2>
        {podeTirarCnh && <p>Posso tirar CHN</p>}
        {!podeTirarCnh && <p>Não posso tirar CNH</p>}
    </div>
  )
}

export default RenderCondicionalSimples