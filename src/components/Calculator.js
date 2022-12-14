import React from "react";
import "../App.css";
import { Fragment } from "react";
import { useState, useEffect } from "react";

function Calculator() {
    let [firstNumber, setFirstNumber] = useState(0);
    let [secondNumber, setSecondNumber] = useState(0);
    let [inputValue, setInputValue] = useState(0);
    let [result, setResult] = useState(0);

    const changeFirstNumber = (e) => {
        setFirstNumber(+e.target.value);
    };

    const changeSecondNumber = (e) => {
        setSecondNumber(+e.target.value);
    };

    const handleSubmit = (e) => {
        // prevent form submission
        e.preventDefault();

        // check inputValue and perform the corresponding operation

    };
    useEffect(() => {
        if (inputValue === "1") {
            // add
            setResult(firstNumber + secondNumber);
        } else if (inputValue === "2") {
            // subtract
            setResult(firstNumber - secondNumber);
        } else if (inputValue === "3") {
            // multiply
            setResult(firstNumber * secondNumber);
        }
    }, [firstNumber, secondNumber, result, inputValue]);


    return (
        <Fragment>
            <div className="container">
                <br />
                <h1 className="h1 mb-3">Realtime Calculator</h1><br />
                <form action="">
                    <div className="row">
                        <div className="col-md-4">
                            <input
                                type="number"
                                value={firstNumber}
                                onChange={(e) => changeFirstNumber(e)}
                                className="form-control form-control-lg my-2"
                                placeholder="Default input"
                                aria-label="default input example"
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="number"
                                value={secondNumber}
                                onChange={(e) => changeSecondNumber(e)}
                                className="form-control form-control-lg my-2"
                                placeholder="Default input"
                                aria-label="default input example"
                            />
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select form-select-lg my-2"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                aria-label=".form-select-lg example"
                            >
                                <option selected>Operation</option>
                                <option value="1">Add</option>
                                <option value="2">Subtract</option>
                                <option value="3">Multiply</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="col-md-12 my-2">
                    <h3 className="h3"><b>Result: {result}</b></h3>
                </div>
            </div>
        </Fragment>
    );
}


export default Calculator;