const Challenge = () => {

    const num1 = 30;
    const num2 = 78;

    return(

        <div>
            <h1>Numeros do componente Challenge:</h1>
            <p>Numero 1: {num1}</p>
            <p>Numero 2: {num2}</p>
            <button onClick={() => {console.log(num1 + num2)}}>Some os Números!</button>
        </div>
    )
}



export default Challenge;