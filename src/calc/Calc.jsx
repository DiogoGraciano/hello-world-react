import { useState } from 'react';

const Calc = () => {

    let [result,setResult] = useState('');
    let [value1,setValue1] = useState(0);
    let [value2,setvalue2] = useState(0);

    let operator = "+";

    const handleCalc = () => {
        
        switch (operator) {
            case "+":
                setResult(parseFloat(value1) + parseFloat(value2));        
                break;
                
            case "-":
                setResult(parseFloat(value1) - parseFloat(value2));        
                break;
                
            case "*":
                setResult(parseFloat(value1) * parseFloat(value2));        
                break;
                
            case "/":
                setResult(parseFloat(value1) / parseFloat(value2));        
                break;
        
            default:
                setResult(0);
                break;
        }
    };

    const handleChangeInput = (event) => setValue1(event.target.value);
    const handleChangeInput2 = (event) => setvalue2(event.target.value);
    const handleChangeOperator = (event) => operator = event.target.value;

    return (
        <>
            <h1>Calculadora</h1>
            <input type="number" onChange={handleChangeInput} min={0}/>
            <select name="select" id="select-operation" onChange={handleChangeOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" onChange={handleChangeInput2} min={0}/>
            <button onClick={handleCalc}>Calcular</button>
            {result && <p>{result}</p>}
        </>
    )
}

export default Calc;