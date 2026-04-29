import ReaproveitarComponents from "./ReaproveitarComponents";

const TemplateExpression = () => {
    

    const data = {
        name: "Lucas",
        email: "lucascorrea@gmail.com",
        profissao: "Programador",
    }


    return(
        <div>
            <p>Seu nome: {data.name}</p>
            <p>Seu email: {data.email}</p>
            <p>Sua profissão: {data.profissao}</p>

            <ReaproveitarComponents />  
        </div>
    )


}


export default TemplateExpression;