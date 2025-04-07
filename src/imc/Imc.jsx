import { useState } from 'react';

const Imc = () => {

    let [result,setResult] = useState('');
    let [peso,setPeso] = useState(0);
    let [altura,setAltura] = useState(0);

    const handleCalc = () => {

        let imc = parseFloat(parseFloat(peso)/(parseFloat(altura) ^ 2));

        console.log(imc > 1);
        
        if (imc < 16)
            setResult("Magreza Grave: "+imc);    
        else if(imc >= 16 && imc < 17)
            setResult("Magreza moderada: "+imc);        
        else if(imc >= 17 && imc < 18.5)
            setResult("Magreza leve: "+imc);
        else if(imc >= 18.5 && imc < 25)
            setResult("Saudavel: "+imc);        
        else if(imc >= 25 && imc < 30)
            setResult("Sobrepeso: "+imc);        
        else if(imc >= 30 && imc < 35)
            setResult("Obesidade Grau I: "+imc);        
        else if(imc >= 35 && imc < 40)
            setResult("Obesidade Grau II (grave): "+imc);        
        else if(imc >= 40)
            setResult("Obesidade Grau III (morbida): "+imc);
        else
            setResult("Erro ao execultar calculo");
    };

    const handleChangeInputPeso = (event) => setPeso(event.target.value);
    const handleChangeInputAltura = (event) => setAltura(event.target.value);

    return (
        <>
            <h1>Calculadora IMC</h1>
            <label htmlFor="peso">Peso: </label>
            <input id="peso" type="number" onChange={handleChangeInputPeso} min={0} max={3}/>
            <label htmlFor="altura">Altura: </label>
            <input id="altura" type="number" onChange={handleChangeInputAltura} min={0}/>
            <button onClick={handleCalc}>Calcular</button>
            {result && <p>{result}</p>}
        </>
    )
}

export default Imc;