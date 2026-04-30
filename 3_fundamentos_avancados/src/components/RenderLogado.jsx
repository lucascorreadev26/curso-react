import { useState } from "react"


const RenderLogado = () => {

    const [userIsLogado] = useState(true);

  return (
    <div>
        {userIsLogado === true ? (
            <h3>Usuario Logado!</h3>
        ) : (
            <h3>Usuario não esta logado!</h3>
        )}
    </div>
  )
}

export default RenderLogado