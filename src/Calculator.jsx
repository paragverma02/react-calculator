import React, { useState } from "react";

function Calculator() {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");


    const handlClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput ("");
        setResult("");
    };

    const handleEquals = () => {
        try {
            const evaluatedResult = eval(input);
            setResult(evaluatedResult);
        } catch (error) {
            setResult("Error");
        }
    };
    

    return (<>
        <div className="calculator">
            <div className="display">
                <div className="input">{input || "0"}</div>
                <div className="result">{result ? `=${result}` : ""}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handlClick("1")}>1</button>
                <button onClick={() => handlClick("2")}>2</button>
                <button onClick={() => handlClick("3")}>3</button>
                <button onClick={() => handlClick("+")}>+</button>

                <button onClick={() => handlClick("4")}>4</button>
                <button onClick={() => handlClick("5")}>5</button>
                <button onClick={() => handlClick("6")}>6</button>
                <button onClick={() => handlClick("-")}>-</button>

                <button onClick={() => handlClick("7")}>7</button>
                <button onClick={() => handlClick("8")}>8</button>
                <button onClick={() => handlClick("9")}>9</button>
                <button onClick={() => handlClick("*")}>*</button>

                <button onClick={handleClear}>C</button>
                <button onClick={() => handlClick("0")}>0</button>
                <button onClick={handleEquals}>=</button>
                <button onClick={() => handlClick("/")}>/</button>
            </div>
        </div>
    </>  );
}

export default Calculator;