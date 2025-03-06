import {useEffect, useState} from "react";
import styled from "styled-components";

const Button = styled.button`
    align-items: center;
    color: white;
    width: 5vw;
    height: 5vh;
    border-radius: 10%;
    background-color: #156064ff;
    margin: 1vh auto;
    font-size: calc(6px + .5vw);
    font-family: "Lucida Console", sans-serif;
    min-width: 50px;
`

const ClearButton = styled.button`
    align-items: center;
    color: white;
    width: 5vw;
    height: 5vh;
    border-radius: 10%;
    margin: 1vh auto;
    font-size: calc(6px + .5vw);
    font-family: "Lucida Console", sans-serif;
    min-width: 50px;
    background-color: #4C4246;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: calc(10px + .5vw);
    color: white;
    padding: 1vh 1vw;
`

const Inputs = styled.div`
    display: block;
    width: 100%;
    padding: 1vh 0 1vh 1vw;
    margin: 1vh 0 1vh 5vw;
    position: relative;
`

const StyledInput = styled.input`
    display: flex;
    flex-direction: column;
    height: 7vh;
    width: 80%;
`

const Output= styled.p`
    font-size: calc(18px + .5vw);
    margin: 1vh 1vw;
    text-align: center;
`

const CalcBody = styled.div`
    background-color: #2e282aff;
    display: flex;
    width: 60%;
    margin: 2vh auto;
    height: 30vh;
    flex-direction: row;
    position: relative;
    min-width: 350px;
`

const ButtonRow = styled.div`
    margin: 1vh auto;
    display: block;
    width: 100%;
    position: relative;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export default function Calculator(){
    const [operation, setOperation] = useState("");
    const [positive, setPositive] = useState(true);
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const output = document.getElementById("output") as HTMLOutputElement;

    useEffect(() => {
        if (num1 !== "" && num2 !== "") {
            const number1 = Number(num1);
            const number2 = Number(num2);
            if(isNaN(number1) || isNaN(number2)){
                setPositive(false);
                output.innerHTML ="Please enter a valid number :)";
            }

            let result = 1;

            if(operation === "add"){
                result = number1 + number2;
            } else if(operation === "subtract"){
                result = number1 - number2;
            } else if(operation === "divide"){
                result = number1 / number2;
            } else if(operation === "multiply"){
                result = number1 * number2;
            } else if(operation === "power"){
                if(number2>1000){
                    setPositive(false);
                    output.innerHTML ="Please enter a smaller second number :)";
                    return;
                } else {
                    for (let i = 0; i < number2; i++) {
                        result *= number1;
                    }
                }
            } else {
                output.innerHTML =""
                return;
            }

            if (result < 0) {
                setPositive(false);
            } else {
                setPositive(true);
            }

            output.innerHTML = String(result);
            return;
        }
    }, [operation, num1, num2, output]);

    function clearCalc(){
        setNum1("");
        setNum2("");
        setOperation("");
        output.innerHTML = String("");
    }

    function addition(){
        setOperation("add");
    }

    function subtract(){
        setOperation("subtract");
    }

    function multiply(){
        setOperation("multiply");
    }

    function divide(){
        setOperation("divide");
    }

    function power(){
        setOperation("power");
    }

    return (
        <>
            <CalcBody>
                <Inputs>
                    <Label htmlFor="first-num-input">First Number:</Label>
                    <StyledInput type="text" value={num1}
                                 onChange={(e)=>setNum1(e.target.value)} id="first-num-input"/>
                    <Label htmlFor="second-num-input">Second Number:</Label>
                    <StyledInput type="text" value={num2}
                                 onChange={(e)=>setNum2(e.target.value)} id="second-num-input"/>
                </Inputs>

                <ButtonGroup>
                    <ButtonRow style={{paddingTop:"1.5vh"}}>
                        <Button onClick={addition}>+</Button>
                        <Button onClick={subtract}>-</Button>
                    </ButtonRow>

                    <ButtonRow>
                        <Button onClick={multiply}>*</Button>
                        <Button onClick={divide}>/</Button>
                    </ButtonRow>

                    <ButtonRow>
                        <Button onClick={power}>**</Button>
                        <ClearButton id="clear" onClick={clearCalc}>clear</ClearButton>
                    </ButtonRow>
                </ButtonGroup>

            </CalcBody>
            <Output id="output" style={{color: positive ? "black" : "red"}}></Output>
        </>
)
}