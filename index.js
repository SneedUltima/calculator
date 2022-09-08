// **** OPERATOR FUNCTIONS **** //

function add(value1, value2) {
    let answer = value1 + value2
    return answer
}

function subtract(value1, value2) {
    let answer = value1 - value2
    return answer
}

function multiply(value1, value2) {
    let answer = value1 * value2
    return answer
}

function divide(value1, value2) {
    let answer = value1 / value2
    return answer
}

function operate(operator, value1, value2) {
    let answer = operator(value1, value2)
    return answer
}

// **** DISPLAY FUNCTIONS **** //

// Initiliase display 
let displayValue = "";

// Variable to keep track whether operator has been pressed to correctly clear the display
let operatorPressed = ""

// Variable to keep track whether the decimal button has already been pressed
let decimalPressed = ""

// Values array to store number values
let values = [];

// Operators Array to store operator values
let operators = [];

// DOM Elements
let history = document.querySelector(".history")
let display = document.querySelector(".value-display")
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
const btn4 = document.querySelector("#btn-4")
const btn5 = document.querySelector("#btn-5")
const btn6 = document.querySelector("#btn-6")
const btn7 = document.querySelector("#btn-7")
const btn8 = document.querySelector("#btn-8")
const btn9 = document.querySelector("#btn-9")
const btn0 = document.querySelector("#btn-0")
const btnDecimal = document.querySelector("#btn-decimal")
const btnAdd = document.querySelector("#btn-add")
const btnSubtract = document.querySelector("#btn-subtract")
const btnMultiply = document.querySelector("#btn-multiply")
const btnDivide = document.querySelector("#btn-divide")
const btnEqual = document.querySelector("#btn-equal")
const btnDelete = document.querySelector("#btn-delete")
const btnClear = document.querySelector("#btn-clear")


// Function to clear display when number input
function removeZero() {
    if(display.textContent === "0") {
        displayValue = "";
    }
    if(operatorPressed) {
        displayValue = "";
        operatorPressed = ""
    }
    return;
}

// Number Button Event Listeners
btn1.addEventListener("click", () => {
    removeZero()
    displayValue += "1";
    display.textContent = displayValue;
   }
   )   

btn2.addEventListener("click", () => {
    removeZero()
    displayValue += "2";
    display.textContent = displayValue;
 })

btn3.addEventListener("click", () => {
    removeZero()
    displayValue += "3";
    display.textContent = displayValue;
 })

btn4.addEventListener("click", () => {
    removeZero()
    displayValue += "4";
    display.textContent = displayValue;
 })

btn5.addEventListener("click", () => {
    removeZero()
    displayValue += "5";
    display.textContent = displayValue;
 })

btn6.addEventListener("click", () => {
    removeZero()
    displayValue += "6";
    display.textContent = displayValue;
 })

btn7.addEventListener("click", () => {
    removeZero()
    displayValue += "7";
    display.textContent = displayValue;
 })

btn8.addEventListener("click", () => {
    removeZero()
    displayValue += "8";
    display.textContent = displayValue;
 })

btn9.addEventListener("click", () => {
    removeZero()
    displayValue += "9";
    display.textContent = displayValue;
 })

btn0.addEventListener("click", () => {
    displayValue += "0";
    display.textContent = displayValue;
 })

// Math Operator Event Listeners
btnAdd.addEventListener("click", () => {
    displayCalculate(add," + ");
})

btnSubtract.addEventListener("click", () => {
    displayCalculate(subtract, " - ")
})

btnMultiply.addEventListener("click", () => {
    displayCalculate(multiply, " * ");
})

btnDivide.addEventListener("click", () => {
    displayCalculate(divide, " / ")
})

// Main function to return and display calculated answer depending on the operator pressed
function displayCalculate(operand, operandSymbol){
    operatorPressed = true;
    decimalPressed = "";
    if(values.length < 1) {
        history.textContent = `${displayValue}${operandSymbol}`
        let value = Number(displayValue)
        values.push(value)
        operators.push(operand)
        display.textContent = 0;
        
    }
    else if(values.length >=1) {
        history.textContent += `${displayValue}${operandSymbol}`
        operators.push(operand)
        let value = Number(displayValue)
        values.push(value)
        operateValue = operate(operators[0],values[0], values[1])
        operateValue = +operateValue.toFixed(5);
        values = [operateValue]
        operators.shift()
        display.textContent = values[0];
    } 
    
}

btnDecimal.addEventListener("click", () => {
    if(displayValue && !decimalPressed) {
        displayValue += ".";
        display.textContent = displayValue;
        decimalPressed = true;
    }
})

btnEqual.addEventListener("click", () => {
    let value = Number(displayValue)
    values.push(value)
    operateValue = operate(operators[0],values[0], values[1])
    operateValue = +operateValue.toFixed(5);
    history.textContent += `${displayValue} = `
    values = [operateValue]
    operators.shift()
    display.textContent = values[0];
    decimalPressed = "";
})

// Event listener to add decimal value
btnDelete.addEventListener("click", () => {
    if(displayValue) {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    }
    if(!displayValue) {
        display.textContent = "0";
    }
})

// Event listener to clear display
btnClear.addEventListener("click", () => {
    values = [];
    operators = [];
    displayValue = "0";
    display.textContent = displayValue;
    history.textContent = "";
    history.innerHTML += '&nbsp;';
    decimalPressed = "";
})

