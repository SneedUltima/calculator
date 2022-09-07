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

// Values array
let values = [];

// Operators Array
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

// Number Event Listeners
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

function displayCalculate(operand, operandSymbol){
    operatorPressed = true;
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

btnEqual.addEventListener("click", () => {
    let value = Number(displayValue)
    values.push(value)
    operateValue = operate(operators[0],values[0], values[1])
    operateValue = +operateValue.toFixed(5);
    history.textContent += `${displayValue} = ${operateValue}`
    values = [operateValue]
    operators.shift()
    display.textContent = values[0];
})

btnDelete.addEventListener("click", () => {
    if(displayValue) {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    }
})

// Display Event Listeners
btnClear.addEventListener("click", () => {
    values = [];
    operators = [];
    displayValue = "0";
    display.textContent = displayValue;
    history.textContent = "";
    history.innerHTML += '&nbsp;';
})

