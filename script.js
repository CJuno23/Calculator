const display = document.querySelector(".result1");
const add = document.querySelector(".addition");
const multiply = document.querySelector(".multiply")
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide")
const equals = document.querySelector(".equals");
const clearNumber = document.querySelector(".clear-each-number");
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
let firstNumber;
let secondNumber;
let currentInput; 
let isOperatorClicked = false;
let symbol;
let calculate;
let lastOperator;
numberButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const value = (event.target.textContent);
        currentInput = (currentInput || "") + value;
        display.textContent = currentInput;
        console.log(`CurrentInput:${currentInput}`);
    });
});
/*add.addEventListener("click", () => {
    symbol = "+";
    isOperatorClicked = true;
    if (firstNumber === undefined) {
        firstNumber = Number(currentInput)
    }else if (currentInput !== "") {
        secondNumber = Number(currentInput);
        if (lastOperator) {
            calculate = operate(lastOperator,firstNumber,secondNumber);
            firstNumber = calculate;
            display.textContent = firstNumber;
        }
    }
    
    currentInput = "";
    lastOperator = symbol;

    console.log(`First Number:${firstNumber}`)
    console.log(`Symbol:${symbol}`);
    console.log(`Operator Clicked: ${isOperatorClicked}`);
    console.log(`Current Input: ${currentInput}`);
});
multiply.addEventListener("click", () => {
    symbol = "*";
    isOperatorClicked = true;
    if (firstNumber === undefined) {
        firstNumber = Number(currentInput)
    }else if (currentInput !== "") {
        secondNumber = Number(currentInput);
        if (lastOperator) {
            calculate = operate(lastOperator,firstNumber,secondNumber);
            firstNumber = calculate;
            display.textContent = firstNumber;
        }
    }
  
    currentInput = "";
    lastOperator = symbol;
   
    console.log(`First Number:${firstNumber}`)
    console.log(`Symbol:${symbol}`);
    console.log(`Operator Clicked: ${isOperatorClicked}`);
    console.log(`Current Input: ${currentInput}`);
});
minus.addEventListener("click", () => {
    symbol = "-";
    isOperatorClicked = true;
    if (firstNumber === undefined) {
        firstNumber = Number(currentInput)
    }else if (currentInput !== "") {
        secondNumber = Number(currentInput);
        if (lastOperator) {
            calculate = operate(lastOperator,firstNumber,secondNumber);
            firstNumber = calculate;
            display.textContent = firstNumber;
        }  
    }
  
    currentInput = "";
    lastOperator = symbol;
   
    console.log(`First Number:${firstNumber}`)
    console.log(`Symbol:${symbol}`);
    console.log(`Operator Clicked: ${isOperatorClicked}`);
    console.log(`Current Input: ${currentInput}`);
});
divide.addEventListener("click", () => {
    symbol = "/";
    isOperatorClicked = true;
    if (firstNumber === undefined) {
        firstNumber = Number(currentInput)
    }else if (currentInput !== "") {
        secondNumber = Number(currentInput);
        if (lastOperator) {
            calculate = operate(lastOperator,firstNumber,secondNumber);
            firstNumber = calculate;
            display.textContent = firstNumber;
        }
    }
   
    currentInput = "";
    lastOperator = symbol;
   
    console.log(`First Number:${firstNumber}`)
    console.log(`Symbol:${symbol}`);
    console.log(`Operator Clicked: ${isOperatorClicked}`);
    console.log(`Current Input: ${currentInput}`);
});
    if (currentInput !== "") {
        secondNumber = Number(currentInput);
        const result = operate(lastOperator,firstNumber,secondNumber);
        display.textContent = result;
        firstNumber = result;
        currentInput = "";
        lastOperator = null;
    }*/

add.addEventListener("click", () => calc("+"));
minus.addEventListener("click", () => calc("-"));
multiply.addEventListener("click", () => calc("*"));
divide.addEventListener("click", () => calc("/"));
equals.addEventListener("click", () => equal());
clear.addEventListener("click", () => {
    clearCalculator();
});
clearNumber.addEventListener("click", () => {
   
});
function addition(num1,num2){
    return num1 + num2;
}
function subtraction(num1,num2){
    return num1-num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}
function operate(operator,num1,num2) {
    if (operator === "+") {
        return(addition(num1,num2));
    }else if (operator === "*") {
        return(multiplication(num1,num2));
    }else if (operator === "-") {
        return subtraction(num1,num2);
    }else if (operator === "/") {
        return division(num1,num2);
    }else {
        return "Invalid Operator";
    }
}
function clearCalculator () {
    firstNumber = undefined;
    secondNumber = undefined;
    currentInput = "";
    symbol = null;
    display.textContent = "";
}
function clearEachNumber () {
    let slice = currentInput;

}
function calc (op) {
   if (firstNumber === undefined) {
        firstNumber = Number(currentInput)
   }else if (currentInput !== "") {
        secondNumber = Number(currentInput);
        if (lastOperator) {
            calculate = operate(lastOperator,firstNumber,secondNumber);
            firstNumber = calculate;
            display.textContent = firstNumber;
        }
   }
   currentInput = "";
   lastOperator = op;
}
function equal () {
    if (currentInput !== "") {
        secondNumber = Number(currentInput);
        const result = operate(lastOperator,firstNumber,secondNumber);
        display.textContent = result;
        firstNumber = result;
        currentInput = "";
        lastOperator = null;
    }   
}
