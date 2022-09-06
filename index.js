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

// Values array

let values = [];

let operators = [];

let zeroGone = false;

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
const btnClear = document.querySelector("#btn-clear")

// Function to clear display when number input
function removeZero() {
    if(display.textContent === "0") {
        displayValue = "";
    }
    if(values.length === 1) {
        displayValue = "";
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
    if(values.length < 1) {
        let value = Number(displayValue)
        values.push(value)
        operators.push(add)
        display.textContent = 0;
    }
    else if(values.length >=1) {
        operators.push(add)
        let value = Number(displayValue)
        values.push(value)
        console.log(operators);
        console.log(values);
        operateValue = operate(operators[0],values[0], values[1])
        console.log(operateValue);
        values = [operateValue]
        operators.shift()
        display.textContent = values[0];
    } 
})

btnSubtract.addEventListener("click", () => {
    if(values.length < 1) {
        let value = Number(displayValue)
        values.push(value)
        operators.push(subtract)
        display.textContent = 0;
    }
    else if(values.length >=1) {
        operators.push(subtract)
        let value = Number(displayValue)
        values.push(value)
        console.log(operators);
        console.log(values);
        operateValue = operate(operators[0],values[0], values[1])
        console.log(operateValue);
        values = [operateValue]
        operators.shift()
        display.textContent = values[0];
    } 
})

btnMultiply.addEventListener("click", () => {
    if(values.length < 1) {
        let value = Number(displayValue)
        values.push(value)
        operators.push(multiply)
        display.textContent = 0;
    }
    else if(values.length >=1) {
        operators.push(multiply)
        let value = Number(displayValue)
        values.push(value)
        console.log(operators);
        console.log(values);
        operateValue = operate(operators[0],values[0], values[1])
        console.log(operateValue);
        values = [operateValue]
        operators.shift()
        display.textContent = values[0];
    } 
})

btnDivide.addEventListener("click", () => {
    if(values.length < 1) {
        let value = Number(displayValue)
        values.push(value)
        operators.push(divide)
        display.textContent = 0;
    }
    else if(values.length >=1) {
        operators.push(divide)
        let value = Number(displayValue)
        values.push(value)
        console.log(operators);
        console.log(values);
        operateValue = operate(operators[0],values[0], values[1])
        console.log(operateValue);
        values = [operateValue]
        operators.shift()
        display.textContent = values[0];
    } 
})

btnEqual.addEventListener("click", () => {
    let value = Number(displayValue)
    values.push(value)
    console.log(operators);
    console.log(values);
    operateValue = operate(operators[0],values[0], values[1])
    console.log(operateValue);
    values = [operateValue]
    operators.shift()
    display.textContent = values[0];
})

// Display Event Listeners
btnClear.addEventListener("click", () => {
    values = [];
    operators = [];
    displayValue = "0";
    display.textContent = displayValue;
    history.textContent = "";
})

