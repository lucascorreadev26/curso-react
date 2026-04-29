const MyEvent = () => {

    // JS
    const HandleMensagemConsole = () => {
        console.log("Botão funcionou");
    }

    const HandleImparOuPar = (num) => {

        if(num % 2 == 0){
            return <h1>Você digitou um número PAR</h1>
        }else{
            return <h1>Você digitou um número IMPAR</h1>
        }

    }


    // JSX
    return (
        <div>
            {/* Evento Aula 1*/}
            <div>
                <button onClick={HandleMensagemConsole} >Clique Aqui!</button>
            </div>

            {/* Evento Aula 2*/}
            <div>
                <button onClick={() => {console.log("Clicou Aula 2!")}} >Clique aqui tambem!</button>
            </div>

            {/* Evento Aula 3*/}
            <div>
                {HandleImparOuPar(1)}
                {HandleImparOuPar(2)}
            </div>

        </div>

    )



}


export default MyEvent;