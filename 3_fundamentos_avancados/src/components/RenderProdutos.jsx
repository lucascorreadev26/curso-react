import { useState } from "react"

const RenderProdutos = () => {
    // Renderizar uma lista de produtos

    //Criar a lista de produtos 
    const [listaProdutos] = useState(["Queijo Mussarela", "Presunto", "Mortadela", "Salame"]);

  return (
    <div>
        {/*Renderizar os produtos no template*/}

        {/* UL - Criar lista / Utilizar o metodo map no useState da lista / Passar index (produto) para o map iterar o Array*/}
        {/* LI - Criar o item da lista e passar o index iterado*/}
        <ul>{listaProdutos.map((produto, index) => (
            <li key={index} >{produto}</li>
        ))}</ul>
    </div>
  )
}

export default RenderProdutos